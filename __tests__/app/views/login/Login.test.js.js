// @flow weak

import React            from 'react';
import Login            from '../../../../src/app/views/login/Login';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  MemoryRouter
}                       from 'react-router';
import {
  // shallow,
  mount
}                       from 'enzyme';

describe('Login component', () => {
  it('renders as expected', () => {
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterLogin: () => {},
      leaveLogin: () => {},
      currentView: 'Login',
      // userAuth:
      // isAuthenticated: false,
      // isFetching:      false,
      // isLogging:       false,
      disconnectUser:  () => {},
      logUserIfNeeded: () => {}
    };

    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Login {...mockProps} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterLogin on mount', () => {
    const mockEnterLogin = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterLogin: mockEnterLogin,
      currentView: 'Login',
      leaveLogin: () => {},
      // userAuth:
      // isAuthenticated: false,
      // isFetching:      false,
      // isLogging:       false,
      disconnectUser:  () => {},
      logUserIfNeeded: () => {}
    };

    /* eslint-disable no-unused-vars */
    // shallow would not call componentDidMount, so we use mount is that case:
    const wrapper = mount(
      <Login {...mockProps} />
    );

    expect(mockEnterLogin.mock.calls.length).toBe(1);
  });

  it('triggers leaveLogin on unMount', () => {
    const mockLeaveLogin = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterLogin: () => {},
      currentView: 'Login',
      leaveLogin: mockLeaveLogin,
      // userAuth:
      // isAuthenticated: false,
      // isFetching:      false,
      // isLogging:       false,
      disconnectUser:  () => {},
      logUserIfNeeded: () => {}
    };

    const wrapper = mount(
      <Login {...mockProps} />
    );

    wrapper.unmount();

    expect(mockLeaveLogin.mock.calls.length).toBe(1);
  });
});
