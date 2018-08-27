// @flow

// #region imports
import React, { PureComponent } from 'react';
import AnimatedView from '../../components/animatedView/AnimatedView';
import { type RouterProps } from '../../types/react-router';
// #endregion

// #region flow types
export type Props = { ...any } & RouterProps;
export type State = { ...any };
// #endregion

class PageNotFound extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <AnimatedView>
        <div>
          <h1>Sorry this page does not exists...</h1>
        </div>
      </AnimatedView>
    );
  }
  // #endregion
}

export default PageNotFound;
