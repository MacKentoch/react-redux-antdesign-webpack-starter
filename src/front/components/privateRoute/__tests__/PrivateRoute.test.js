// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { Route, Switch } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import PrivateRoute from '../PrivateRoute';
// #endregion

describe('PrivateRoute component', () => {
  it('renders as expected', () => {
    const props = {
      location: '/',
      component: () => <p>Inner component</p>,
    };

    const component = renderer
      .create(
        <MemoryRouter>
          <Switch>
            <Route path="/" component={() => <p>Home</p>} />
            <Route path="/login" component={() => <p>Login</p>} />
            <PrivateRoute {...props} />
          </Switch>
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
