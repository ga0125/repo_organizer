// -----------------------------
// File: src/Components/Home/logic/Main.middleware.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 31 oct 2020
// Brief: Main middleware (Redux saga)
// -----------------------------

import { put, all, takeLatest } from 'redux-saga/effects';
import apiInstance from '../../../drivers/api.server';
import { HomeActionSuccess, HomeActionError } from './Main.actions';

// -----------------------------
// Create Main middleware
function* MainMiddleware(action) {
  try {
    const response = yield apiInstance.post(`${process.env.REACT_APP_API_VERSION_ROUTE}/repositories`,
      {
        language_type: action.languageType ? action.languageType : '',
        page_ID: action.pageID ? action.pageID : 1,
      });

    yield put(HomeActionSuccess(response.data));
  } catch (error) {
    yield put(HomeActionError(error));
  }
}

// -----------------------------
// Create Main middleware
function* UserFilterMiddleware(action) {
  try {
    const response = yield apiInstance.post(`${process.env.REACT_APP_API_VERSION_ROUTE}/repository`,
      {
        username: action.username,
      });

    yield put(HomeActionSuccess(response.data));
  } catch (error) {
    yield put(HomeActionError(error));
  }
}

// -----------------------------
// Joining middleware with their respectives actions
export default all([
  takeLatest('IS_RENDERING', MainMiddleware),
  takeLatest('FILTER_OPTION', MainMiddleware),
  takeLatest('BY_USER', UserFilterMiddleware),
]);
