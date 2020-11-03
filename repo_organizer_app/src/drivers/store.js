// -----------------------------
// File: src/drivers/store.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29 OCT 2020
// Brief: Store config (Redux)
// -----------------------------

// -----------------------------
// Importing external libraries
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Importing local libraries
import rootReducer from './rootReducers';
import rootMiddleware from './rootMiddleware';
// -----------------------------

// -----------------------------
// Creating middleware node
const middleware = createSagaMiddleware();
const enhancer = applyMiddleware(middleware);

// -----------------------------
// Creating store
const store = createStore(rootReducer, enhancer);

// -----------------------------
// Applying middleware node
middleware.run(rootMiddleware);

export default store;
