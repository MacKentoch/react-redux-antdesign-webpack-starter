// @flow

// #reigon imports
import React, { PureComponent } from 'react';
import AnimatedView from '../../components/animatedView/AnimatedView';
import { type RouterProps } from '../../types/react-router';
// #endregion

// #region flow types
export type Props = { ...any } & RouterProps;
export type State = { ...any };
// #endregion

class Protected extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <AnimatedView>
        <h1>Protected view</h1>
        <h3>If you can read, it means you are authenticated</h3>
      </AnimatedView>
    );
  }
  // #endregion
}

export default Protected;
