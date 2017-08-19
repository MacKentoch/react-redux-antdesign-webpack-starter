// @flow weak

import React, {
  PureComponent
}                     from 'react';
// import PropTypes      from 'prop-types';
import AnimatedView   from '../../components/animatedView/AnimatedView';

class PageNotFound extends PureComponent {
  render() {
    return(
      <AnimatedView>
        <div>
          <h1>
            Sorry this page does not exists...
          </h1>
        </div>
      </AnimatedView>
    );
  }
}

export default PageNotFound;
