import axios from 'axios';

//Create an action creator that will be responsible for manking an api request.
const API_ENDPOINT_TOP10 = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
const API_ENDPOINT_COIN = "https://api.coinmarketcap.com/v1/ticker/";

export const FETCH_COIN = 'FETCH_COIN';
export const FETCH_TOP_TEN_COINS = 'FETCH_TOP_TEN_COINS';

//Action creators always have to return an action which must always include a propery called 'type'. 
export function fetchCoin(coinName) {
	const url = `${API_ENDPOINT_COIN}${coinName}/`;
	const request = axios.get(url); // this returns a promise - stored in 'request'

	//payoad is an optional property that can go along with actions to contain additional info 
	//by passing a promise in the payload, ReduxPromise middleware will be able to detect that it's a promise
	//and handle the call then return the response to the reducer... allows us to have nice looking code in reducers.
	return {
		type: FETCH_COIN,
		payload: request
	};
}

//Action creators always have to return an action which must always include a propery called 'type'. 
export function fetchTopTenCoins() {
	const url = `${API_ENDPOINT_TOP10}`;
	const request = axios.get(url); // this returns a promise - stored in 'request'

	//payoad is an optional property that can go along with actions to contain additional info 
	//by passing a promise in the payload, ReduxPromise middleware will be able to detect that it's a promise
	//and handle the call then return the response to the reducer... allows us to have nice looking code in reducers.
	return {
		type: FETCH_TOP_TEN_COINS,
		payload: request
	};
}