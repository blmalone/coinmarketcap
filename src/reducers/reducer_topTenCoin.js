import { FETCH_TOP_TEN_COINS } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_TOP_TEN_COINS: 
			console.log('FETCH_TOP_TEN_COINS', action.payload.data);
			return action.payload.data;
	}
	return state;
}