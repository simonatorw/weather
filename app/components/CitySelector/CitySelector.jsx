import React from 'react';
import PropTypes from 'prop-types';

import './CitySelector.scss'

const CitySelector = ({ cities, updateCity, getValue }) => {
	return (
		<table>
			<tbody>
				<tr>
					<td className="list-container">
						<h2>Available</h2>
						<select multiple className="list" onChange={getValue.bind(this, 'add')}>
							{ cities.available.map((item, i) => <option key={item} value={i} className="listItem">{item}</option>) }
						</select>
					</td>
					<td className="list-container">
					<h2>Selected</h2>
						<select multiple className="list" onChange={getValue.bind(this, 'remove')}>
						{ cities.selected.map((item, i) => <option key={item} value={i} className="listItem">{item}</option>) }
						</select>
					</td>
				</tr>
				<tr>
					<td><button onClick={updateCity.bind(this, 'add')}>Add</button></td>
					<td><button onClick={updateCity.bind(this, 'remove')}>Remove</button></td>
				</tr>
			</tbody>
		</table>
	);
};

CitySelector.propTypes = {
	cities: PropTypes.object.isRequired
};

export default CitySelector;