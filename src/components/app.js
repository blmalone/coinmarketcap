import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import CoinList from '../containers/coin_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SearchBar />
      	<CoinList />
      </div>
    );
  }
}
