// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import MainLayout from '../MainLayout';
import navigationModel from '../../../config/navigation.json';
// #endregion

// #region jest mocks
jest.mock('../../../routes/routes', () => ({
  Home: () => <p>home</p>,
  About: () => <p>home</p>,
  Protected: () => <p>home</p>,
  PrivateRoute: () => <p>home</p>,
}));
// #endregion

describe('MainLayout component', () => {
  const props = {
    navModel: navigationModel,
    selectedSidemenu: ['/'],
  };

  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <MainLayout {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
