import fs from 'fs';
import _ from 'lodash';
//Looking into Higer Order funcions - Fileter, Map, Reduce
//################################################################################################################
//To run this program just pass this js file as an arguement to node <arg> on the commandline. 
var animals = [
	{ name: 'fluffykins', species: 'rabbit'},
	{ name: 'Caro', species: 'dog'},
	{ name: 'Hamilton', species: 'dog'},
	{ name: 'Harold', species: 'fish'},
	{ name: 'Ursula', species: 'cat'},
	{ name: 'Jimmy', species: 'fish'},
];
console.log('Getting only the dogs from animals array - using Filter');
//Retrieve only the dogs from the animals array
var dogs = [];
for(var i = 0; i < animals.length; i++) {
	if (animals[i].species === 'dog') {
		dogs.push(animals[i]);
	}
}
console.log(dogs);

//Functional equivalent - much easier to read
var isDog = function(animal) {
	return animal.species === 'dog';
}

var dogs = animals.filter(isDog); //notice how the function is treated as a value and passed to the filter function.
console.log(dogs);

//################################################################################################################
//Lets get all the names of the animals in an array.
//Firstly with a normal for-loop
console.log('Getting only the animal names - using Map');
/*var animalNames = [];
for(var i = 0; i<animals.length; i++) {
	animalNames.push(animals[i].name); 
}
*/
/*
var animalNames = animals.map(function(animal) {
	return animal.name;
});
*/
//ES6 arrow functions - shorter and better
//If your function logic fits on one line like this example, you can get ride of the return statement and the curly brackets.
var animalNames = animals.map((x) => { return x.name; });
console.log(animalNames);

//################################################################################################################
/*
	What is Reduce?

	Think of it as the multi-tool of list transformations. It can be used to express any list transformation.
	You can fallback on this function if you can't find a prebuild list transformation like map, reject, filter. 
*/
var orders = [
	{ amount: 250 },
	{ amount: 400 },
	{ amount: 100 },
	{ amount: 325 }
];

/* 
	In this case 'sum' is the object passed as the 2nd arg in reduce. 
	The iterated item in orders is now the 2nd arg in callback function.
*/
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
/* 
	Unlike map and filter, reduce want a second argument in the form of an object.
	You can think of this object (zero in our case), as the starting point for our sum. 
	The updated sum param is passed back into the callback for every new item in the array. 
*/

/* 
var totalAmount = 0;
for(var i = 0; i < orders.length; i++) {
	totalAmount += orders[i].amount;
}
*/
console.log(totalAmount);

//################################################################################################################
/*
	More advanced Reduce:

	Exploring more about the reduce function.
*/
//We work from left to right ------> function invokations pass resulting data to next function.
var out = fs.readFileSync('data.txt', 'utf8').split('\n').map(line => line.split('\t')).reduce((res, item) => {
	res[item[0]] = res[item[0]] || [];
	res[item[0]].push({
		name: item[1],
		price: item[2],
		quantity: item[3]
	});
	return res;
}, {});
console.log('output:\n', JSON.stringify(out, null, 2)) ;

/*
	For me, it makes reduce easier to understand when you use the same arguments every time.
	I use "result", "item" and "index". "result' is the result you're building up to in your
	reduce function, "item" is the current item you're iterating over, and "index" is the index.﻿

	Good functional code is made up of functions that do one thing and we just bind them all together.
	The chainability here is something that you'll see a lot of if you do functional programming.
*/

//################################################################################################################
/*
	Closures in Javascript
	A closure is the combination of a function and the lexical environment within which that function was declared.
	Inner functions have access to the variables of outer functions.

*/
//This is an example of lexical scoping. The word "lexical" refers to the fact that lexical scoping uses
// the location where a variable is declared within the source code to determine where that variable is available.
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();


/*
	In some programming languages, the local variables within a function exist only
	for the duration of that function's execution. Once makeFunc() has finished executing,
	you might expect that the name variable would no longer be accessible. 
	However, because the code still works as expected, this is obviously not the case in JavaScript.

	The reason is that functions in JavaScript form closures. A closure is the combination of a 
	function and the lexical environment within which that function was declared. This environment 
	consists of any local variables that were in-scope at the time the closure was created.
	In this case, myFunc is a reference to the instance of the function displayName
	created when makeFunc is run. The instance of displayName maintains a reference
	to its lexical environment, within which the variable name exists.
	For this reason, when myFunc is invoked, the variable name remains available for 
	use and "Mozilla" is passed to console.log().
*/

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log('Closure Example 2: ', name);
  }
  return displayName;//being returned from makeFunc() without being executed. 
}

var myFunc = makeFunc();
myFunc();


/*
	It is unwise to unnecessarily create functions within other functions if closures
	are not needed for a particular task, as it will negatively affect script performance
	both in terms of processing speed and memory consumption.

	For instance, when creating a new object/class, methods should normally be associated
	to the object's prototype rather than defined into the object constructor.
	The reason is that whenever the constructor is called, the methods would get reassigned
	(that is, for every object creation).


*/

//For example consider the following case: This code does not take advantage of closures.
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
//The above code could be rewritten as follows...
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
/*
	However, redefining the prototype is not recommended. 
	The following example instead appends to the existing prototype:
*/
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};

//################################################################################################################
/*
	Currying in Javascript
	A currieable function is simply a function that takes every arguement by itself and then just returns a new function
	that expects the next dependency to the function, until all dependencies have been fulfilled and the final value
	is returned.
*/

let dragon = 
	name => 
		size => 
			element => 
				name + ' is a ' +
				size + ' dragon that breathes ' + 
				element + '!';

let output = dragon('blaine')('small')('fire');
console.log(output);

//################################################################################################################
/*
	Recursion - by example

*/
//Below is heirarchial data represented in json. we will interpret it using recursion 
let categories = [
	{ id: 'animals', 'parent': null},
	{ id: 'mammals', 'parent': 'animals' },
	{ id: 'cats', 'parent': 'mammals' },
	{ id: 'dogs', 'parent': 'mammals' },
	{ id: 'chihuahua', 'parent': 'dogs' },
	{ id: 'labrador', 'parent': 'dogs' },
	{ id: 'persian', 'parent': 'cats' },
	{ id: 'siamese', 'parent': 'cats' },
]
/*
	We want to make it look like this: 
	{
		animals: {
			mammals: {
				dogs: {
					chihuahua: null,
					labrador: null
				},
				cats: {
					persian: null,
					siamese: null
				}
			}
		}
	}
*/

let makeTree = (categories, parent) => {
	let node = {};
	categories
	.filter(c => c.parent === parent)
	.forEach(c => node[c.id] = 
		makeTree(categories, c.id)) 
	return node;
}
console.log(JSON.stringify(makeTree(categories, null), null, 2 ));




