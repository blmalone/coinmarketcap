import fs from 'fs';
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


/*
	For me, it makes reduce easier to understand when you use the same arguments every time.
	I use "result", "item" and "index". "result' is the result you're building up to in your
	reduce function, "item" is the current item you're iterating over, and "index" is the index.﻿
*/










