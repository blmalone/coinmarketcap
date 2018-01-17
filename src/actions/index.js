import axios from 'axios';

//Create an action creator that will be responsible for manking an api request.
const API_ENDPOINT_TOP10 = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
const API_ENDPOINT_COIN = "https://api.coinmarketcap.com/v1/ticker/";

export const FETCH_COIN = 'FETCH_COIN';

//Action creators always have to return an action which must always include a propery called 'type'. 
export function fetchCoin(coinName) {
	const url = `${API_ENDPOINT_COIN}${coinName}/`;
	const request = axios.get(url); // this returns a promise - stored in 'request'
	//payoad is an optional property that can go along with actions to contain additional info 
	return {
		type: FETCH_COIN,
		payload: request
	};
}