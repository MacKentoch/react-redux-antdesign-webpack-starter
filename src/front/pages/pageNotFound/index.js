// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageNotFound from './PageNotFound';
// #endregion

// #region redux map state and dispatch to props
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};
// #endregion

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageNotFound);
