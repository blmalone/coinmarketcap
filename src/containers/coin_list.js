import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoinList extends Component {
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
					<tr>
						<th>Coin Name</th>
						<th>Market Cap</th>
						<th>Price</th>
						<th>%Change (24hr)</th>
					</tr>
				</thead>
				<tbody>
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