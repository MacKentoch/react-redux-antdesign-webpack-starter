// @flow

// #region imports
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import reducer from '../modules/reducers';
import fetchMiddleware from '../middleware/fetchMiddleware';
// #endregion

// #region constants
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    fetchMiddleware,
    loggerMiddleware, // logger at the end
  ),
);
// #endregion

export default function configureStore(initialState: any) {
  const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    enhancer,
  );
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default),
    );
  }
  return store;
}
