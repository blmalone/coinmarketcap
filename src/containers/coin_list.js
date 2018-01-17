import React, { Component } from 'react';

export default class CoinList extends Component {
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
				</tbody>
			</table>
		);
	}
}