import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getWeather } from '../../store/actions/actionCreators';
import WeatherCarouselTpl from './WeatherCarouselTpl';

class WeatherCarousel extends Component {
	static propTypes = {
		getWeather: PropTypes.func.isRequired,
		selected: PropTypes.array.isRequired,
		weather: PropTypes.object
	};

	componentDidMount() {
		let i = 0;

		this.getCity(0);
		setInterval(() => {
			if (i < this.props.selected.length - 1) {
				i++;
			} else {
				i = 0;
			}

			this.getCity(i);
		}, 5000);
	}

	getCity(count) {
		this.props.getWeather(encodeURIComponent(this.props.selected[count]));
	}

	render() {
		return (
			<Fragment>
				{ this.props.weather.location && <WeatherCarouselTpl details={this.props.weather} /> }
			</Fragment>
		);
	}
}

function mapStateToProps(store) {
	return {
		weather: store.dataReducer.details
	};
}

const mapDispatchToProps = {
	getWeather
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCarousel);