// @flow weak

import React            from 'react';
import About            from '../../../../src/app/views/about/About';
import renderer         from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { 
  MemoryRouter
}                       from 'react-router';
import {
  shallow
}                       from 'enzyme';

describe('About component', () => {
  it('renders as expected', () => {
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterAbout: () => {},
      leaveAbout: () => {},
      currentView: 'About'
    };

    const component = renderer.create(
      <div>
        <MemoryRouter>
          <About {...mockProps} />
        </MemoryRouter>
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('triggers enterAbout on mount', () => {
    const mockEnterAbout = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterAbout: mockEnterAbout,
      leaveAbout: () => {},
      currentView: 'About'
    };

    /* eslint-disable no-unused-vars */
    const wrapper = shallow(
      <About {...mockProps} />
    );

    // expect(mockEnterAbout).toBeCalled();
    expect(mockEnterAbout.mock.calls.length).toBe(1);
  });

  it('triggers leaveAbout on unMount', () => {
    const mockLeaveAbout = jest.fn();
    const mockProps = {
      // react-router 4:
      match: {},
      location: {},
      history: {},
      // views:
      enterAbout: () => {},
      currentView: 'About',
      leaveAbout: mockLeaveAbout
    };

    const wrapper = shallow(
      <About {...mockProps} />
    );

    wrapper.unmount();
    // expect(mockLeaveAlert).toBeCalled();
    expect(mockLeaveAbout.mock.calls.length).toBe(1);
  });
});
