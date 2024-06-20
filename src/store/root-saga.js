import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/category.saga';
// function* is generator function
export function* rootSaga() {
  yield all([call(categoriesSaga)])
}