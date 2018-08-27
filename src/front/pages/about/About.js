// @flow

// #region imports
import React, { PureComponent } from 'react';
import { type RouterProps } from '../../types/react-router';
import AnimatedView from '../../components/animatedView/AnimatedView';
// #endregion

// #region flow types
export type Props = { ...any } & RouterProps;
export type State = { ...any };
// #endregion

class About extends PureComponent<Props, State> {
  // #region life cycle
  render() {
    return (
      <AnimatedView>
        <h1>About</h1>
      </AnimatedView>
    );
  }
  // #endregion
}

export default About;
