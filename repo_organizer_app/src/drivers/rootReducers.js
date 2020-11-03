// -----------------------------
// File: src/drivers/rootReducer.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 30 oct 2020
// Brief: Reducer config (Redux)
// -----------------------------

// -----------------------------
// Importing redux libraries
import { combineReducers } from 'redux';
import listRepoReducers from '../Components/Main/logic/Main.reducers';

// -----------------------------
// Creating global reducers

export default combineReducers({
  listRepoReducers,
});
