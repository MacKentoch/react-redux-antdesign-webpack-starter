// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import {
  Button,
  Icon
}     from 'antd';

class Home extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,
    
    // views:
    currentView:  PropTypes.string.isRequired,
    enterHome:    PropTypes.func.isRequired,
    leaveHome:    PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    return(
      <AnimatedView>
        <div>
          <h1>
            ReactJS + Redux + Ant Design
          </h1>
          <h2>
            with Hot Reload!!!
          </h2>
          <h2>
            and React Router v4
          </h2>
          <h2>
            and webpack 3.x
          </h2>
          <h1>
            Starter
          </h1>
          <p>
            <Button
              type="primary"
              onClick={this.handlesOnGoAbout}
            >
              <Icon type="info-circle-o" />
              go to about
            </Button>
          </p>
        </div>
      </AnimatedView>
    );
  }

  handlesOnGoAbout = (
    event: SyntheticEvent<>
  ): void => {
    if (event) {
      event.preventDefault();
      const { history } = this.props;

      history.push('/about');
    }
  }
}

export default Home;
