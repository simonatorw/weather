import React from 'react';
import PropTypes from 'prop-types';

import './WeatherCarousel.scss'

const WeatherCarouselTpl = ({
	details: {
		location: { city, region },
		item: {
			condition: { temp, text },
			forecast: [{ high, low }]
		}
	}
}) => {
	return (
		<table className="weather-box">
			<tbody>
				<tr>
					<td className="city">{city}, {region}</td>
					<td rowSpan="2" className="temp">{temp}&deg;</td>
          <td className="hi-lo"><span className="label">H</span>{high}&deg;</td>
				</tr>
				<tr>
					<td className="condition">{text}</td>
					<td className="hi-lo"><span className="label">L</span>{low}&deg;</td>
				</tr>
			</tbody>
		</table>
	);
};

WeatherCarouselTpl.propTypes = {
	details: PropTypes.object.isRequired
};

export default WeatherCarouselTpl;