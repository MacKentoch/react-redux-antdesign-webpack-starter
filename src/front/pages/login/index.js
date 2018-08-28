// @flow weak

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...userAuthActions,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
