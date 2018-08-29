// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import auth from '../../services/auth';
import { type RouterProps } from '../../types/react-router';
// #endregion

// #region flow types
type Props = {
  ...any,
} & RouterProps;

type State = any;
// #endregion

class LogoutRoute extends PureComponent<Props, State> {
  // #region lifecycle
  componentDidMount() {
    auth.clearAllAppStorage();
  }

  render() {
    return (
      <Route {...this.props}>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }
  // #endregion
}

export default withRouter(LogoutRoute);
