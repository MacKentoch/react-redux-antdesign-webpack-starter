// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, About, Protected, PrivateRoute } from './routes';
// #endregion

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  );
};

export default MainRoutes;
