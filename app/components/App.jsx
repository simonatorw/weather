import React, { Component } from 'react';

import CitySelector from './CitySelector/CitySelector';
import WeatherCarousel from './WeatherCarousel/WeatherCarousel';

import './App.scss';

class App extends Component {
	state = {
		cities: {
			selected: ['San Diego, CA', 'New York, NY', 'Juneau, AK'],
			available: ['Chicago, IL', 'Denver, CO', 'Miami, FL']
		},
		addSelected: null,
		removeSelected: null
	};

	getValue = (val, e) => {
		this.setState({ [`${val}Selected`]: e.target.value });
	}

	updateCity = (action) => {
		let aList, bList;

		if (action === 'add') {
			aList = 'selected';
			bList = 'available';
		} else {
			bList = 'selected';
			aList = 'available';
		}

		if (this.state[`${action}Selected`] !== null) {
			const selList = this.state.cities[aList].slice();
			const avaList = this.state.cities[bList].slice();

			selList.push(this.state.cities[bList][this.state[`${action}Selected`]]);
			avaList.splice(this.state[`${action}Selected`], 1);
			this.setState({ cities: { [aList]: selList, [bList]: avaList }, [`${action}Selected`]: null });
		}
	}
	
	render() {
		return (	
			<div className="main">
				<h1>Daily Weather</h1>
				<CitySelector cities={this.state.cities} updateCity={this.updateCity} getValue={this.getValue} />
				<WeatherCarousel selected={this.state.cities.selected} />
			</div>
		);
	}
}

/*
function mapStateToProps(store) {
	return {
		products: store.dataReducer.products,
		cart: store.appReducer.cart
	};
}

const mapDispatchToProps = {
	getProducts
};*/

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;