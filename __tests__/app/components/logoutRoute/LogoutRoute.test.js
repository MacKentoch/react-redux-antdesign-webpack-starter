// @flow weak

import React              from 'react';
import LogoutRoute        from '../../../../src/app/components/logoutRoute/LogoutRoute';
import renderer           from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { 
  MemoryRouter
}                         from 'react-router';
import localStorageMock   from '../../../../__mocks__/localStorage';
import sessionStorageMock from '../../../../__mocks__/sessionStorage';

window.localStorage   = localStorageMock; 
window.sessionStorage = sessionStorageMock;


describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <LogoutRoute />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
