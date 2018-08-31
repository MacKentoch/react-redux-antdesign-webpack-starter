// @flow

// #region imports
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import reducer from '../modules/reducers';
import fetchMiddleware from '../middleware/fetchMiddleware';
// #endregion

// #region constants
export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, fetchMiddleware, routerMiddleware(history)),
);
// #endregion

export default function configureStore(initialState: any) {
  return createStore(connectRouter(history)(reducer), initialState, enhancer);
}
