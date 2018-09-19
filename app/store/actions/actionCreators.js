import actionTypes from './actionTypes';

export const getWeather = (city) => ({
	type: actionTypes.GET_WEATHER,
	city
});

export const getWeatherSucceeded = (data) => ({
	type: actionTypes.GET_WEATHER_SUCCEEDED,
	data
});

export const getWeatherFailed = (err) => ({
	type: actionTypes.GET_WEATHER_FAILED,
	err
});

