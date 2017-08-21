// @flow weak

import React            from 'react';
import PrivateRoute     from '../../../../src/app/components/privateRoute/PrivateRoute';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { 
  MemoryRouter
}                       from 'react-router';

jest.mock('../../../../src/app/services/auth/index.js');

describe('PrivateRoute component', () => {
  const MockedInnerComponent  = (<h1>Mocked inner component</h1>);
  const mockedPath            = './somePrivatePath';

  const mockedProps = {
    component:  MockedInnerComponent,
    path:       mockedPath
  };

  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MemoryRouter>
          <PrivateRoute  {...mockedProps} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
