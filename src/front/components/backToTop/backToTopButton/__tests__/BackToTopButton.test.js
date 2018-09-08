// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import BackToTopButton from '../BackToTopButton';
// #endregion

describe('BackToTopButton component', () => {
  it('renders as expected', () => {
    const props = {
      position: null, // should be bottom-right by default
      onClick: () => {},
      motionStyle: {},
    };

    const component = renderer
      .create(
        <div>
          <BackToTopButton {...props}>
            <p>a child</p>
          </BackToTopButton>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
