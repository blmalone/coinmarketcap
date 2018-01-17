import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accounting } from 'accounting';

class CoinList extends Component {
	renderCoin(coinData){
		return (
			<tr key={coinData[0].symbol}>
				<td>
					{coinData[0].name}
				</td>
				<td>
					${accounting.formatNumber(coinData[0].market_cap_usd)}
				</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Coin Name</th>
						<th>Market Cap</th>
						<th>Price</th>
						<th>%Change (24hr)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.coin.map(this.renderCoin)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) { //or we can just use ES6 syntax -- mapStateToProps({ coin }) 
	return {
		coin: state.coin
	};
}

export default connect(mapStateToProps)(CoinList); // we export this because this is the 'connected' version of coin_list :)