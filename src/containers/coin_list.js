import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accounting } from 'accounting';

class CoinList extends Component {
	renderCoin(coinData){
		return (
			<tr key={coinData.symbol}>
				<td>
					{coinData.name}
				</td>
				<td>
					${accounting.formatNumber(coinData.market_cap_usd)}
				</td>
				<td>
					{accounting.formatMoney(coinData.price_usd)}
				</td>
				<td>
					&nbsp;{accounting.formatNumber(coinData.percent_change_24h)} /
					&nbsp;{accounting.formatNumber(coinData.percent_change_7d)}
				</td>
			</tr>
		);
	}
	displayPrompt(coinData) {
		if(coinData.length === 0 ){
			return ( 
				<tr>
					<td>
						Search for a specific coin or token...
					</td>
				</tr>
			);
		}
	}
	render() {
		return (
			<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Coin Name</th>
						<th>Market Cap</th>
						<th>Price</th>
						<th>% Change (24hr/7days)</th>
					</tr>
				</thead>
				<tbody>
					{this.displayPrompt(this.props.coin)}
					{this.props.coin.map(this.renderCoin)}
				</tbody>
			</table>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Top Ten</th>
					</tr>
					<tr>
						<th>Coin Name</th>
						<th>Market Cap</th>
						<th>Price</th>
						<th>% Change (24hr/7days)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.topTen.map(this.renderCoin)}
				</tbody>
			</table>
			</div>
		);
	}
}

function mapStateToProps(state) { //or we can just use ES6 syntax -- mapStateToProps({ coin }) 
	return {
		coin: state.coin,
		topTen: state.topTen
	};
}

export default connect(mapStateToProps)(CoinList); // we export this because this is the 'connected' version of coin_list :)