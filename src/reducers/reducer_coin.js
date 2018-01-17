import { FETCH_COIN } from '../actions/index';

//'state' concerns the state that this particular reducer is responsible for.
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_COIN: //handle the payload when you're in the case statement.
			console.log(action.payload.data);
			//never state.push() -- concat doesn't mutate existing state, it returns new state.
			return state.concat([ action.payload.data ]); 
			//return [ action.payload.data, ...state ]; <-- this is identical to the above, it is es6 syntax. (this is reverse insert, easily changed by swap)

	}
	return state;
}