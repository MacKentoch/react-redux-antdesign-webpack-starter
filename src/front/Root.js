// @flow
/* eslint-disable no-process-env */

// #region imports
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { history } from './redux/store/configureStore';
import configureStore from './redux/store/configureStore';
import App from './layout/mainLayout';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import { Login, PageNotFound } from './routes/routes';
import LogoutRoute from './components/logoutRoute/LogoutRoute';
// #endregion

// #region flow types
export type Props = {};

export type State = {};
// #endregion

// #region constants
const store = configureStore();
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollTop>
            <Switch>
              <Route exact path="/login" component={Login} />
              <App />
              {/* logout: just redirects to login (App will take care of removing the token) */}
              <LogoutRoute path="/logout" />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ScrollTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
