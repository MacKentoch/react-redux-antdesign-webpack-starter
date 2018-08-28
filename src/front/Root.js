// @flow
/* eslint-disable no-process-env */

// #region imports
import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/store/configureStore';
import { createBrowserHistory } from 'history';
import App from './layout/mainLayout';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import Login from './views/login';
import PageNotFound from './views/pageNotFound'; // not connected to redux (no index.js)
import LogoutRoute from './components/logoutRoute/LogoutRoute';
// #endregion

// #region constants
const history = createBrowserHistory();
const store = configureStore();
const syncedHistory = syncHistoryWithStore(history, store);
// #endregion

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            <ScrollTop>
              <Switch>
                <Route exact path="/login" component={Login} />
                <App />
                {/* logout: just redirects to login (App will take care of removing the token) */}
                <LogoutRoute path="/logout" />
                <Route component={PageNotFound} />
              </Switch>
            </ScrollTop>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default Root;
