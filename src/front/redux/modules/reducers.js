// @flow

// #region immports
import { combineReducers } from 'redux';
import userAuth from './userAuth';
// #endregion

export const reducers = {
  userAuth,
};

export default combineReducers({
  ...reducers,
});
