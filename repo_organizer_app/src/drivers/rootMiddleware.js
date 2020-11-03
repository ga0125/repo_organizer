// -----------------------------
// File: rootMiddleware.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 31 oct 2020
// Brief: Middleware config (Redux Saga)
// -----------------------------

// -----------------------------
// Importing libraries
import { all } from 'redux-saga/effects';

import MainMiddleware from '../Components/Main/logic/Main.middleware';

export default function* rootMiddleware() {
  return yield all([
    MainMiddleware,
  ]);
}
