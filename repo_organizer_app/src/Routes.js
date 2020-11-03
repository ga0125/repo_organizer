// -----------------------------
// File: src/Routes.js
// Author: Gabriel Zacchi Braga (POC)
// Date: 29 oct 2020
// Brief: Applications routes
// -----------------------------

// -----------------------------
// Import react libraries
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './Components/Main/render/Main.component';

export default function AppRoutes() {
  return (
    <Switch>
      <Route exact from="/" component={Main} />
    </Switch>
  );
}
