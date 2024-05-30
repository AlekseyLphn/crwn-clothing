import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategorieSuccess, fetchCategorieFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.type';

export function* fetchCategoriesAcync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategorieSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategorieFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAcync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
