import { all } from 'redux-saga/effects';

import watchFetchAll from './fetchAll';

export default function* rootSaga() {
	yield all([
		watchFetchAll()
	]);
}