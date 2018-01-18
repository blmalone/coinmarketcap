import { combineReducers } from 'redux';
import CoinReducer from './reducer_coin';
import TopTenCoinReducer from './reducer_topTenCoin';

const rootReducer = combineReducers({
  coin: CoinReducer,
  topTen: TopTenCoinReducer
});

export default rootReducer;
