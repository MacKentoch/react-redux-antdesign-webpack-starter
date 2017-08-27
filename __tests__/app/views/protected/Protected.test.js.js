// @flow weak

import React            from 'react';
import Protected        from '../../../../src/app/views/protected/Protected';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import {
  MemoryRouter
}                       from 'react-router';
import {
  mount
}                       from 'enzyme';


describe('Protected component', () => {
  it('renders as expected', () => {
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      currentView:      'Protected',
      enterProtected:   () => {},
      leaveProtected:   () => {}
    };

    const component = renderer.create(
      <div>
        <MemoryRouter>
          <Protected {...mockProps} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });


  it('triggers enterProtected on mount', () => {
    const mockEnterProtected = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterProtected: mockEnterProtected,
      currentView: 'Protected',
      leaveProtected: () => {}
    };

    /* eslint-disable no-unused-vars */
    // shallow would not call componentDidMount, so we use mount is that case:
    const wrapper = mount(
      <Protected {...mockProps} />
    );

    expect(mockEnterProtected.mock.calls.length).toBe(1);
  });

  it('triggers leaveProtected on unMount', () => {
    const mockLeaveProtected = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterProtected: () => {},
      currentView: 'Protected',
      leaveProtected: mockLeaveProtected
    };

    const wrapper = mount(
      <Protected {...mockProps} />
    );

    wrapper.unmount();

    expect(mockLeaveProtected.mock.calls.length).toBe(1);
  });
});
