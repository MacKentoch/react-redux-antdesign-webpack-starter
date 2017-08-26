// @flow weak

import React            from 'react';
import PageNotFound     from '../../../../src/app/views/pageNotFound/PageNotFound';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  MemoryRouter
}                       from 'react-router';

describe('PageNotFound component', () => {
  it('renders as expected', () => {
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {}
    };

    const component = renderer.create(
      <div>
        <MemoryRouter>
          <PageNotFound {...mockProps} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
