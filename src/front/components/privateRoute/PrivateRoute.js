// @flow

// #region imports
import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import auth from '../../services/auth';
import { type RouterProps } from '../../types/react-router';
// #endregion

// #region flow types
type Props = {
  component: React.ReactNode,
  path: string,
  ...any,
} & RouterProps;

type State = any;
// #endregion

class PrivateRoute extends Component<Props, State> {
  // #region lifecycle
  render() {
    const { component: InnerComponent, ...rest } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();
    const isTokenExpired = this.isExpired();

    return (
      <Route
        {...rest}
        render={props =>
          !isTokenExpired && isUserAuthenticated ? (
            <InnerComponent {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }
  // #endregion

  // #region check user is authenticated (token and userId)
  isAuthenticated() {
    const checkUserHasId = user => user && user.id;
    const user = auth.getUserInfo() ? auth.getUserInfo() : null;
    const isAuthenticated =
      auth.getToken() && checkUserHasId(user) ? true : false;
    return isAuthenticated;
  }
  // #endregion

  // #region check token is not expired
  isExpired() {
    // comment me:
    console.log(
      'token expires: ',
      auth.getTokenExpirationDate(auth.getToken()),
    );

    return auth.isExpiredToken(auth.getToken());
  }
  // #endregion
}

export default withRouter(PrivateRoute);
