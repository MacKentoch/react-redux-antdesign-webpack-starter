// @flow

// #region immports
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import userAuth from './userAuth';
// #endregion

export const reducers = {
  userAuth,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
});
