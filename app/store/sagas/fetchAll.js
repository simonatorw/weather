import { call, put, takeEvery } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import { getWeatherSucceeded, getWeatherFailed } from '../actions/actionCreators';
import { fetchGet } from '../../api/async';
import { getUrl } from '../../constants';

export function* fetchAll(action) {
	try {
		const data = yield call(fetchGet, getUrl(action.city));

		yield put(getWeatherSucceeded(data));
	} catch (err) {
		console.log(err);
		yield put(getWeatherFailed(err));
	}
}

export default function* watchFetchAll() {
	yield takeEvery(actionTypes.GET_WEATHER, fetchAll);
}
