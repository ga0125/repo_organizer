// -----------------------------
// File: src/Components/Home/logic/Main.actions.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 31 oct 2020
// Brief: Main actions (Redux)
// -----------------------------

// -----------------------------
// Compose Home actions
export function HomeActionRequest(pageID, languageType) {
  return {
    type: 'IS_RENDERING',
    pageID,
    languageType,
  };
}

export function FilterHomeActionRequest(languageType) {
  return {
    type: 'FILTER_OPTION',
    languageType,
  };
}

export function UserHomeActionRequest(username) {
  return {
    type: 'BY_USER',
    username,
  };
}

export function HomeActionSuccess(data) {
  return {
    type: 'RENDERED_SUCCESSFUL',
    data,
  };
}

export function HomeActionError(error) {
  return {
    type: 'RENDERED_ERROR',
    error,
  };
}
