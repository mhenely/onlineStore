import { takeLatest, all, call, put} from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';



// export const fetchCategoriesAsync = () => async(dispatch) => {

//   dispatch(fetchCategoriesStart());

//   try {
//     const categoriesArray = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   }
//   catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// }

export function* fetchCategoriesAsync() {
  try {
    // grab firebase DB data
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    // put/dispatch db data
    yield put(fetchCategoriesSuccess(categoriesArray));
  }
  catch(error) {
    yield put(fetchCategoriesFailed(error));
  }
}

// generator function for redux-saga
export function* onFetchCategories() {
  // taking latest action from fetch categories start and initialize fetchCategoriesAsync saga
  // 
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga () {
  // doesn't progress until all array elements are complete
  yield all([call(onFetchCategories)])
}