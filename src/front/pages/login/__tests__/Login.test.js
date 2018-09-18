// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import Login from '../Login';
// #endregion

// NOTE: react-test-renderer won't work if component uses ref (like antd Button and Icon)
// ONLY solution: mock these components
jest.mock('antd/lib/button', () => () => <button>mocked button</button>);
jest.mock('antd/lib/icon', () => <i>icon</i>);
jest.mock('antd/lib/input', () => <input type="text" />);
jest.mock('antd/lib/layout', ({ children }) => <div>{children}</div>);
jest.mock('antd/lib/wave', () => <div />);

describe('Login page', () => {
  it('renders as expected', () => {
    const props = {};
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <Login {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
