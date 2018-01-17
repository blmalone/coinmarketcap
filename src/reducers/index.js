import { combineReducers } from 'redux';
import CoinReducer from './reducer_coin';

const rootReducer = combineReducers({
  coin: CoinReducer 
});

export default rootReducer;
