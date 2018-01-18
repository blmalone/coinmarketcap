import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoin, fetchTopTenCoins } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.props.fetchTopTenCoins();
	}
	onInputChange(event) {
		this.setState({ term : event.target.value }); //we are ensuring the input element is a controlled component.
	}
	onFormSubmit(event) {
		event.preventDefault();
		//Fetch coin data
		this.props.fetchCoin(this.state.term); //why is the action creator in props? because we mapDispatchToProps (below)
		this.setState({ term: '' });
	}
	render() {
		//className is from boot-strap js.
		//form tag is good as you get submit functionality by default
		//we have callback functions passed to these HTML elements -> this causes confusion with the context of this (use bind())
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Search for coin or token"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCoin, fetchTopTenCoins }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);