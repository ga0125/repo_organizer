// -----------------------------
// File: src/Components/Home/logic/Main.reducers.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 30 oct 2020
// Brief: Main reducers (Redux)
// -----------------------------

// -----------------------------
// Main reducer function
export default function listRepoReducers(state = { isError: false }, action) {
  switch (action.type) {
    case 'RENDERED_SUCCESSFUL':
      return { ...state, data: action.data, isError: false };
    case 'RENDERED_ERROR':
      return { ...state, isError: true };
    default:
      return state;
  }
}
