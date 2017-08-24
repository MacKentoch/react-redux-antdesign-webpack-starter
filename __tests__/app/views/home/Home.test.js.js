// @flow weak

import React            from 'react';
import Home             from '../../../../src/app/views/home/Home';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { 
  MemoryRouter
}                       from 'react-router';
import {
  shallow,
  mount
}                       from 'enzyme';

describe('Home component', () => {
  it('renders as expected', () => {
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterHome: () => {},
      leaveHome: () => {},
      currentView: 'About'
    };

    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Home {...mockProps} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterHome on mount', () => {
    const mockEnterHome = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterHome: mockEnterHome,
      currentView: 'Home',
      leaveHome: () => {}
    };

    /* eslint-disable no-unused-vars */
    // shallow would not call componentDidMount, so we use mount is that case:
    const wrapper = mount(
      <Home {...mockProps} />
    );

    expect(mockEnterHome.mock.calls.length).toBe(1);
  });

  it('triggers leaveHome on unMount', () => {
    const mockLeaveHome = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterHome: () => {},
      currentView: 'Home',
      leaveHome: mockLeaveHome
    };

    const wrapper = shallow(
      <Home {...mockProps} />
    );

    wrapper.unmount();

    expect(mockLeaveHome.mock.calls.length).toBe(1);
  });
});
