// @flow

// #reigon imports
import React, { PureComponent } from 'react';
import { Button, Icon } from 'antd';
import AnimatedView from '../../components/animatedView/AnimatedView';
import { type RouterProps } from '../../types/react-router';
// #endregion

// #region flow types
export type Props = { ...any } & RouterProps;
export type State = { ...any };
// #endregion

class Home extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <AnimatedView>
        <div>
          <h1>ReactJS + Redux + Ant Design</h1>
          <h2>with Hot Reload!!!</h2>
          <h2>and React Router v4</h2>
          <h2>and webpack 4.x</h2>
          <h1>Starter</h1>
          <p>
            <Button type="primary" onClick={this.handlesOnGoAbout}>
              <Icon type="info-circle-o" />
              go to about
            </Button>
          </p>
        </div>
      </AnimatedView>
    );
  }
  // #endregion

  // #region on about button click
  handlesOnGoAbout = (event: SyntheticEvent<>): void => {
    if (event) {
      event.preventDefault();
    }

    const { history } = this.props;
    history.push('/about');
  };
  // #endregion
}

export default Home;
