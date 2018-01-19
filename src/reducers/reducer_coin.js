import { FETCH_COIN } from '../actions/index';

//Redux lets you compose reducers rather than deal with the entire app state
// inside each reducer. The result is that you don’t have to create a deep clone
// of the entire app state every time you want to update just a small part of it.
//'state' concerns the state that this particular reducer is responsible for.
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_COIN: //handle the payload when you're in the case statement.
			console.log('FETCH_COIN: ', action.payload.data);
			//never state.push() -- concat doesn't mutate existing state, it returns new state. 
			//you could end up mutating shared state and then the function is NOT pure.
			return state.concat([ action.payload.data[0] ]); 
			//return [ action.payload.data, ...state ]; <-- this is identical to the above, it is es6 syntax. (this is reverse insert, easily changed by swap)
	}
	return state;
}