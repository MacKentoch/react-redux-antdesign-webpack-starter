// @flow

// #region imports
import React, { Component } from 'react';
import cx from 'classnames';
// #endregion

// #region flow types
export type Props = {
  children: React.ReactNode,
  animated: boolean,
  ...any,
};

export type State = { ...any };
// #endregion

class AnimatedView extends Component<Props, State> {
  static defaultProps = {
    animated: true,
  };

  // #region lifecycle
  render() {
    const { animated, children } = this.props;

    return (
      <section
        className={cx({
          content: true,
          'view-enter': animated,
        })}
      >
        {children}
      </section>
    );
  }
  // #endregion
}

export default AnimatedView;
