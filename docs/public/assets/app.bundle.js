webpackJsonp([0],{

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(389);
module.exports = __webpack_require__(1333);


/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactTapEventPlugin = __webpack_require__(451);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

var _reactHotLoader = __webpack_require__(452);

__webpack_require__(1443);

__webpack_require__(1444);

var _Root = __webpack_require__(1445);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ELEMENT_TO_BOOTSTRAP = 'root'; //  weak

var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

(0, _reactTapEventPlugin2.default)();

var renderApp = function renderApp(RootComponent) {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(RootComponent, null)
  ), BootstrapedElement);
};

renderApp(_Root2.default);

if (false) {
  module.hot.accept('./Root', function () {
    var RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ELEMENT_TO_BOOTSTRAP, 'ELEMENT_TO_BOOTSTRAP', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/index.js');

  __REACT_HOT_LOADER__.register(BootstrapedElement, 'BootstrapedElement', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/index.js');

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/index.js');
}();

;

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(1471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(1473);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.enterHome = enterHome;
exports.leaveHome = leaveHome;
exports.enterComponents = enterComponents;
exports.leaveComponents = leaveComponents;
exports.enterAbout = enterAbout;
exports.leaveAbout = leaveAbout;
exports.enterLogin = enterLogin;
exports.leaveLogin = leaveLogin;
exports.enterProtected = enterProtected;
exports.leaveProtected = leaveProtected;

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
var ENTER_LOGIN_VIEW = 'ENTER_LOGIN_VIEW';
var LEAVE_LOGIN_VIEW = 'LEAVE_LOGIN_VIEW';
var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_COMPONENTS_VIEW = 'ENTER_COMPONENTS_VIEW';
var LEAVE_COMPONENTS_VIEW = 'LEAVE_COMPONENTS_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';
var ENTER_PROTECTED_VIEW = 'ENTER_PROTECTED_VIEW';
var LEAVE_PROTECTED_VIEW = 'LEAVE_PROTECTED_VIEW';

// /////////////////////
// reducer
// /////////////////////
var initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case ENTER_HOME_VIEW:
    case ENTER_COMPONENTS_VIEW:
    case ENTER_ABOUT_VIEW:
    case ENTER_LOGIN_VIEW:
    case ENTER_PROTECTED_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    case LEAVE_HOME_VIEW:
    case LEAVE_COMPONENTS_VIEW:
    case LEAVE_ABOUT_VIEW:
    case LEAVE_LOGIN_VIEW:
    case LEAVE_PROTECTED_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: action.enterTime,
          leaveTime: action.leaveTime
        });
      }
      return state;

    default:
      return state;
  }
};

exports.default = _default;

// /////////////////////
// action creators
// /////////////////////

function enterHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home',
    enterTime: time,
    leaveTime: null
  };
}

function leaveHome() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home',
    enterTime: null,
    leaveTime: time
  };
}

function enterComponents() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_COMPONENTS_VIEW,
    currentView: 'components',
    enterTime: time,
    leaveTime: null
  };
}

function leaveComponents() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_COMPONENTS_VIEW,
    currentView: 'components',
    enterTime: null,
    leaveTime: time
  };
}

function enterAbout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: ENTER_ABOUT_VIEW,
    currentView: 'about',
    enterTime: time,
    leaveTime: null
  };
}

function leaveAbout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: LEAVE_ABOUT_VIEW,
    currentView: 'about',
    enterTime: null,
    leaveTime: time
  };
}

function enterLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: ENTER_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: time,
    leaveTime: null
  };
}

function leaveLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: LEAVE_LOGIN_VIEW,
    currentView: 'Login',
    enterTime: null,
    leaveTime: time
  };
}

function enterProtected() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: ENTER_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: time,
    leaveTime: null
  };
}

function leaveProtected() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format();

  return {
    type: LEAVE_PROTECTED_VIEW,
    currentView: 'Protected',
    enterTime: null,
    leaveTime: time
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_LOGIN_VIEW, 'ENTER_LOGIN_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_LOGIN_VIEW, 'LEAVE_LOGIN_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_HOME_VIEW, 'ENTER_HOME_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW, 'LEAVE_HOME_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_COMPONENTS_VIEW, 'ENTER_COMPONENTS_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_COMPONENTS_VIEW, 'LEAVE_COMPONENTS_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW, 'ENTER_ABOUT_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW, 'LEAVE_ABOUT_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_PROTECTED_VIEW, 'ENTER_PROTECTED_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_PROTECTED_VIEW, 'LEAVE_PROTECTED_VIEW', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterHome, 'enterHome', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveHome, 'leaveHome', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterComponents, 'enterComponents', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveComponents, 'leaveComponents', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterAbout, 'enterAbout', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveAbout, 'leaveAbout', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterLogin, 'enterLogin', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveLogin, 'leaveLogin', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterProtected, 'enterProtected', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveProtected, 'leaveProtected', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/views.js');
}();

;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(41);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function Icon(props) {
    var type = props.type,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        spin = props.spin;

    var classString = (0, _classnames2['default'])((0, _defineProperty3['default'])({
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, 'anticon-' + type, true), className);
    return _react2['default'].createElement('i', (0, _extends3['default'])({}, (0, _omit2['default'])(props, ['type', 'spin']), { className: classString }));
};
exports['default'] = Icon;
module.exports = exports['default'];

/***/ }),

/***/ 1443:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1444:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(207);

var _reactRedux = __webpack_require__(137);

var _reactRouterRedux = __webpack_require__(294);

var _configureStore = __webpack_require__(1496);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _history = __webpack_require__(590);

var _app = __webpack_require__(1532);

var _app2 = _interopRequireDefault(_app);

var _ScrollToTop = __webpack_require__(1662);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _login = __webpack_require__(1663);

var _login2 = _interopRequireDefault(_login);

var _PageNotFound = __webpack_require__(1765);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

var _LogoutRoute = __webpack_require__(1766);

var _LogoutRoute2 = _interopRequireDefault(_LogoutRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

/* eslint-disable no-process-env */

// import PropTypes                from 'prop-types';
// not connected to redux (no index.js)


var history = (0, _history.createBrowserHistory)();
var store = (0, _configureStore2.default)();
var syncedHistory = (0, _reactRouterRedux.syncHistoryWithStore)(history, store);

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.HashRouter,
            { history: syncedHistory },
            _react2.default.createElement(
              _ScrollToTop2.default,
              null,
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _login2.default }),
                _react2.default.createElement(_app2.default, null),
                _react2.default.createElement(_LogoutRoute2.default, { path: '/logout' }),
                _react2.default.createElement(_reactRouterDom.Route, { component: _PageNotFound2.default })
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react.Component);

var _default = Root;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(history, 'history', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(syncedHistory, 'syncedHistory', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/Root.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/Root.js');
}();

;

/***/ }),

/***/ 1471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(292);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),

/***/ 1472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),

/***/ 1473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(1474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(1475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(1490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(1491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(1492);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),

/***/ 1474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 1475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(464);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ 1490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(464);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ 1491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(465);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ 1492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(1493);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ 1493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(292);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-process-env:0 */
if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__(1497);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 1497:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(74);

var _reduxLogger = __webpack_require__(468);

var _reduxThunk = __webpack_require__(469);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(1498);

var _reducers2 = _interopRequireDefault(_reducers);

var _fetchMiddleware = __webpack_require__(1510);

var _fetchMiddleware2 = _interopRequireDefault(_fetchMiddleware);

var _reduxDevtoolsExtension = __webpack_require__(1528);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var loggerMiddleware = (0, _reduxLogger.createLogger)({
  level: 'info',
  collapsed: true
});

// createStore : enhancer
var enhancer = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, _fetchMiddleware2.default, loggerMiddleware // logger at the end
));

function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  if (false) {
    module.hot.accept('../modules/reducers', function () {
      return store.replaceReducer(require('../modules/reducers').default);
    });
  }
  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(loggerMiddleware, 'loggerMiddleware', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/store/configureStore.dev.js');
}();

;

/***/ }),

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _reactRouterRedux = __webpack_require__(294);

var _redux = __webpack_require__(74);

var _views = __webpack_require__(138);

var _views2 = _interopRequireDefault(_views);

var _fakeModuleWithFetch = __webpack_require__(1500);

var _fakeModuleWithFetch2 = _interopRequireDefault(_fakeModuleWithFetch);

var _userAuth = __webpack_require__(582);

var _userAuth2 = _interopRequireDefault(_userAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = {
  views: _views2.default,
  fakeModuleWithFetch: _fakeModuleWithFetch2.default,
  userAuth: _userAuth2.default
};

var _default = (0, _redux.combineReducers)(_extends({}, reducers, {
  routing: _reactRouterRedux.routerReducer
}));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/reducers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/reducers.js');
}();

;

/***/ }),

/***/ 1500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.fakeFetchIfNeeded = fakeFetchIfNeeded;

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _fakeAPI = __webpack_require__(1501);

var _fakeAPI2 = _interopRequireDefault(_fakeAPI);

var _config = __webpack_require__(579);

var _fetchTools = __webpack_require__(1502);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// --------------------------------
// CONSTANTS
// --------------------------------
var REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
var RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
var ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH';

// --------------------------------
// REDUCER
// --------------------------------
var initialState = {
  isFetching: false,
  actionTime: '',
  data: [],
  error: {}
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = (0, _moment2.default)().format();

  switch (action.type) {
    case REQUEST_FAKE_FETCH:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_FAKE_FETCH:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        data: [].concat(_toConsumableArray(action.payload))
      });

    case ERROR_FAKE_FETCH:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        error: action.error ? _extends({}, action.error) : {}
      });

    default:
      return state;
  }
};

exports.default = _default;

// --------------------------------
// ACTIONS CREATORS
// --------------------------------

function fakeFetch() {
  return function (dispatch) {
    var shouldFetchMock = _config.appConfig.DEV_MODE;
    var fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
    var mockResult = _fakeAPI2.default;

    var url = (0, _fetchTools.getLocationOrigin)() + '/' + _config.appConfig.api.fakeEndPoint;
    var method = 'get';
    var options = {};

    // fetch middleware 
    // -> you handles pure front or with back-end asyncs just by disaptching a single object
    //   -> just change config: appConfig.DEV_MODE
    return Promise.resolve(dispatch({
      // type name is not important here since fetchMiddleware will intercept this action:
      type: 'FETCH_MIDDLEWARE',
      // here are fetch middleware props:
      fetch: {
        type: fetchType,
        actionTypes: {
          request: REQUEST_FAKE_FETCH,
          success: RECEIVED_FAKE_FETCH,
          fail: ERROR_FAKE_FETCH
        },
        // props only used when type = FETCH_MOCK:
        mockResult: mockResult,
        // props only used when type = FETCH:
        url: url,
        method: method,
        options: options
      }
    }));
  };
}

function fakeFetchIfNeeded() {
  return function (dispatch, getState) {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }
    return Promise.resolve();
  };
}
function shouldFakeFetch(state) {
  var isFetching = state.fakeModuleWithFetch.isFetching;
  if (isFetching) {
    return false;
  }
  return true;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(REQUEST_FAKE_FETCH, 'REQUEST_FAKE_FETCH', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(RECEIVED_FAKE_FETCH, 'RECEIVED_FAKE_FETCH', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(ERROR_FAKE_FETCH, 'ERROR_FAKE_FETCH', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(fakeFetch, 'fakeFetch', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(fakeFetchIfNeeded, 'fakeFetchIfNeeded', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(shouldFakeFetch, 'shouldFakeFetch', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/fakeModuleWithFetch.js');
}();

;

/***/ }),

/***/ 1501:
/***/ (function(module, exports) {

module.exports = [
	{
		"id": 1,
		"label": "item 1"
	},
	{
		"id": 2,
		"label": "item 2"
	}
];

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeBase64 = exports.jsonHeader = exports.defaultOptions = exports.postMethod = exports.getMethod = exports.getLocationOrigin = undefined;

var _jsBase = __webpack_require__(580);

/*
  window.location.origin polyfill
 */
var getLocationOrigin = exports.getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  return window.location.origin;
};

/*
  query options:
 */
//  weak

var getMethod = exports.getMethod = {
  method: 'get'
};

var postMethod = exports.postMethod = {
  method: 'post'
};

var defaultOptions = exports.defaultOptions = {
  credentials: 'same-origin'
};

var jsonHeader = exports.jsonHeader = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    // 'Access-control-Allow-Origin': '*'
  }
};

/*
 general helpers
 */
var encodeBase64 = exports.encodeBase64 = function encodeBase64(stringToEncode) {
  return _jsBase.Base64.encode(stringToEncode);
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getLocationOrigin, 'getLocationOrigin', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(getMethod, 'getMethod', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(postMethod, 'postMethod', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(defaultOptions, 'defaultOptions', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(jsonHeader, 'jsonHeader', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/fetchTools.js');

  __REACT_HOT_LOADER__.register(encodeBase64, 'encodeBase64', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/fetchTools.js');
}();

;

/***/ }),

/***/ 1506:
/***/ (function(module, exports) {

module.exports = {
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ",
	"user": {
		"id": 111,
		"login": "john.doe@fake.mail",
		"firstname": "John",
		"lastname": "Doe",
		"isAdmin": true
	}
};

/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var getLocationOrigin = exports.getLocationOrigin = function getLocationOrigin() {
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  return window.location.origin;
};

var _default = getLocationOrigin;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getLocationOrigin, 'getLocationOrigin', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/utils/getLocationOrigin.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/utils/getLocationOrigin.js');
}();

;

/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FETCH = exports.FETCH_MOCK = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _axios = __webpack_require__(584);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FETCH_MOCK = exports.FETCH_MOCK = 'FETCH_MOCK';
var FETCH = exports.FETCH = 'FETCH';
//
// FETCH_MOCK mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH_MOCK',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    mockResult: any
//  }
// }
//

// FETCH mode
// in any action just add fetch object like:
// {
//  fetch: {
//    type: 'FETCH',
//    actionTypes: {
//      request: 'TYPE_FOR_REQUEST',
//      success: 'TYPE_FOR_RECEIVED',
//      fail: 'TYPE_FOR_ERROR',
//    },
//    url: 'an url',
//    method: 'get',  // lower case, one of 'get', 'post'...
//    headers: {}     // OPTIONAL CONTENT like: data: { someprop: 'value ...}
//    options: {}     // OPTIONAL CONTENT like: Authorization: 'Bearer _A_TOKEN_'
//  }
// }
//
//
//
//
var fetchMiddleware = function fetchMiddleware(store) {
  return function (next) {
    return function (action) {
      if (!action.fetch) {
        return next(action);
      }

      if (!action.fetch.type || !action.fetch.type === FETCH_MOCK || !action.fetch.type === FETCH) {
        return next(action);
      }

      if (!action.fetch.actionTypes) {
        return next(action);
      }

      /**
       * fetch mock
       * @type {[type]}
       */
      if (action.fetch.type === FETCH_MOCK) {
        if (!action.fetch.mockResult) {
          throw new Error('Fetch middleware require a mockResult payload when type is "FETCH_MOCK"');
        }

        var _action$fetch = action.fetch,
            _action$fetch$actionT = _action$fetch.actionTypes,
            request = _action$fetch$actionT.request,
            success = _action$fetch$actionT.success,
            mockResult = _action$fetch.mockResult;

        // request

        store.dispatch({ type: request });

        // received successful for mock
        return Promise.resolve(store.dispatch({
          type: success,
          payload: {
            status: 200,
            data: mockResult
          }
        }));
      }

      if (action.fetch.type === FETCH) {
        var _action$fetch2 = action.fetch,
            _action$fetch2$action = _action$fetch2.actionTypes,
            _request = _action$fetch2$action.request,
            _success = _action$fetch2$action.success,
            fail = _action$fetch2$action.fail,
            url = _action$fetch2.url,
            method = _action$fetch2.method,
            headers = _action$fetch2.headers,
            options = _action$fetch2.options;

        // request

        store.dispatch({ type: _request });

        // fetch server (success or fail)
        // returns a Promise
        return _axios2.default.request(_extends({
          method: method,
          url: url,
          withCredentials: true,
          headers: _extends({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Acces-Control-Allow-Origin': '*'
          }, headers)
        }, options)).then(function (data) {
          return store.dispatch({ type: _success, payload: data });
        }).catch(function (err) {
          store.dispatch({ type: fail, error: err });
          return Promise.reject(err);
        });
      }
      return next(action);
    };
  };
};

var _default = fetchMiddleware;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FETCH_MOCK, 'FETCH_MOCK', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(FETCH, 'FETCH', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(fetchMiddleware, 'fetchMiddleware', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/middleware/fetchMiddleware.js');
}();

;

/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(74).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _reactRedux = __webpack_require__(137);

var _redux = __webpack_require__(74);

var _views = __webpack_require__(138);

var viewsActions = _interopRequireWildcard(_views);

var _App = __webpack_require__(1533);

var _App2 = _interopRequireDefault(_App);

var _reactRouter = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, viewsActions), dispatch);
};

// IMPORTANT: witRouter is "needed here" to avoid blocking routing:

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App2.default));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/index.js');
}();

;

/***/ }),

/***/ 1533:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style4 = __webpack_require__(1534);

var _menu = __webpack_require__(1538);

var _menu2 = _interopRequireDefault(_menu);

var _style5 = __webpack_require__(322);

var _icon = __webpack_require__(144);

var _icon2 = _interopRequireDefault(_icon);

var _style6 = __webpack_require__(1645);

var _layout = __webpack_require__(1647);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navigation = __webpack_require__(1650);

var _navigation2 = _interopRequireDefault(_navigation);

var _MainRoutes = __webpack_require__(1651);

var _MainRoutes2 = _interopRequireDefault(_MainRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider;

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navModel: _navigation2.default,
      selectedSidemenu: ['/']
    }, _this.handlesOnCollpase = function () {
      var _this2;

      return (_this2 = _this).__handlesOnCollpase__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handlesOnMenuClick = function () {
      var _this3;

      return (_this3 = _this).__handlesOnMenuClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          navModel = _state.navModel,
          selectedSidemenu = _state.selectedSidemenu;


      return _react2.default.createElement(
        _layout2.default,
        { className: 'layout' },
        _react2.default.createElement(
          Sider,
          {
            breakpoint: 'lg',
            collapsedWidth: '0',
            onCollapse: this.handlesOnCollpase
          },
          _react2.default.createElement('div', { className: 'side-menu-logo' }),
          _react2.default.createElement(
            _menu2.default,
            {
              theme: 'dark',
              mode: 'inline',
              defaultSelectedKeys: selectedSidemenu,
              onClick: this.handlesOnMenuClick
            },
            navModel.sideLinks.map(function (_ref2) {
              var label = _ref2.label,
                  icon = _ref2.icon,
                  link = _ref2.link;
              return _react2.default.createElement(
                _menu2.default.Item,
                {
                  key: link },
                _react2.default.createElement(_icon2.default, { type: icon }),
                _react2.default.createElement(
                  'span',
                  { className: 'nav-text' },
                  label
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(Header, { style: { background: '#4A4A4A', padding: 0 } }),
          _react2.default.createElement(
            Content,
            { style: { margin: '24px 16px 0' } },
            _react2.default.createElement(
              'div',
              { style: { padding: 24, background: '#fff', minHeight: 360 } },
              _react2.default.createElement(_MainRoutes2.default, null)
            )
          ),
          _react2.default.createElement(
            Footer,
            { style: { textAlign: 'center' } },
            'Ant Design \xA92016 Created by Ant UED'
          )
        )
      );
    }
  }, {
    key: '__handlesOnCollpase__REACT_HOT_LOADER__',
    value: function __handlesOnCollpase__REACT_HOT_LOADER__(collapsed, type) {
      /* eslint-disable no-console */
      console.log(collapsed, type);
      /* eslint-enable no-console */
    }
  }, {
    key: '__handlesOnMenuClick__REACT_HOT_LOADER__',
    value: function __handlesOnMenuClick__REACT_HOT_LOADER__(event) {
      if (event) {
        var history = this.props.history;
        var key = event.key;


        history.push(key);
      }
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string

};
var _default4 = App;
exports.default = _default4;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(Sider, 'Sider', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(_default4, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/containers/app/App.js');
}();

;

/***/ }),

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(1535);

__webpack_require__(1536);

/***/ }),

/***/ 1535:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(1537);

/***/ }),

/***/ 1537:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcMenu = __webpack_require__(115);

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = __webpack_require__(1602);

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _warning = __webpack_require__(316);

var _warning2 = _interopRequireDefault(_warning);

var _MenuItem = __webpack_require__(1604);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3['default'])(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3['default'])(this, Menu);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.inlineOpenKeys = [];
        _this.handleClick = function (e) {
            _this.handleOpenChange([]);
            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };
        _this.handleOpenChange = function (openKeys) {
            _this.setOpenKeys(openKeys);
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(openKeys);
            }
        };
        (0, _warning2['default'])(!('onOpen' in props || 'onClose' in props), '`onOpen` and `onClose` are removed, please use `onOpenChange` instead, ' + 'see: https://u.ant.design/menu-on-open-change.');
        (0, _warning2['default'])(!('inlineCollapsed' in props && props.mode !== 'inline'), '`inlineCollapsed` should only be used when Menu\'s `mode` is inline.');
        var openKeys = void 0;
        if ('defaultOpenKeys' in props) {
            openKeys = props.defaultOpenKeys;
        } else if ('openKeys' in props) {
            openKeys = props.openKeys;
        }
        _this.state = {
            openKeys: openKeys || []
        };
        return _this;
    }

    (0, _createClass3['default'])(Menu, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                inlineCollapsed: this.getInlineCollapsed()
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
                this.switchModeFromInline = true;
            }
            if (nextProps.inlineCollapsed && !this.props.inlineCollapsed || nextContext.siderCollapsed && !this.context.siderCollapsed) {
                this.switchModeFromInline = !!this.state.openKeys.length;
                this.inlineOpenKeys = this.state.openKeys;
                this.handleOpenChange([]);
            }
            if (!nextProps.inlineCollapsed && this.props.inlineCollapsed || !nextContext.siderCollapsed && this.context.siderCollapsed) {
                this.handleOpenChange(this.inlineOpenKeys);
                this.inlineOpenKeys = [];
            }
            if ('openKeys' in nextProps) {
                this.setState({ openKeys: nextProps.openKeys });
            }
        }
    }, {
        key: 'setOpenKeys',
        value: function setOpenKeys(openKeys) {
            if (!('openKeys' in this.props)) {
                this.setState({ openKeys: openKeys });
            }
        }
    }, {
        key: 'getRealMenuMode',
        value: function getRealMenuMode() {
            var inlineCollapsed = this.getInlineCollapsed();
            if (this.switchModeFromInline && inlineCollapsed && !('openKeys' in this.props)) {
                return 'inline';
            }
            var mode = this.props.mode;

            return inlineCollapsed ? 'vertical' : mode;
        }
    }, {
        key: 'getInlineCollapsed',
        value: function getInlineCollapsed() {
            var inlineCollapsed = this.props.inlineCollapsed;

            if (this.context.siderCollapsed !== undefined) {
                return this.context.siderCollapsed;
            }
            return inlineCollapsed;
        }
    }, {
        key: 'getMenuOpenAnimation',
        value: function getMenuOpenAnimation(menuMode) {
            var _this2 = this;

            var _props = this.props,
                openAnimation = _props.openAnimation,
                openTransitionName = _props.openTransitionName;

            var menuOpenAnimation = openAnimation || openTransitionName;
            if (openAnimation === undefined && openTransitionName === undefined) {
                switch (menuMode) {
                    case 'horizontal':
                        menuOpenAnimation = 'slide-up';
                        break;
                    case 'vertical':
                        // When mode switch from inline
                        // submenu should hide without animation
                        if (this.switchModeFromInline) {
                            menuOpenAnimation = '';
                            this.switchModeFromInline = false;
                        } else {
                            menuOpenAnimation = 'zoom-big';
                        }
                        break;
                    case 'inline':
                        menuOpenAnimation = (0, _extends3['default'])({}, _openAnimation2['default'], { leave: function leave(node, done) {
                                return _openAnimation2['default'].leave(node, function () {
                                    // Make sure inline menu leave animation finished before mode is switched
                                    _this2.switchModeFromInline = false;
                                    _this2.setState({});
                                    done();
                                });
                            } });
                        break;
                    default:
                }
            }
            return menuOpenAnimation;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                className = _props2.className,
                theme = _props2.theme;

            var menuMode = this.getRealMenuMode();
            var menuOpenAnimation = this.getMenuOpenAnimation(menuMode);
            var menuClassName = (0, _classnames2['default'])(className, prefixCls + '-' + theme, (0, _defineProperty3['default'])({}, prefixCls + '-inline-collapsed', this.getInlineCollapsed()));
            var menuProps = {
                openKeys: this.state.openKeys,
                onOpenChange: this.handleOpenChange,
                className: menuClassName,
                mode: menuMode
            };
            if (menuMode !== 'inline') {
                // closing vertical popup submenu after click it
                menuProps.onClick = this.handleClick;
                menuProps.openTransitionName = menuOpenAnimation;
            } else {
                menuProps.openAnimation = menuOpenAnimation;
            }
            return _react2['default'].createElement(_rcMenu2['default'], (0, _extends3['default'])({}, this.props, menuProps));
        }
    }]);
    return Menu;
}(_react2['default'].Component);

exports['default'] = Menu;

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem2['default'];
Menu.SubMenu = _rcMenu.SubMenu;
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
    prefixCls: 'ant-menu',
    className: '',
    theme: 'light'
};
Menu.childContextTypes = {
    inlineCollapsed: _propTypes2['default'].bool
};
Menu.contextTypes = {
    siderCollapsed: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cssAnimation = __webpack_require__(216);

var _cssAnimation2 = _interopRequireDefault(_cssAnimation);

var _getRequestAnimationFrame = __webpack_require__(1603);

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var reqAnimFrame = (0, _getRequestAnimationFrame2['default'])();
function animate(node, show, done) {
    var height = void 0;
    var requestAnimationFrameId = void 0;
    return (0, _cssAnimation2['default'])(node, 'ant-motion-collapse', {
        start: function start() {
            if (!show) {
                node.style.height = node.offsetHeight + 'px';
                node.style.opacity = 1;
            } else {
                height = node.offsetHeight;
                node.style.height = 0;
                node.style.opacity = 0;
            }
        },
        active: function active() {
            if (requestAnimationFrameId) {
                (0, _getRequestAnimationFrame.cancelRequestAnimationFrame)(requestAnimationFrameId);
            }
            requestAnimationFrameId = reqAnimFrame(function () {
                node.style.height = (show ? height : 0) + 'px';
                node.style.opacity = show ? 1 : 0;
            });
        },
        end: function end() {
            if (requestAnimationFrameId) {
                (0, _getRequestAnimationFrame.cancelRequestAnimationFrame)(requestAnimationFrameId);
            }
            node.style.height = '';
            node.style.opacity = '';
            done();
        }
    });
}
var animation = {
    enter: function enter(node, done) {
        return animate(node, true, done);
    },
    leave: function leave(node, done) {
        return animate(node, false, done);
    },
    appear: function appear(node, done) {
        return animate(node, true, done);
    }
};
exports['default'] = animation;
module.exports = exports['default'];

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = getRequestAnimationFrame;
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame;
var availablePrefixs = ['moz', 'ms', 'webkit'];
function requestAnimationFramePolyfill() {
    var lastTime = 0;
    return function (callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () {};
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    var prefix = availablePrefixs.filter(function (key) {
        return key + 'RequestAnimationFrame' in window;
    })[0];
    return prefix ? window[prefix + 'RequestAnimationFrame'] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    var prefix = availablePrefixs.filter(function (key) {
        return key + 'CancelAnimationFrame' in window || key + 'CancelRequestAnimationFrame' in window;
    })[0];
    return prefix ? (window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']).call(this, id) : clearTimeout(id);
}

/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcMenu = __webpack_require__(115);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltip = __webpack_require__(1605);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var MenuItem = function MenuItem(props, _ref) {
    var inlineCollapsed = _ref.inlineCollapsed;

    return _react2['default'].createElement(
        _tooltip2['default'],
        { title: inlineCollapsed && props.level === 1 ? props.children : '', placement: 'right', overlayClassName: props.rootPrefixCls + '-inline-collapsed-tooltip' },
        _react2['default'].createElement(_rcMenu.Item, props)
    );
};
MenuItem.contextTypes = {
    inlineCollapsed: _propTypes2['default'].bool
};
MenuItem.isMenuItem = 1;
exports['default'] = MenuItem;
module.exports = exports['default'];

/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = __webpack_require__(612);

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = __webpack_require__(1641);

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var splitObject = function splitObject(obj, keys) {
    var picked = {};
    var omited = (0, _extends3['default'])({}, obj);
    keys.forEach(function (key) {
        if (obj && key in obj) {
            picked[key] = obj[key];
            delete omited[key];
        }
    });
    return { picked: picked, omited: omited };
};

var Tooltip = function (_React$Component) {
    (0, _inherits3['default'])(Tooltip, _React$Component);

    function Tooltip(props) {
        (0, _classCallCheck3['default'])(this, Tooltip);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

        _this.onVisibleChange = function (visible) {
            var onVisibleChange = _this.props.onVisibleChange;

            if (!('visible' in _this.props)) {
                _this.setState({ visible: _this.isNoTitle() ? false : visible });
            }
            if (onVisibleChange && !_this.isNoTitle()) {
                onVisibleChange(visible);
            }
        };
        // 动态设置动画点
        _this.onPopupAlign = function (domNode, align) {
            var placements = _this.getPlacements();
            // 当前返回的位置
            var placement = Object.keys(placements).filter(function (key) {
                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
            })[0];
            if (!placement) {
                return;
            }
            // 根据当前坐标设置动画点
            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
                top: '50%',
                left: '50%'
            };
            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                transformOrigin.top = rect.height - align.offset[1] + 'px';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                transformOrigin.top = -align.offset[1] + 'px';
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                transformOrigin.left = rect.width - align.offset[0] + 'px';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                transformOrigin.left = -align.offset[0] + 'px';
            }
            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
        };
        _this.state = {
            visible: !!props.visible
        };
        return _this;
    }

    (0, _createClass3['default'])(Tooltip, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('visible' in nextProps) {
                this.setState({ visible: nextProps.visible });
            }
        }
    }, {
        key: 'getPopupDomNode',
        value: function getPopupDomNode() {
            return this.refs.tooltip.getPopupDomNode();
        }
    }, {
        key: 'getPlacements',
        value: function getPlacements() {
            var _props = this.props,
                builtinPlacements = _props.builtinPlacements,
                arrowPointAtCenter = _props.arrowPointAtCenter,
                autoAdjustOverflow = _props.autoAdjustOverflow;

            return builtinPlacements || (0, _placements2['default'])({
                arrowPointAtCenter: arrowPointAtCenter,
                verticalArrowShift: 8,
                autoAdjustOverflow: autoAdjustOverflow
            });
        }
    }, {
        key: 'isHoverTrigger',
        value: function isHoverTrigger() {
            var trigger = this.props.trigger;

            if (!trigger || trigger === 'hover') {
                return true;
            }
            if (Array.isArray(trigger)) {
                return trigger.indexOf('hover') >= 0;
            }
            return false;
        }
        // Fix Tooltip won't hide at disabled button
        // mouse events don't trigger at disabled button in Chrome
        // https://github.com/react-component/tooltip/issues/18

    }, {
        key: 'getDisabledCompatibleChildren',
        value: function getDisabledCompatibleChildren(element) {
            if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled && this.isHoverTrigger()) {
                // Pick some layout related style properties up to span
                // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
                var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
                    picked = _splitObject.picked,
                    omited = _splitObject.omited;

                var spanStyle = (0, _extends3['default'])({ display: 'inline-block' }, picked, { cursor: 'not-allowed' });
                var buttonStyle = (0, _extends3['default'])({}, omited, { pointerEvents: 'none' });
                var child = (0, _react.cloneElement)(element, {
                    style: buttonStyle,
                    className: null
                });
                return _react2['default'].createElement(
                    'span',
                    { style: spanStyle, className: element.props.className },
                    child
                );
            }
            return element;
        }
    }, {
        key: 'isNoTitle',
        value: function isNoTitle() {
            var _props2 = this.props,
                title = _props2.title,
                overlay = _props2.overlay;

            return !title && !overlay; // overlay for old version compatibility
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props,
                state = this.state;
            var prefixCls = props.prefixCls,
                title = props.title,
                overlay = props.overlay,
                openClassName = props.openClassName,
                getPopupContainer = props.getPopupContainer,
                getTooltipContainer = props.getTooltipContainer;

            var children = props.children;
            var visible = state.visible;
            // Hide tooltip when there is no title
            if (!('visible' in props) && this.isNoTitle()) {
                visible = false;
            }
            var child = this.getDisabledCompatibleChildren(_react2['default'].isValidElement(children) ? children : _react2['default'].createElement(
                'span',
                null,
                children
            ));
            var childProps = child.props;
            var childCls = (0, _classnames2['default'])(childProps.className, (0, _defineProperty3['default'])({}, openClassName || prefixCls + '-open', true));
            return _react2['default'].createElement(
                _rcTooltip2['default'],
                (0, _extends3['default'])({}, this.props, { getTooltipContainer: getPopupContainer || getTooltipContainer, ref: 'tooltip', builtinPlacements: this.getPlacements(), overlay: overlay || title || '', visible: visible, onVisibleChange: this.onVisibleChange, onPopupAlign: this.onPopupAlign }),
                visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
            );
        }
    }]);
    return Tooltip;
}(_react2['default'].Component);

exports['default'] = Tooltip;

Tooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
};
module.exports = exports['default'];

/***/ }),

/***/ 1641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

exports.getOverflowOptions = getOverflowOptions;
exports['default'] = getPlacements;

var _placements = __webpack_require__(1642);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var autoAdjustOverflowEnabled = {
    adjustX: 1,
    adjustY: 1
};
var autoAdjustOverflowDisabled = {
    adjustX: 0,
    adjustY: 0
};
var targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow) {
    if (typeof autoAdjustOverflow === 'boolean') {
        return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
    }
    return (0, _extends3['default'])({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}
function getPlacements() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _config$arrowWidth = config.arrowWidth,
        arrowWidth = _config$arrowWidth === undefined ? 5 : _config$arrowWidth,
        _config$horizontalArr = config.horizontalArrowShift,
        horizontalArrowShift = _config$horizontalArr === undefined ? 16 : _config$horizontalArr,
        _config$verticalArrow = config.verticalArrowShift,
        verticalArrowShift = _config$verticalArrow === undefined ? 12 : _config$verticalArrow,
        _config$autoAdjustOve = config.autoAdjustOverflow,
        autoAdjustOverflow = _config$autoAdjustOve === undefined ? true : _config$autoAdjustOve;

    var placementMap = {
        left: {
            points: ['cr', 'cl'],
            offset: [-4, 0]
        },
        right: {
            points: ['cl', 'cr'],
            offset: [4, 0]
        },
        top: {
            points: ['bc', 'tc'],
            offset: [0, -4]
        },
        bottom: {
            points: ['tc', 'bc'],
            offset: [0, 4]
        },
        topLeft: {
            points: ['bl', 'tc'],
            offset: [-(horizontalArrowShift + arrowWidth), -4]
        },
        leftTop: {
            points: ['tr', 'cl'],
            offset: [-4, -(verticalArrowShift + arrowWidth)]
        },
        topRight: {
            points: ['br', 'tc'],
            offset: [horizontalArrowShift + arrowWidth, -4]
        },
        rightTop: {
            points: ['tl', 'cr'],
            offset: [4, -(verticalArrowShift + arrowWidth)]
        },
        bottomRight: {
            points: ['tr', 'bc'],
            offset: [horizontalArrowShift + arrowWidth, 4]
        },
        rightBottom: {
            points: ['bl', 'cr'],
            offset: [4, verticalArrowShift + arrowWidth]
        },
        bottomLeft: {
            points: ['tl', 'bc'],
            offset: [-(horizontalArrowShift + arrowWidth), 4]
        },
        leftBottom: {
            points: ['br', 'cl'],
            offset: [-4, verticalArrowShift + arrowWidth]
        }
    };
    Object.keys(placementMap).forEach(function (key) {
        placementMap[key] = config.arrowPointAtCenter ? (0, _extends3['default'])({}, placementMap[key], { overflow: getOverflowOptions(autoAdjustOverflow), targetOffset: targetOffset }) : (0, _extends3['default'])({}, _placements.placements[key], { overflow: getOverflowOptions(autoAdjustOverflow) });
    });
    return placementMap;
}

/***/ }),

/***/ 1642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ }),

/***/ 1645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(1646);

/***/ }),

/***/ 1646:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(1648);

var _layout2 = _interopRequireDefault(_layout);

var _Sider = __webpack_require__(1649);

var _Sider2 = _interopRequireDefault(_Sider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_layout2['default'].Sider = _Sider2['default'];
exports['default'] = _layout2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 1648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function generator(props) {
    return function (BacicComponent) {
        return function (_React$Component) {
            (0, _inherits3['default'])(Adapter, _React$Component);

            function Adapter() {
                (0, _classCallCheck3['default'])(this, Adapter);
                return (0, _possibleConstructorReturn3['default'])(this, (Adapter.__proto__ || Object.getPrototypeOf(Adapter)).apply(this, arguments));
            }

            (0, _createClass3['default'])(Adapter, [{
                key: 'render',
                value: function render() {
                    var prefixCls = props.prefixCls;

                    return _react2['default'].createElement(BacicComponent, (0, _extends3['default'])({ prefixCls: prefixCls }, this.props));
                }
            }]);
            return Adapter;
        }(_react2['default'].Component);
    };
}

var Basic = function (_React$Component2) {
    (0, _inherits3['default'])(Basic, _React$Component2);

    function Basic() {
        (0, _classCallCheck3['default'])(this, Basic);
        return (0, _possibleConstructorReturn3['default'])(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Basic, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                children = _a.children,
                others = __rest(_a, ["prefixCls", "className", "children"]);
            var hasSider = void 0;
            _react2['default'].Children.forEach(children, function (element) {
                if (element && element.type && element.type.__ANT_LAYOUT_SIDER) {
                    hasSider = true;
                }
            });
            var divCls = (0, _classnames2['default'])(className, prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-has-sider', hasSider));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: divCls }, others),
                children
            );
        }
    }]);
    return Basic;
}(_react2['default'].Component);

var Layout = generator({
    prefixCls: 'ant-layout'
})(Basic);
var Header = generator({
    prefixCls: 'ant-layout-header'
})(Basic);
var Footer = generator({
    prefixCls: 'ant-layout-footer'
})(Basic);
var Content = generator({
    prefixCls: 'ant-layout-content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
exports['default'] = Layout;
module.exports = exports['default'];

/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(41);

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = __webpack_require__(144);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var dimensionMap = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px'
};

var Sider = function (_React$Component) {
    (0, _inherits3['default'])(Sider, _React$Component);

    function Sider(props) {
        (0, _classCallCheck3['default'])(this, Sider);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

        _this.responsiveHandler = function (mql) {
            _this.setState({ below: mql.matches });
            if (_this.state.collapsed !== mql.matches) {
                _this.setCollapsed(mql.matches, 'responsive');
            }
        };
        _this.setCollapsed = function (collapsed, type) {
            if (!('collapsed' in _this.props)) {
                _this.setState({
                    collapsed: collapsed
                });
            }
            var onCollapse = _this.props.onCollapse;

            if (onCollapse) {
                onCollapse(collapsed, type);
            }
        };
        _this.toggle = function () {
            var collapsed = !_this.state.collapsed;
            _this.setCollapsed(collapsed, 'clickTrigger');
        };
        _this.belowShowChange = function () {
            _this.setState({ belowShow: !_this.state.belowShow });
        };
        var matchMedia = void 0;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }
        if (matchMedia && props.breakpoint && props.breakpoint in dimensionMap) {
            _this.mql = matchMedia('(max-width: ' + dimensionMap[props.breakpoint] + ')');
        }
        var collapsed = void 0;
        if ('collapsed' in props) {
            collapsed = props.collapsed;
        } else {
            collapsed = props.defaultCollapsed;
        }
        _this.state = {
            collapsed: collapsed,
            below: false
        };
        return _this;
    }

    (0, _createClass3['default'])(Sider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                siderCollapsed: this.props.collapsed
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('collapsed' in nextProps) {
                this.setState({
                    collapsed: nextProps.collapsed
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.mql) {
                this.mql.addListener(this.responsiveHandler);
                this.responsiveHandler(this.mql);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.mql) {
                this.mql.removeListener(this.responsiveHandler);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                collapsible = _a.collapsible,
                reverseArrow = _a.reverseArrow,
                trigger = _a.trigger,
                style = _a.style,
                width = _a.width,
                collapsedWidth = _a.collapsedWidth,
                others = __rest(_a, ["prefixCls", "className", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);
            var divProps = (0, _omit2['default'])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint']);
            var siderWidth = this.state.collapsed ? collapsedWidth : width;
            // special trigger when collapsedWidth == 0
            var zeroWidthTrigger = collapsedWidth === 0 || collapsedWidth === '0' ? _react2['default'].createElement(
                'span',
                { onClick: this.toggle, className: prefixCls + '-zero-width-trigger' },
                _react2['default'].createElement(_icon2['default'], { type: 'bars' })
            ) : null;
            var iconObj = {
                'expanded': reverseArrow ? _react2['default'].createElement(_icon2['default'], { type: 'right' }) : _react2['default'].createElement(_icon2['default'], { type: 'left' }),
                'collapsed': reverseArrow ? _react2['default'].createElement(_icon2['default'], { type: 'left' }) : _react2['default'].createElement(_icon2['default'], { type: 'right' })
            };
            var status = this.state.collapsed ? 'collapsed' : 'expanded';
            var defaultTrigger = iconObj[status];
            var triggerDom = trigger !== null ? zeroWidthTrigger || _react2['default'].createElement(
                'div',
                { className: prefixCls + '-trigger', onClick: this.toggle, style: { width: siderWidth } },
                trigger || defaultTrigger
            ) : null;
            var divStyle = (0, _extends3['default'])({}, style, { flex: '0 0 ' + siderWidth + 'px', width: siderWidth + 'px' });
            var siderCls = (0, _classnames2['default'])(className, prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-collapsed', !!this.state.collapsed), (0, _defineProperty3['default'])(_classNames, prefixCls + '-has-trigger', !!trigger), (0, _defineProperty3['default'])(_classNames, prefixCls + '-below', !!this.state.below), (0, _defineProperty3['default'])(_classNames, prefixCls + '-zero-width', siderWidth === 0 || siderWidth === '0'), _classNames));
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({ className: siderCls }, divProps, { style: divStyle }),
                _react2['default'].createElement(
                    'div',
                    { className: prefixCls + '-children' },
                    this.props.children
                ),
                collapsible || this.state.below && zeroWidthTrigger ? triggerDom : null
            );
        }
    }]);
    return Sider;
}(_react2['default'].Component);

exports['default'] = Sider;

Sider.__ANT_LAYOUT_SIDER = true;
Sider.defaultProps = {
    prefixCls: 'ant-layout-sider',
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 64,
    style: {}
};
Sider.childContextTypes = {
    siderCollapsed: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ }),

/***/ 1650:
/***/ (function(module, exports) {

module.exports = {
	"brand": "React Redux Bootstrap Starter",
	"sideLinks": [
		{
			"label": "Home",
			"icon": "home",
			"link": "/"
		},
		{
			"label": "Protected",
			"icon": "lock",
			"link": "/protected"
		},
		{
			"label": "About",
			"icon": "info-circle-o",
			"link": "/about"
		},
		{
			"label": "Disconnect",
			"icon": "logout",
			"link": "/login"
		}
	],
	"leftLinks": [],
	"rightLinks": [
		{
			"label": "Home",
			"icon": "home",
			"link": "/"
		},
		{
			"label": "Protected",
			"icon": "lock",
			"link": "/protected"
		},
		{
			"label": "About",
			"icon": "info",
			"link": "/about"
		},
		{
			"label": "Disconnect",
			"icon": "signout",
			"link": "/login"
		}
	]
};

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(45);

var _home = __webpack_require__(1652);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(1657);

var _about2 = _interopRequireDefault(_about);

var _PrivateRoute = __webpack_require__(1659);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _protected = __webpack_require__(1660);

var _protected2 = _interopRequireDefault(_protected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var MainRoutes = function MainRoutes() {
  return _react2.default.createElement(
    _reactRouter.Switch,
    null,
    _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about2.default }),
    _react2.default.createElement(_PrivateRoute2.default, { path: '/protected', component: _protected2.default })
  );
};

var _default = MainRoutes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainRoutes, 'MainRoutes', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/routes/MainRoutes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/routes/MainRoutes.js');
}();

;

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(137);

var _redux = __webpack_require__(74);

var _views = __webpack_require__(138);

var viewsActions = _interopRequireWildcard(_views);

var _Home = __webpack_require__(1653);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views
    enterHome: viewsActions.enterHome,
    leaveHome: viewsActions.leaveHome
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Home2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/home/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/home/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/home/index.js');
}();

;

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style3 = __webpack_require__(620);

var _button = __webpack_require__(621);

var _button2 = _interopRequireDefault(_button);

var _style4 = __webpack_require__(322);

var _icon = __webpack_require__(144);

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(217);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.handlesOnGoAbout = function () {
      var _this2;

      return (_this2 = _this).__handlesOnGoAbout__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterHome = this.props.enterHome;

      enterHome();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveHome = this.props.leaveHome;

      leaveHome();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'ReactJS + Bootstrap'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'with Hot Reload!!!'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'and React Router v4'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'and webpack 3.x'
          ),
          _react2.default.createElement(
            'h1',
            null,
            'Starter'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _button2.default,
              {
                type: 'primary',
                onClick: this.handlesOnGoAbout
              },
              _react2.default.createElement(_icon2.default, { type: 'info-circle-o' }),
              'go to about'
            )
          )
        )
      );
    }
  }, {
    key: '__handlesOnGoAbout__REACT_HOT_LOADER__',
    value: function __handlesOnGoAbout__REACT_HOT_LOADER__(event) {
      if (event) {
        event.preventDefault();
        var history = this.props.history;


        history.push('/about');
      }
    }
  }]);

  return Home;
}(_react.PureComponent);

Home.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string.isRequired,
  enterHome: _propTypes2.default.func.isRequired,
  leaveHome: _propTypes2.default.func.isRequired
};
var _default3 = Home;
exports.default = _default3;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/home/Home.js');

  __REACT_HOT_LOADER__.register(_default3, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/home/Home.js');
}();

;

/***/ }),

/***/ 1654:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(41);

var _omit2 = _interopRequireDefault(_omit);

var _icon = __webpack_require__(144);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    var SPACE = needInserted ? ' ' : '';
    // strictNullChecks oops.
    if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2['default'].cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return _react2['default'].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3['default'])(Button, _React$Component);

    function Button(props) {
        (0, _classCallCheck3['default'])(this, Button);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = function (e) {
            // Add click effect
            _this.setState({ clicked: true });
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.setState({ clicked: false });
            }, 500);
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick(e);
            }
        };
        _this.state = {
            loading: props.loading
        };
        return _this;
    }

    (0, _createClass3['default'])(Button, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentLoading = this.props.loading;
            var loading = nextProps.loading;
            if (currentLoading) {
                clearTimeout(this.delayTimeout);
            }
            if (typeof loading !== 'boolean' && loading && loading.delay) {
                this.delayTimeout = setTimeout(function () {
                    return _this2.setState({ loading: loading });
                }, loading.delay);
            } else {
                this.setState({ loading: loading });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                shape = _a.shape,
                _a$size = _a.size,
                size = _a$size === undefined ? '' : _a$size,
                className = _a.className,
                htmlType = _a.htmlType,
                children = _a.children,
                icon = _a.icon,
                prefixCls = _a.prefixCls,
                ghost = _a.ghost,
                others = __rest(_a, ["type", "shape", "size", "className", "htmlType", "children", "icon", "prefixCls", "ghost"]);var _state = this.state,
                loading = _state.loading,
                clicked = _state.clicked;
            // large => lg
            // small => sm

            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var classes = (0, _classnames2['default'])(prefixCls, className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3['default'])(_classNames, prefixCls + '-icon-only', !children && icon && !loading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3['default'])(_classNames, prefixCls + '-clicked', clicked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-background-ghost', ghost), _classNames));
            var iconType = loading ? 'loading' : icon;
            var iconNode = iconType ? _react2['default'].createElement(_icon2['default'], { type: iconType }) : null;
            var needInserted = _react2['default'].Children.count(children) === 1 && !iconType;
            var kids = _react2['default'].Children.map(children, function (child) {
                return insertSpace(child, needInserted);
            });
            return _react2['default'].createElement(
                'button',
                (0, _extends3['default'])({}, (0, _omit2['default'])(others, ['loading', 'clicked']), { type: htmlType || 'button', className: classes, onClick: this.handleClick }),
                iconNode,
                kids
            );
        }
    }]);
    return Button;
}(_react2['default'].Component);

exports['default'] = Button;

Button.__ANT_BUTTON = true;
Button.defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    clicked: false,
    ghost: false
};
Button.propTypes = {
    type: _propTypes2['default'].string,
    shape: _propTypes2['default'].oneOf(['circle', 'circle-outline']),
    size: _propTypes2['default'].oneOf(['large', 'default', 'small']),
    htmlType: _propTypes2['default'].oneOf(['submit', 'button', 'reset']),
    onClick: _propTypes2['default'].func,
    loading: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    className: _propTypes2['default'].string,
    icon: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 1656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var ButtonGroup = function ButtonGroup(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-btn-group' : _props$prefixCls,
        _props$size = props.size,
        size = _props$size === undefined ? '' : _props$size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);
    // large => lg
    // small => sm


    var sizeCls = '';
    switch (size) {
        case 'large':
            sizeCls = 'lg';
            break;
        case 'small':
            sizeCls = 'sm';
        default:
            break;
    }
    var classes = (0, _classnames2['default'])(prefixCls, (0, _defineProperty3['default'])({}, prefixCls + '-' + sizeCls, sizeCls), className);
    return _react2['default'].createElement('div', (0, _extends3['default'])({}, others, { className: classes }));
};
exports['default'] = ButtonGroup;
module.exports = exports['default'];

/***/ }),

/***/ 1657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(137);

var _redux = __webpack_require__(74);

var _views = __webpack_require__(138);

var viewsActions = _interopRequireWildcard(_views);

var _About = __webpack_require__(1658);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views
    enterAbout: viewsActions.enterAbout,
    leaveAbout: viewsActions.leaveAbout
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_About2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/about/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/about/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/about/index.js');
}();

;

/***/ }),

/***/ 1658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(217);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var About = function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterAbout = this.props.enterAbout;

      enterAbout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveAbout = this.props.leaveAbout;

      leaveAbout();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'About'
        )
      );
    }
  }]);

  return About;
}(_react.PureComponent);

About.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string.isRequired,
  enterAbout: _propTypes2.default.func.isRequired,
  leaveAbout: _propTypes2.default.func.isRequired
};
var _default = About;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/about/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/about/About.js');
}();

;

/***/ }),

/***/ 1659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(207);

var _auth = __webpack_require__(209);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var PrivateRoute = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          InnerComponent = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      var location = this.props.location;


      var isUserAuthenticated = this.isAuthenticated();
      var isTokenExpired = this.isExpired();

      return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: function render(props) {
          return !isTokenExpired && isUserAuthenticated ? _react2.default.createElement(InnerComponent, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: location } } });
        }
      }));
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      var checkUserHasId = function checkUserHasId(user) {
        return user && user.id;
      };
      var user = _auth2.default.getUserInfo() ? _auth2.default.getUserInfo() : null;
      var isAuthenticated = _auth2.default.getToken() && checkUserHasId(user) ? true : false;
      return isAuthenticated;
    }
  }, {
    key: 'isExpired',
    value: function isExpired() {
      // comment me:
      console.log('token expires: ', _auth2.default.getTokenExpirationDate(_auth2.default.getToken()));

      return _auth2.default.isExpiredToken(_auth2.default.getToken());
    }
  }]);

  return PrivateRoute;
}(_react.Component);

PrivateRoute.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  component: _propTypes2.default.any.isRequired,
  path: _propTypes2.default.string
};

var _default = (0, _reactRouterDom.withRouter)(PrivateRoute);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PrivateRoute, 'PrivateRoute', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/privateRoute/PrivateRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/privateRoute/PrivateRoute.js');
}();

;

/***/ }),

/***/ 1660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(137);

var _redux = __webpack_require__(74);

var _views = __webpack_require__(138);

var viewsActions = _interopRequireWildcard(_views);

var _Protected = __webpack_require__(1661);

var _Protected2 = _interopRequireDefault(_Protected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views
    enterProtected: viewsActions.enterProtected,
    leaveProtected: viewsActions.leaveProtected
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Protected2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/protected/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/protected/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/protected/index.js');
}();

;

/***/ }),

/***/ 1661:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedView = __webpack_require__(217);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Protected = function (_PureComponent) {
  _inherits(Protected, _PureComponent);

  function Protected() {
    _classCallCheck(this, Protected);

    return _possibleConstructorReturn(this, (Protected.__proto__ || Object.getPrototypeOf(Protected)).apply(this, arguments));
  }

  _createClass(Protected, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterProtected = this.props.enterProtected;

      enterProtected();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveProtected = this.props.leaveProtected;

      leaveProtected();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Protected view'
        ),
        _react2.default.createElement(
          'h3',
          null,
          'If you can read, it means you are authenticated'
        )
      );
    }
  }]);

  return Protected;
}(_react.PureComponent);

Protected.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views:
  currentView: _propTypes2.default.string.isRequired,
  enterProtected: _propTypes2.default.func.isRequired,
  leaveProtected: _propTypes2.default.func.isRequired
};
var _default = Protected;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Protected, 'Protected', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/protected/Protected.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/protected/Protected.js');
}();

;

/***/ }),

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (window) {
        var prevLocation = prevProps.location;
        var nextLocation = this.props.location;


        if (prevLocation !== nextLocation) {
          window.scrollTo(0, 0);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return ScrollToTop;
}(_react.Component);

ScrollToTop.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  children: _propTypes2.default.node
};

var _default = (0, _reactRouter.withRouter)(ScrollToTop);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ScrollToTop, 'ScrollToTop', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/scrollToTop/ScrollToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/scrollToTop/ScrollToTop.js');
}();

;

/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _redux = __webpack_require__(74);

var _reactRedux = __webpack_require__(137);

var _views = __webpack_require__(138);

var viewsActions = _interopRequireWildcard(_views);

var _userAuth = __webpack_require__(582);

var userAuthActions = _interopRequireWildcard(_userAuth);

var _Login = __webpack_require__(1664);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views:
    currentView: state.views.currentView,

    // useAuth:
    isAuthenticated: state.userAuth.isAuthenticated,
    isFetching: state.userAuth.isFetching,
    isLogging: state.userAuth.isLogging

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, viewsActions, userAuthActions), dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login2.default);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/login/index.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/login/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/login/index.js');
}();

;

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style7 = __webpack_require__(1665);

var _row = __webpack_require__(1666);

var _row2 = _interopRequireDefault(_row);

var _style8 = __webpack_require__(1667);

var _col = __webpack_require__(1668);

var _col2 = _interopRequireDefault(_col);

var _style9 = __webpack_require__(620);

var _button = __webpack_require__(621);

var _button2 = _interopRequireDefault(_button);

var _style10 = __webpack_require__(1669);

var _input = __webpack_require__(1671);

var _input2 = _interopRequireDefault(_input);

var _style11 = __webpack_require__(322);

var _icon = __webpack_require__(144);

var _icon2 = _interopRequireDefault(_icon);

var _style12 = __webpack_require__(1675);

var _form = __webpack_require__(1678);

var _form2 = _interopRequireDefault(_form);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _auth = __webpack_require__(209);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var FormItem = _form2.default.Item;

var Login = function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    var _ref,
        _this3 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.handlesOnBackToHome = function () {
      var _this2;

      return (_this2 = _this).__handlesOnBackToHome__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handlesOnLogin = function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(event) {
        var _this$props, _this$props$form, validateFields, getFieldValue, history, logUserIfNeeded, isValidForm, userLogin, response, _response$payload$dat, token, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (event) {
                  event.preventDefault();
                }

                _this$props = _this.props, _this$props$form = _this$props.form, validateFields = _this$props$form.validateFields, getFieldValue = _this$props$form.getFieldValue, history = _this$props.history, logUserIfNeeded = _this$props.logUserIfNeeded;
                isValidForm = true;

                validateFields(function (err /* , values */) {
                  if (err) {
                    isValidForm = false;
                  }
                });

                if (isValidForm) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt('return', false);

              case 6:
                userLogin = {
                  login: getFieldValue('eMail'),
                  password: getFieldValue('password')
                };
                _context.prev = 7;
                _context.next = 10;
                return logUserIfNeeded(userLogin);

              case 10:
                response = _context.sent;
                _response$payload$dat = response.payload.data, token = _response$payload$dat.token, user = _response$payload$dat.user;


                _auth2.default.setToken(token);
                _auth2.default.setUserInfo(user);

                history.push({ pathname: '/' }); // back to Home
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](7);

                /* eslint-disable no-console */
                console.log('login went wrong..., error: ', _context.t0);
                /* eslint-enable no-console */

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3, [[7, 17]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.goHome = function () {
      var _this4;

      return (_this4 = _this).__goHome__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          enterLogin = _props.enterLogin,
          disconnectUser = _props.disconnectUser;


      disconnectUser(); // diconnect user: remove token and user info 
      enterLogin();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveLogin = this.props.leaveLogin;

      leaveLogin();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          getFieldDecorator = _props2.form.getFieldDecorator,
          isLogging = _props2.isLogging;


      return _react2.default.createElement(
        _row2.default,
        {
          className: 'login-form'
        },
        _react2.default.createElement(
          _col2.default,
          {
            md: { span: 6, offset: 8 },
            xs: { span: 18, offset: 3 }
          },
          _react2.default.createElement(
            _form2.default,
            {
              onSubmit: this.handlesOnLogin,
              className: 'login-form'
            },
            _react2.default.createElement(
              FormItem,
              null,
              getFieldDecorator('eMail', {
                rules: [{ required: true, message: 'Please input your email!' }]
              })(_react2.default.createElement(_input2.default, {
                prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { fontSize: 13 } }),
                placeholder: 'Email'
              }))
            ),
            _react2.default.createElement(
              FormItem,
              null,
              getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
              })(_react2.default.createElement(_input2.default, {
                prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { fontSize: 13 } }),
                type: 'password',
                placeholder: 'Password'
              }))
            ),
            _react2.default.createElement(
              FormItem,
              null,
              _react2.default.createElement(
                _button2.default,
                {
                  loading: isLogging,
                  disabled: isLogging,
                  type: 'primary',
                  htmlType: 'submit',
                  className: 'login-form-button'
                },
                'Log in'
              )
            )
          )
        ),
        _react2.default.createElement(
          _col2.default,
          {
            md: { span: 6, offset: 8 },
            xs: { span: 18, offset: 3 }
          },
          _react2.default.createElement(
            _button2.default,
            {
              type: 'default',
              onClick: this.handlesOnBackToHome
            },
            _react2.default.createElement(_icon2.default, { type: 'home' }),
            'back to Home'
          )
        )
      );
    }
  }, {
    key: '__handlesOnBackToHome__REACT_HOT_LOADER__',
    value: function __handlesOnBackToHome__REACT_HOT_LOADER__(event) {
      if (event) {
        event.preventDefault();
      }
      var history = this.props.history;


      history.push('/');
    }
  }, {
    key: '__goHome__REACT_HOT_LOADER__',
    value: function __goHome__REACT_HOT_LOADER__(event) {
      if (event) {
        event.preventDefault();
      }
      var history = this.props.history;

      history.push({ pathname: '/' });
    }
  }]);

  return Login;
}(_react.PureComponent);

Login.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // antd Form.create
  form: _propTypes2.default.shape({
    getFieldDecorator: _propTypes2.default.func.isRequired,
    validateFields: _propTypes2.default.func.isRequired,
    getFieldValue: _propTypes2.default.func.isRequired
  }).isRequired,

  // views props:
  currentView: _propTypes2.default.string.isRequired,
  enterLogin: _propTypes2.default.func.isRequired,
  leaveLogin: _propTypes2.default.func.isRequired,

  // userAuth:
  isAuthenticated: _propTypes2.default.bool,
  isFetching: _propTypes2.default.bool,
  isLogging: _propTypes2.default.bool,
  disconnectUser: _propTypes2.default.func.isRequired,
  logUserIfNeeded: _propTypes2.default.func.isRequired
};
Login.defaultProps = {
  isFetching: false,
  isLogging: false
};

var _default7 = _form2.default.create({})(Login);

exports.default = _default7;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormItem, 'FormItem', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/login/Login.js');

  __REACT_HOT_LOADER__.register(Login, 'Login', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/login/Login.js');

  __REACT_HOT_LOADER__.register(_default7, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/login/Login.js');
}();

;

/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(323);

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(622);

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(323);

/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(622);

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(1670);

/***/ }),

/***/ 1670:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__(625);

var _Input2 = _interopRequireDefault(_Input);

var _Group = __webpack_require__(1673);

var _Group2 = _interopRequireDefault(_Group);

var _Search = __webpack_require__(1674);

var _Search2 = _interopRequireDefault(_Search);

var _TextArea = __webpack_require__(626);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_Input2['default'].Group = _Group2['default'];
_Input2['default'].Search = _Search2['default'];
_Input2['default'].TextArea = _TextArea2['default'];
exports['default'] = _Input2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 1672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = calculateNodeHeight;
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea = void 0;
function calculateNodeStyling(node) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    var sizingStyle = SIZING_STYLE.map(function (name) {
        return name + ':' + style.getPropertyValue(name);
    }).join(';');
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
    var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    } else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox

    var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
        paddingSize = _calculateNodeStyling.paddingSize,
        borderSize = _calculateNodeStyling.borderSize,
        boxSizing = _calculateNodeStyling.boxSizing,
        sizingStyle = _calculateNodeStyling.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content


    hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var minHeight = -Infinity;
    var maxHeight = Infinity;
    var height = hiddenTextarea.scrollHeight;
    var overflowY = void 0;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    } else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = '';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}
module.exports = exports['default'];

/***/ }),

/***/ 1673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Group = function Group(props) {
    var _classNames;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-input-group' : _props$prefixCls,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className;

    var cls = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', props.size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-compact', props.compact), _classNames), className);
    return _react2['default'].createElement(
        'span',
        { className: cls, style: props.style },
        props.children
    );
};
exports['default'] = Group;
module.exports = exports['default'];

/***/ }),

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = __webpack_require__(625);

var _Input2 = _interopRequireDefault(_Input);

var _icon = __webpack_require__(144);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Search = function (_React$Component) {
    (0, _inherits3['default'])(Search, _React$Component);

    function Search() {
        (0, _classCallCheck3['default'])(this, Search);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));

        _this.onSearch = function () {
            var onSearch = _this.props.onSearch;

            if (onSearch) {
                onSearch(_this.input.refs.input.value);
            }
            _this.input.focus();
        };
        return _this;
    }

    (0, _createClass3['default'])(Search, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                className = _a.className,
                prefixCls = _a.prefixCls,
                others = __rest(_a, ["className", "prefixCls"]);
            delete others.onSearch;
            var searchSuffix = _react2['default'].createElement(_icon2['default'], { className: prefixCls + '-icon', onClick: this.onSearch, type: 'search' });
            return _react2['default'].createElement(_Input2['default'], (0, _extends3['default'])({ onPressEnter: this.onSearch }, others, { className: (0, _classnames2['default'])(prefixCls, className), suffix: searchSuffix, ref: function ref(node) {
                    return _this2.input = node;
                } }));
        }
    }]);
    return Search;
}(_react2['default'].Component);

exports['default'] = Search;

Search.defaultProps = {
    prefixCls: 'ant-input-search'
};
module.exports = exports['default'];

/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(1676);

__webpack_require__(1677);

/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(323);

/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = __webpack_require__(1679);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Form2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 1679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _createDOMForm = __webpack_require__(1680);

var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

var _PureRenderMixin = __webpack_require__(640);

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _omit = __webpack_require__(41);

var _omit2 = _interopRequireDefault(_omit);

var _createReactClass = __webpack_require__(22);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _warning = __webpack_require__(316);

var _warning2 = _interopRequireDefault(_warning);

var _FormItem = __webpack_require__(1764);

var _FormItem2 = _interopRequireDefault(_FormItem);

var _constants = __webpack_require__(641);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Form = function (_React$Component) {
    (0, _inherits3['default'])(Form, _React$Component);

    function Form(props) {
        (0, _classCallCheck3['default'])(this, Form);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

        (0, _warning2['default'])(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
        return _this;
    }

    (0, _createClass3['default'])(Form, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _PureRenderMixin2['default'].shouldComponentUpdate.apply(this, args);
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            var _props = this.props,
                layout = _props.layout,
                vertical = _props.vertical;

            return {
                vertical: layout === 'vertical' || vertical
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                hideRequiredMark = _props2.hideRequiredMark,
                _props2$className = _props2.className,
                className = _props2$className === undefined ? '' : _props2$className,
                layout = _props2.layout,
                inline = _props2.inline,
                horizontal = _props2.horizontal,
                vertical = _props2.vertical;

            (0, _warning2['default'])(!inline && !horizontal && !vertical, '`Form[inline|horizontal|vertical]` is deprecated, please use `Form[layout]` instead.');
            var formClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-horizontal', !inline && !vertical && layout === 'horizontal' || horizontal), (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', layout === 'vertical' || vertical), (0, _defineProperty3['default'])(_classNames, prefixCls + '-inline', layout === 'inline' || inline), (0, _defineProperty3['default'])(_classNames, prefixCls + '-hide-required-mark', hideRequiredMark), _classNames), className);
            var formProps = (0, _omit2['default'])(this.props, ['prefixCls', 'className', 'layout', 'inline', 'horizontal', 'vertical', 'form', 'hideRequiredMark']);
            return _react2['default'].createElement('form', (0, _extends3['default'])({}, formProps, { className: formClassName }));
        }
    }]);
    return Form;
}(_react2['default'].Component);

exports['default'] = Form;

Form.defaultProps = {
    prefixCls: 'ant-form',
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit: function onSubmit(e) {
        e.preventDefault();
    }
};
Form.propTypes = {
    prefixCls: _propTypes2['default'].string,
    layout: _propTypes2['default'].oneOf(['horizontal', 'inline', 'vertical']),
    children: _propTypes2['default'].any,
    onSubmit: _propTypes2['default'].func,
    hideRequiredMark: _propTypes2['default'].bool
};
Form.childContextTypes = {
    vertical: _propTypes2['default'].bool
};
Form.Item = _FormItem2['default'];
Form.create = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var formWrapper = (0, _createDOMForm2['default'])((0, _extends3['default'])({ fieldNameProp: 'id' }, options, { fieldMetaProp: _constants.FIELD_META_PROP }));
    /* eslint-disable react/prefer-es6-class */
    return function (Component) {
        return formWrapper((0, _createReactClass2['default'])({
            propTypes: {
                form: _propTypes2['default'].object.isRequired
            },
            childContextTypes: {
                form: _propTypes2['default'].object.isRequired
            },
            getChildContext: function getChildContext() {
                return {
                    form: this.props.form
                };
            },
            componentWillMount: function componentWillMount() {
                this.__getFieldProps = this.props.form.getFieldProps;
            },
            deprecatedGetFieldProps: function deprecatedGetFieldProps(name, option) {
                (0, _warning2['default'])(false, '`getFieldProps` is not recommended, please use `getFieldDecorator` instead, ' + 'see: https://u.ant.design/get-field-decorator');
                return this.__getFieldProps(name, option);
            },
            render: function render() {
                this.props.form.getFieldProps = this.deprecatedGetFieldProps;
                var withRef = {};
                if (options.withRef) {
                    withRef.ref = 'formWrappedComponent';
                } else if (this.props.wrappedComponentRef) {
                    withRef.ref = this.props.wrappedComponentRef;
                }
                return _react2['default'].createElement(Component, (0, _extends3['default'])({}, this.props, withRef));
            }
        }));
    };
};
module.exports = exports['default'];

/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domScrollIntoView = __webpack_require__(166);

var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);

var _has = __webpack_require__(145);

var _has2 = _interopRequireDefault(_has);

var _createBaseForm = __webpack_require__(629);

var _createBaseForm2 = _interopRequireDefault(_createBaseForm);

var _createForm = __webpack_require__(1759);

var _utils = __webpack_require__(333);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function computedStyle(el, prop) {
  var getComputedStyle = window.getComputedStyle;
  var style =
  // If we have getComputedStyle
  getComputedStyle ?
  // Query it
  // TODO: From CSS-Query notes, we might need (node, null) for FF
  getComputedStyle(el) :

  // Otherwise, we are in IE and use currentStyle
  el.currentStyle;
  if (style) {
    return style[
    // Switch to camelCase for CSSOM
    // DEV: Grabbed from jQuery
    // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
    // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
    prop.replace(/-(\w)/gi, function (word, letter) {
      return letter.toUpperCase();
    })];
  }
  return undefined;
}

function getScrollableContainer(n) {
  var node = n;
  var nodeName = void 0;
  /* eslint no-cond-assign:0 */
  while ((nodeName = node.nodeName.toLowerCase()) !== 'body') {
    var overflowY = computedStyle(node, 'overflowY');
    if (node !== n && (overflowY === 'auto' || overflowY === 'scroll')) {
      return node;
    }
    node = node.parentNode;
  }
  return nodeName === 'body' ? node.ownerDocument : node;
}

var mixin = {
  getForm: function getForm() {
    return (0, _extends3['default'])({}, _createForm.mixin.getForm.call(this), {
      validateFieldsAndScroll: this.validateFieldsAndScroll
    });
  },
  validateFieldsAndScroll: function validateFieldsAndScroll(ns, opt, cb) {
    var _this = this;

    var _getParams = (0, _utils.getParams)(ns, opt, cb),
        names = _getParams.names,
        callback = _getParams.callback,
        options = _getParams.options;

    var newCb = function newCb(error, values) {
      if (error) {
        var validNames = _this.fieldsStore.getValidFieldsName();
        var firstNode = void 0;
        var firstTop = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = validNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var name = _step.value;

            if ((0, _has2['default'])(error, name)) {
              var instance = _this.getFieldInstance(name);
              if (instance) {
                var node = _reactDom2['default'].findDOMNode(instance);
                var top = node.getBoundingClientRect().top;
                if (firstTop === undefined || firstTop > top) {
                  firstTop = top;
                  firstNode = node;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (firstNode) {
          var c = options.container || getScrollableContainer(firstNode);
          (0, _domScrollIntoView2['default'])(firstNode, c, (0, _extends3['default'])({
            onlyScrollIfNeeded: true
          }, options.scroll));
        }
      }

      if (typeof callback === 'function') {
        callback(error, values);
      }
    };

    return this.validateFields(names, options, newCb);
  }
};

function createDOMForm(option) {
  return (0, _createBaseForm2['default'])((0, _extends3['default'])({}, option), [mixin]);
}

exports['default'] = createDOMForm;
module.exports = exports['default'];

/***/ }),

/***/ 1758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(222);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(638);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(639);

var _createClass3 = _interopRequireDefault(_createClass2);

exports['default'] = createFieldsStore;

var _get = __webpack_require__(224);

var _get2 = _interopRequireDefault(_get);

var _has = __webpack_require__(145);

var _has2 = _interopRequireDefault(_has);

var _set = __webpack_require__(225);

var _set2 = _interopRequireDefault(_set);

var _utils = __webpack_require__(333);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var atom = {};

var FieldsStore = function () {
  function FieldsStore(fields) {
    (0, _classCallCheck3['default'])(this, FieldsStore);

    _initialiseProps.call(this);

    this.fields = fields;
    this.fieldsMeta = {};
  }

  (0, _createClass3['default'])(FieldsStore, [{
    key: 'replaceFields',
    value: function replaceFields(fields) {
      this.fields = fields;
    }
  }, {
    key: 'setFields',
    value: function setFields(fields) {
      var _this = this;

      var fieldsMeta = this.fieldsMeta;
      var nowFields = (0, _extends3['default'])({}, this.fields, fields);
      var nowValues = {};
      Object.keys(fieldsMeta).forEach(function (f) {
        var _getNameIfNested = (0, _utils.getNameIfNested)(f),
            name = _getNameIfNested.name,
            isNested = _getNameIfNested.isNested;

        if (isNested && fieldsMeta[name].exclusive) {
          return;
        }
        nowValues[f] = _this.getValueFromFields(f, nowFields);
      });
      Object.keys(nowValues).forEach(function (f) {
        var value = nowValues[f];
        var fieldMeta = fieldsMeta[f];
        if (fieldMeta && fieldMeta.normalize) {
          var nowValue = fieldMeta.normalize(value, _this.getValueFromFields(f, _this.fields), nowValues);
          if (nowValue !== value) {
            nowFields[f] = (0, _extends3['default'])({}, nowFields[f], {
              value: nowValue
            });
          }
        }
      });
      this.fields = nowFields;
    }
  }, {
    key: 'resetFields',
    value: function resetFields(ns) {
      var newFields = {};
      var fields = this.fields;

      var names = ns || Object.keys(fields);
      names.forEach(function (name) {
        var field = fields[name];
        if (field && 'value' in field) {
          newFields[name] = {};
        }
      });
      return newFields;
    }
  }, {
    key: 'getValueFromFieldsInternal',
    value: function getValueFromFieldsInternal(name, fields) {
      var field = fields[name];
      if (field && 'value' in field) {
        return field.value;
      }
      var fieldMeta = this.fieldsMeta[name];
      return fieldMeta && fieldMeta.initialValue;
    }
  }, {
    key: 'getValueFromFields',
    value: function getValueFromFields(name, fields) {
      var _this2 = this;

      var fieldsMeta = this.fieldsMeta;

      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
        var ret = {};
        Object.keys(fieldsMeta).forEach(function (fieldKey) {
          var nameIfNested = (0, _utils.getNameIfNested)(fieldKey);
          if (nameIfNested.name === name && nameIfNested.isNested) {
            (0, _set2['default'])(ret, fieldKey, _this2.getValueFromFieldsInternal(fieldKey, fields));
          }
        });
        return ret[name];
      }
      return this.getValueFromFieldsInternal(name, fields);
    }
  }, {
    key: 'getValidFieldsName',
    value: function getValidFieldsName() {
      var fieldsMeta = this.fieldsMeta;
      return fieldsMeta ? Object.keys(fieldsMeta).filter(function (name) {
        return !fieldsMeta[name].hidden;
      }) : [];
    }
  }, {
    key: 'getFieldValuePropValue',
    value: function getFieldValuePropValue(fieldMeta) {
      var exclusive = fieldMeta.exclusive,
          leadingName = fieldMeta.leadingName,
          name = fieldMeta.name,
          getValueProps = fieldMeta.getValueProps,
          valuePropName = fieldMeta.valuePropName;
      var fieldsMeta = this.fieldsMeta;

      var field = exclusive ? this.getField(leadingName) : this.getField(name);
      var fieldValue = atom;
      if (field && 'value' in field) {
        fieldValue = field.value;
      }
      if (fieldValue === atom) {
        fieldValue = exclusive ? fieldsMeta[leadingName].initialValue : fieldMeta.initialValue;
      }
      if (getValueProps) {
        return getValueProps(fieldValue);
      }
      return (0, _defineProperty3['default'])({}, valuePropName, fieldValue);
    }
  }, {
    key: 'getField',
    value: function getField(name) {
      return (0, _extends3['default'])({}, this.fields[name], {
        name: name
      });
    }
  }, {
    key: 'getFieldMember',
    value: function getFieldMember(name, member) {
      return this.getField(name)[member];
    }
  }, {
    key: 'getFieldMeta',
    value: function getFieldMeta(name) {
      if (!this.fieldsMeta[name]) {
        this.fieldsMeta[name] = {};
      }
      return this.fieldsMeta[name];
    }
  }, {
    key: 'setFieldMeta',
    value: function setFieldMeta(name, meta) {
      this.fieldsMeta[name] = meta;
    }
  }, {
    key: 'clearField',
    value: function clearField(name) {
      delete this.fields[name];
      delete this.fieldsMeta[name];
    }
  }]);
  return FieldsStore;
}();

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getFieldsValue = function (names) {
    var fields = names || (0, _utils.flatFieldNames)(_this3.getValidFieldsName());
    var allValues = {};
    fields.forEach(function (f) {
      (0, _set2['default'])(allValues, f, _this3.getFieldValue(f));
    });
    return allValues;
  };

  this.getFieldValue = function (name) {
    var fields = _this3.fields;

    return _this3.getValueFromFields(name, fields);
  };

  this.getFieldsError = function (names) {
    var fields = names || (0, _utils.flatFieldNames)(_this3.getValidFieldsName());
    var allErrors = {};
    fields.forEach(function (f) {
      (0, _set2['default'])(allErrors, f, _this3.getFieldError(f));
    });
    return allErrors;
  };

  this.getFieldError = function (name) {
    return (0, _utils.getErrorStrs)(_this3.getFieldMember(name, 'errors'));
  };

  this.setFieldsInitialValue = function (initialValues) {
    var fieldsMeta = _this3.fieldsMeta;
    var virtualPaths = (0, _utils.getVirtualPaths)(fieldsMeta);
    Object.keys(initialValues).forEach(function (name) {
      if (fieldsMeta[name] && fieldsMeta[name].virtual) {
        for (var i = 0, len = virtualPaths[name].length; i < len; i++) {
          var path = virtualPaths[name][i];
          if ((0, _has2['default'])(initialValues, path)) {
            fieldsMeta[path] = (0, _extends3['default'])({}, fieldsMeta[path], {
              initialValue: (0, _get2['default'])(initialValues, path)
            });
          }
        }
      } else if (fieldsMeta[name]) {
        fieldsMeta[name] = (0, _extends3['default'])({}, fieldsMeta[name], {
          initialValue: initialValues[name]
        });
      }
    });
  };

  this.isFieldValidating = function (name) {
    return _this3.getFieldMember(name, 'validating');
  };

  this.isFieldsValidating = function (ns) {
    var names = ns || _this3.getValidFieldsName();
    return names.some(function (n) {
      return _this3.isFieldValidating(n);
    });
  };

  this.isFieldTouched = function (name) {
    return _this3.getFieldMember(name, 'touched');
  };

  this.isFieldsTouched = function (ns) {
    var names = ns || _this3.getValidFieldsName();
    return names.some(function (n) {
      return _this3.isFieldTouched(n);
    });
  };
};

function createFieldsStore(fields) {
  return new FieldsStore(fields);
}
module.exports = exports['default'];

/***/ }),

/***/ 1759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = undefined;

var _createBaseForm = __webpack_require__(629);

var _createBaseForm2 = _interopRequireDefault(_createBaseForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var mixin = exports.mixin = {
  getForm: function getForm() {
    return {
      getFieldsValue: this.fieldsStore.getFieldsValue,
      getFieldValue: this.fieldsStore.getFieldValue,
      getFieldInstance: this.getFieldInstance,
      setFieldsValue: this.setFieldsValue,
      setFields: this.setFields,
      setFieldsInitialValue: this.fieldsStore.setFieldsInitialValue,
      getFieldDecorator: this.getFieldDecorator,
      getFieldProps: this.getFieldProps,
      getFieldsError: this.fieldsStore.getFieldsError,
      getFieldError: this.fieldsStore.getFieldError,
      isFieldValidating: this.fieldsStore.isFieldValidating,
      isFieldsValidating: this.fieldsStore.isFieldsValidating,
      isFieldsTouched: this.fieldsStore.isFieldsTouched,
      isFieldTouched: this.fieldsStore.isFieldTouched,
      isSubmitting: this.isSubmitting,
      submit: this.submit,
      validateFields: this.validateFields,
      resetFields: this.resetFields
    };
  }
};

function createForm(options) {
  return (0, _createBaseForm2['default'])(options, [mixin]);
}

exports['default'] = createForm;

/***/ }),

/***/ 1764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRenderMixin = __webpack_require__(640);

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _row = __webpack_require__(623);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(624);

var _col2 = _interopRequireDefault(_col);

var _constants = __webpack_require__(641);

var _warning = __webpack_require__(316);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FormItem = function (_React$Component) {
    (0, _inherits3['default'])(FormItem, _React$Component);

    function FormItem() {
        (0, _classCallCheck3['default'])(this, FormItem);
        return (0, _possibleConstructorReturn3['default'])(this, (FormItem.__proto__ || Object.getPrototypeOf(FormItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(FormItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _warning2['default'])(this.getControls(this.props.children, true).length <= 1, '`Form.Item` cannot generate `validateStatus` and `help` automatically, ' + 'while there are more than one `getFieldDecorator` in it.');
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _PureRenderMixin2['default'].shouldComponentUpdate.apply(this, args);
        }
    }, {
        key: 'getHelpMsg',
        value: function getHelpMsg() {
            var context = this.context;
            var props = this.props;
            if (props.help === undefined && context.form) {
                return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
            }
            return props.help;
        }
    }, {
        key: 'getControls',
        value: function getControls(children, recursively) {
            var controls = [];
            var childrenArray = _react2['default'].Children.toArray(children);
            for (var i = 0; i < childrenArray.length; i++) {
                if (!recursively && controls.length > 0) {
                    break;
                }
                var child = childrenArray[i];
                if (child.type === FormItem) {
                    continue;
                }
                if (!child.props) {
                    continue;
                }
                if (_constants.FIELD_META_PROP in child.props) {
                    controls.push(child);
                } else if (child.props.children) {
                    controls = controls.concat(this.getControls(child.props.children, recursively));
                }
            }
            return controls;
        }
    }, {
        key: 'getOnlyControl',
        value: function getOnlyControl() {
            var child = this.getControls(this.props.children, false)[0];
            return child !== undefined ? child : null;
        }
    }, {
        key: 'getChildProp',
        value: function getChildProp(prop) {
            var child = this.getOnlyControl();
            return child && child.props && child.props[prop];
        }
    }, {
        key: 'getId',
        value: function getId() {
            return this.getChildProp('id');
        }
    }, {
        key: 'getMeta',
        value: function getMeta() {
            return this.getChildProp(_constants.FIELD_META_PROP);
        }
    }, {
        key: 'renderHelp',
        value: function renderHelp() {
            var prefixCls = this.props.prefixCls;
            var help = this.getHelpMsg();
            return help ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-explain', key: 'help' },
                help
            ) : null;
        }
    }, {
        key: 'renderExtra',
        value: function renderExtra() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                extra = _props.extra;

            return extra ? _react2['default'].createElement(
                'div',
                { className: prefixCls + '-extra' },
                extra
            ) : null;
        }
    }, {
        key: 'getValidateStatus',
        value: function getValidateStatus() {
            var _context$form = this.context.form,
                isFieldValidating = _context$form.isFieldValidating,
                getFieldError = _context$form.getFieldError,
                getFieldValue = _context$form.getFieldValue;

            var fieldId = this.getId();
            if (!fieldId) {
                return '';
            }
            if (isFieldValidating(fieldId)) {
                return 'validating';
            }
            if (!!getFieldError(fieldId)) {
                return 'error';
            }
            var fieldValue = getFieldValue(fieldId);
            if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
                return 'success';
            }
            return '';
        }
    }, {
        key: 'renderValidateWrapper',
        value: function renderValidateWrapper(c1, c2, c3) {
            var classes = '';
            var form = this.context.form;
            var props = this.props;
            var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;
            if (validateStatus) {
                classes = (0, _classnames2['default'])({
                    'has-feedback': props.hasFeedback,
                    'has-success': validateStatus === 'success',
                    'has-warning': validateStatus === 'warning',
                    'has-error': validateStatus === 'error',
                    'is-validating': validateStatus === 'validating'
                });
            }
            return _react2['default'].createElement(
                'div',
                { className: this.props.prefixCls + '-item-control ' + classes },
                c1,
                c2,
                c3
            );
        }
    }, {
        key: 'renderWrapper',
        value: function renderWrapper(children) {
            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                wrapperCol = _props2.wrapperCol;

            var className = (0, _classnames2['default'])(prefixCls + '-item-control-wrapper', wrapperCol && wrapperCol.className);
            return _react2['default'].createElement(
                _col2['default'],
                (0, _extends3['default'])({}, wrapperCol, { className: className, key: 'wrapper' }),
                children
            );
        }
    }, {
        key: 'isRequired',
        value: function isRequired() {
            var required = this.props.required;

            if (required !== undefined) {
                return required;
            }
            if (this.context.form) {
                var meta = this.getMeta() || {};
                var validate = meta.validate || [];
                return validate.filter(function (item) {
                    return !!item.rules;
                }).some(function (item) {
                    return item.rules.some(function (rule) {
                        return rule.required;
                    });
                });
            }
            return false;
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                label = _props3.label,
                labelCol = _props3.labelCol,
                colon = _props3.colon,
                id = _props3.id;

            var context = this.context;
            var required = this.isRequired();
            var labelColClassName = (0, _classnames2['default'])(prefixCls + '-item-label', labelCol && labelCol.className);
            var labelClassName = (0, _classnames2['default'])((0, _defineProperty3['default'])({}, prefixCls + '-item-required', required));
            var labelChildren = label;
            // Keep label is original where there should have no colon
            var haveColon = colon && !context.vertical;
            // Remove duplicated user input colon
            if (haveColon && typeof label === 'string' && label.trim() !== '') {
                labelChildren = label.replace(/[：|:]\s*$/, '');
            }
            return label ? _react2['default'].createElement(
                _col2['default'],
                (0, _extends3['default'])({}, labelCol, { className: labelColClassName, key: 'label' }),
                _react2['default'].createElement(
                    'label',
                    { htmlFor: id || this.getId(), className: labelClassName, title: typeof label === 'string' ? label : '' },
                    labelChildren
                )
            ) : null;
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var props = this.props;
            var children = _react2['default'].Children.map(props.children, function (child) {
                if (child && typeof child.type === 'function' && !child.props.size) {
                    return _react2['default'].cloneElement(child, { size: 'large' });
                }
                return child;
            });
            return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
        }
    }, {
        key: 'renderFormItem',
        value: function renderFormItem(children) {
            var _itemClassName;

            var props = this.props;
            var prefixCls = props.prefixCls;
            var style = props.style;
            var itemClassName = (_itemClassName = {}, (0, _defineProperty3['default'])(_itemClassName, prefixCls + '-item', true), (0, _defineProperty3['default'])(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), (0, _defineProperty3['default'])(_itemClassName, prefixCls + '-item-no-colon', !props.colon), (0, _defineProperty3['default'])(_itemClassName, '' + props.className, !!props.className), _itemClassName);
            return _react2['default'].createElement(
                _row2['default'],
                { className: (0, _classnames2['default'])(itemClassName), style: style },
                children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.renderChildren();
            return this.renderFormItem(children);
        }
    }]);
    return FormItem;
}(_react2['default'].Component);

exports['default'] = FormItem;

FormItem.defaultProps = {
    hasFeedback: false,
    prefixCls: 'ant-form',
    colon: true
};
FormItem.propTypes = {
    prefixCls: _propTypes2['default'].string,
    label: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
    labelCol: _propTypes2['default'].object,
    help: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].bool]),
    validateStatus: _propTypes2['default'].oneOf(['', 'success', 'warning', 'error', 'validating']),
    hasFeedback: _propTypes2['default'].bool,
    wrapperCol: _propTypes2['default'].object,
    className: _propTypes2['default'].string,
    id: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    colon: _propTypes2['default'].bool
};
FormItem.contextTypes = {
    form: _propTypes2['default'].object,
    vertical: _propTypes2['default'].bool
};
module.exports = exports['default'];

/***/ }),

/***/ 1765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AnimatedView = __webpack_require__(217);

var _AnimatedView2 = _interopRequireDefault(_AnimatedView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

// import PropTypes      from 'prop-types';


var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _AnimatedView2.default,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Sorry this page does not exists...'
          )
        )
      );
    }
  }]);

  return PageNotFound;
}(_react.PureComponent);

var _default = PageNotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/pageNotFound/PageNotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/views/pageNotFound/PageNotFound.js');
}();

;

/***/ }),

/***/ 1766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(207);

var _auth = __webpack_require__(209);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var LogoutRoute = function (_PureComponent) {
  _inherits(LogoutRoute, _PureComponent);

  function LogoutRoute() {
    _classCallCheck(this, LogoutRoute);

    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
  }

  _createClass(LogoutRoute, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _auth2.default.clearAllAppStorage();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Route,
        this.props,
        _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login' } })
      );
    }
  }]);

  return LogoutRoute;
}(_react.PureComponent);

LogoutRoute.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(LogoutRoute);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LogoutRoute, 'LogoutRoute', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/logoutRoute/LogoutRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/logoutRoute/LogoutRoute.js');
}();

;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _jwtDecode = __webpack_require__(583);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOKEN_KEY = 'token';

var USER_INFO = 'userInfo';

var APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

var parse = JSON.parse;
var stringify = JSON.stringify;

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
var auth = exports.auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getToken: function getToken() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && localStorage.getItem(tokenKey) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && sessionStorage.getItem(tokenKey) || null;
    }
    // default:
    return null;
  },


  /**
  * set the token value into localstorage (managed by localforage)
  *
  * @param {string} [value=''] token value
  * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
  * @param {any} [tokenKey='token'] token key
  * @returns {boolean} success/failure flag
  */
  setToken: function setToken() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TOKEN_KEY;

    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
      }
    }
  },


  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to protected routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
   */
  isAuthenticated: function isAuthenticated() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage && localStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage && sessionStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }
    // default:
    return false;
  },


  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken: function clearToken() {
    var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },


  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate: function getTokenExpirationDate(encodedToken) {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    var token = (0, _jwtDecode2.default)(encodedToken);
    if (!token.exp) {
      return new Date(0); // is expired
    }

    var expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },


  /**
   * tell is token is expired (compared to now)
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {bool} returns true if expired else false
   */
  isExpiredToken: function isExpiredToken(encodedToken) {
    var expirationDate = this.getTokenExpirationDate(encodedToken);
    var rightNow = (0, _moment2.default)();
    var isExpiredToken = (0, _moment2.default)(rightNow).isAfter((0, _moment2.default)(expirationDate));

    return isExpiredToken;
  },


  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////
  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getUserInfo: function getUserInfo() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_INFO;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && parse(localStorage.getItem(userInfoKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && parse(sessionStorage.getItem(userInfoKey)) || null;
    }
    // default:
    return null;
  },


  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
  setUserInfo: function setUserInfo() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : USER_INFO;

    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },


  /**
   * delete userInfo
   *
   * @param {string} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
  clearUserInfo: function clearUserInfo() {
    var userInfoKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_INFO;

    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
    }
  },


  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage: function clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};

var _default = auth;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOKEN_KEY, 'TOKEN_KEY', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(USER_INFO, 'USER_INFO', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(APP_PERSIST_STORES_TYPES, 'APP_PERSIST_STORES_TYPES', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(parse, 'parse', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(stringify, 'stringify', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(auth, 'auth', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/services/auth/index.js');
}();

;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

// import { withRouter }       from 'react-router-dom';

var AnimatedView = function (_Component) {
  _inherits(AnimatedView, _Component);

  function AnimatedView() {
    _classCallCheck(this, AnimatedView);

    return _possibleConstructorReturn(this, (AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).apply(this, arguments));
  }

  _createClass(AnimatedView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          animated = _props.animated,
          children = _props.children;


      return _react2.default.createElement(
        'section',
        {
          className: (0, _classnames2.default)({
            'content': true,
            'view-enter': animated
          }) },
        children
      );
    }
  }]);

  return AnimatedView;
}(_react.Component);

AnimatedView.propTypes = {
  children: _propTypes2.default.node,
  animated: _propTypes2.default.bool
};
AnimatedView.defaultProps = {
  animated: true
};
var _default = AnimatedView;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AnimatedView, 'AnimatedView', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/animatedView/AnimatedView.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/components/animatedView/AnimatedView.js');
}();

;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _warning = __webpack_require__(31);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var warned = {};

exports['default'] = function (valid, message) {
    if (!valid && !warned[message]) {
        (0, _warning2['default'])(false, message);
        warned[message] = true;
    }
};

module.exports = exports['default'];

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

exports.argumentContainer = argumentContainer;
exports.getValueFromEvent = getValueFromEvent;
exports.getErrorStrs = getErrorStrs;
exports.isEmptyObject = isEmptyObject;
exports.flattenArray = flattenArray;
exports.mirror = mirror;
exports.hasRules = hasRules;
exports.startsWith = startsWith;
exports.getParams = getParams;
exports.getNameIfNested = getNameIfNested;
exports.flatFieldNames = flatFieldNames;
exports.clearVirtualField = clearVirtualField;
exports.getVirtualPaths = getVirtualPaths;
exports.normalizeValidateRules = normalizeValidateRules;

var _hoistNonReactStatics = __webpack_require__(208);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WrappedComponent';
}

function argumentContainer(Container, WrappedComponent) {
  /* eslint no-param-reassign:0 */
  Container.displayName = 'Form(' + getDisplayName(WrappedComponent) + ')';
  Container.WrappedComponent = WrappedComponent;
  return (0, _hoistNonReactStatics2['default'])(Container, WrappedComponent);
}

function getValueFromEvent(e) {
  // support custom element
  if (!e || !e.target) {
    return e;
  }
  var target = e.target;

  return target.type === 'checkbox' ? target.checked : target.value;
}

function getErrorStrs(errors) {
  if (errors) {
    return errors.map(function (e) {
      if (e && e.message) {
        return e.message;
      }
      return e;
    });
  }
  return errors;
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

function flattenArray(arr) {
  return Array.prototype.concat.apply([], arr);
}

function mirror(obj) {
  return obj;
}

function hasRules(validate) {
  if (validate) {
    return validate.some(function (item) {
      return !!item.rules && item.rules.length;
    });
  }
  return false;
}

function startsWith(str, prefix) {
  return str.lastIndexOf(prefix, 0) === 0;
}

function getParams(ns, opt, cb) {
  var names = ns;
  var callback = cb;
  var options = opt;
  if (cb === undefined) {
    if (typeof names === 'function') {
      callback = names;
      options = {};
      names = undefined;
    } else if (Array.isArray(ns)) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
    } else {
      callback = options;
      options = names || {};
      names = undefined;
    }
  }
  return {
    names: names,
    callback: callback,
    options: options
  };
}

var NAME_KEY_SEP = '.';
var NAME_INDEX_OPEN_SEP = '[';

function getNameIfNested(str) {
  var keyIndex = str.indexOf(NAME_KEY_SEP);
  var arrayIndex = str.indexOf(NAME_INDEX_OPEN_SEP);

  var index = void 0;

  if (keyIndex === -1 && arrayIndex === -1) {
    return {
      name: str
    };
  } else if (keyIndex === -1) {
    index = arrayIndex;
  } else if (arrayIndex === -1) {
    index = keyIndex;
  } else {
    index = Math.min(keyIndex, arrayIndex);
  }

  return {
    name: str.slice(0, index),
    isNested: true
  };
}

function flatFieldNames(names) {
  var ret = {};
  names.forEach(function (n) {
    ret[getNameIfNested(n).name] = 1;
  });
  return Object.keys(ret);
}

function clearVirtualField(name, fields, fieldsMeta) {
  if (fieldsMeta[name] && fieldsMeta[name].virtual) {
    /* eslint no-loop-func:0 */
    Object.keys(fields).forEach(function (ok) {
      if (getNameIfNested(ok).name === name) {
        delete fields[ok];
      }
    });
  }
}

function getVirtualPaths(fieldsMeta) {
  var virtualPaths = {};
  Object.keys(fieldsMeta).forEach(function (name) {
    var leadingName = fieldsMeta[name].leadingName;
    if (leadingName && fieldsMeta[leadingName].virtual) {
      if (leadingName in virtualPaths) {
        virtualPaths[leadingName].push(name);
      } else {
        virtualPaths[leadingName] = [name];
      }
    }
  });
  return virtualPaths;
}

function normalizeValidateRules(validate, rules, validateTrigger) {
  var validateRules = validate.map(function (item) {
    var newItem = (0, _extends3['default'])({}, item, {
      trigger: item.trigger || []
    });
    if (typeof newItem.trigger === 'string') {
      newItem.trigger = [newItem.trigger];
    }
    return newItem;
  });
  if (rules) {
    validateRules.push({
      trigger: validateTrigger ? [].concat(validateTrigger) : [],
      rules: rules
    });
  }
  return validateRules;
}

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(1472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(458);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(465);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(292);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var appConfig = exports.appConfig = {
  DEV_MODE: true, // flag to fetch mock or real fetch

  api: {
    fakeEndPoint: 'api/somewhere'
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appConfig, 'appConfig', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/config/index.js');
}();

;

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.disconnectUser = disconnectUser;
exports.checkUserIsConnected = checkUserIsConnected;
exports.logUserIfNeeded = logUserIfNeeded;
exports.fetchUserInfoDataIfNeeded = fetchUserInfoDataIfNeeded;

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _config = __webpack_require__(579);

var _userInfosMock = __webpack_require__(1506);

var _userInfosMock2 = _interopRequireDefault(_userInfosMock);

var _getLocationOrigin = __webpack_require__(1507);

var _getLocationOrigin2 = _interopRequireDefault(_getLocationOrigin);

var _auth = __webpack_require__(209);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// --------------------------------
// CONSTANTS
// --------------------------------
var REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
var RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
var ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';

var REQUEST_LOG_USER = 'REQUEST_LOG_USER';
var RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
var ERROR_LOG_USER = 'ERROR_LOG_USER';

var CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';

var DISCONNECT_USER = 'DISCONNECT_USER';

// --------------------------------
// REDUCER
// --------------------------------
var initialState = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',

  token: null,
  isAuthenticated: false // authentication status (token based auth)
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = (0, _moment2.default)().format();

  switch (action.type) {

    case CHECK_IF_USER_IS_AUTHENTICATED:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: action.isAuthenticated,
        token: action.token || initialState.token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login: action.user && action.user.login ? action.user.login : initialState.login,
        firstname: action.user && action.user.firstname ? action.user.firstname : initialState.firstname,
        lastname: action.user && action.user.lastname ? action.user.lastname : initialState.firstname
      });

    case DISCONNECT_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname
      });

    // user login (get token and userInfo)
    case REQUEST_LOG_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isLogging: true
      });

    case RECEIVED_LOG_USER:
      var userLogged = action.payload.data;

      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: true,
        token: userLogged.token,
        id: userLogged.id,
        login: userLogged.login,
        firstname: userLogged.firstname,
        lastname: userLogged.lastname,
        isLogging: false
      });

    case ERROR_LOG_USER:
      return _extends({}, state, {
        actionTime: currentTime,
        isAuthenticated: false,
        isLogging: false
      });

    // not used right now:
    case REQUEST_USER_INFOS_DATA:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: true
      });

    case RECEIVED_USER_INFOS_DATA:
      var userInfos = action.payload.data;

      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname
      });

    case ERROR_USER_INFOS_DATA:
      return _extends({}, state, {
        actionTime: currentTime,
        isFetching: false
      });

    default:
      return state;
  }
};

exports.default = _default;

// --------------------------------
// ACTIONS CREATORS
// --------------------------------
//

/**
 *
 * set user isAuthenticated to false and clear all app localstorage:
 *
 * @export
 * @returns {action} action
 */

function disconnectUser() {
  _auth2.default.clearAllAppStorage();
  return { type: DISCONNECT_USER };
}

/**
 * 
 * check if user is connected by looking at locally stored 
 * - token
 * - user fonrmation
 * 
 * @export
 * @returns {action} action 
 */
function checkUserIsConnected() {
  var token = _auth2.default.getToken();
  var user = _auth2.default.getUserInfo();
  var checkUserHasId = function checkUserHasId(obj) {
    return obj && obj._id;
  };
  var isAuthenticated = token && checkUserHasId(user) ? true : false;

  return _extends({
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token: token
  }, user, {
    isAuthenticated: isAuthenticated
  });
}

/**
 *
 *  user login
 *
 * @param {string} login user login
 * @param {string} password usepasswordr 
 * @returns {Promise<any>} promised action
 */
function logUser(login, password) {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch) {
      var FETCH_TYPE, __SOME_LOGIN_API__, mockResult, url, method, headers, options;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              FETCH_TYPE = _config.appConfig.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
              __SOME_LOGIN_API__ = 'login';
              mockResult = _userInfosMock2.default; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)

              url = (0, _getLocationOrigin2.default)() + '/' + __SOME_LOGIN_API__;
              method = 'post';
              headers = {};
              options = {
                credentials: 'same-origin',
                data: {
                  login: login,
                  password: password
                }
              };

              // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)

              return _context.abrupt('return', dispatch({
                type: 'FETCH_MIDDLEWARE',
                fetch: {
                  // common props:
                  type: FETCH_TYPE,
                  actionTypes: {
                    request: REQUEST_LOG_USER,
                    success: RECEIVED_LOG_USER,
                    fail: ERROR_LOG_USER
                  },
                  // mock fetch props:
                  mockResult: mockResult,
                  // real fetch props:
                  url: url,
                  method: method,
                  headers: headers,
                  options: options
                }
              }));

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}
function logUserIfNeeded(email, password) {
  return function (dispatch, getState) {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }
    return Promise.resolve();
  };
}
function shouldLogUser(state) {
  var isLogging = state.userAuth.isLogging;
  if (isLogging) {
    return false;
  }
  return true;
}

/**
 * fetch user info
 *
 * NOTE: this shows a use-case of fetchMiddleware
 *@param {string} [id=''] user id
 * @returns {Promise<any>} returns fetch promise
 */
function fetchUserInfosData() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (dispatch) {
    var token = _auth2.default.getToken();
    var FETCH_TYPE = _config.appConfig.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';

    var mockResult = _userInfosMock2.default; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    var url = (0, _getLocationOrigin2.default)() + '/' + _config.appConfig.API.users + '/' + id;
    var method = 'get';
    var headers = { authorization: 'Bearer ' + token };
    var options = { credentials: 'same-origin' }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA
        },
        // mock fetch props:
        mockResult: mockResult,
        // real fetch props:
        url: url,
        method: method,
        headers: headers,
        options: options
      }
    });
  };
}

function fetchUserInfoDataIfNeeded() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return function (dispatch, getState) {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData(id));
    }
    return Promise.resolve();
  };
}

/**
 *
 * determine wether fetching should occur
 *
 * rules:
 * - should not fetch twice when already fetching
 * - ...more rules can be added
 *
 * @param {Immutable.Map} state all redux state (immutable state)
 * @returns {boolean} flag
 */
function shouldFetchUserInfoData(state) {
  var userInfos = state.userAuth;
  if (userInfos.isFetching) {
    return false;
  }
  return true;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(REQUEST_USER_INFOS_DATA, 'REQUEST_USER_INFOS_DATA', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RECEIVED_USER_INFOS_DATA, 'RECEIVED_USER_INFOS_DATA', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(ERROR_USER_INFOS_DATA, 'ERROR_USER_INFOS_DATA', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(REQUEST_LOG_USER, 'REQUEST_LOG_USER', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RECEIVED_LOG_USER, 'RECEIVED_LOG_USER', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(ERROR_LOG_USER, 'ERROR_LOG_USER', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(CHECK_IF_USER_IS_AUTHENTICATED, 'CHECK_IF_USER_IS_AUTHENTICATED', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(DISCONNECT_USER, 'DISCONNECT_USER', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(disconnectUser, 'disconnectUser', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(checkUserIsConnected, 'checkUserIsConnected', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(logUser, 'logUser', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(logUserIfNeeded, 'logUserIfNeeded', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(shouldLogUser, 'shouldLogUser', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(fetchUserInfosData, 'fetchUserInfosData', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(fetchUserInfoDataIfNeeded, 'fetchUserInfoDataIfNeeded', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(shouldFetchUserInfoData, 'shouldFetchUserInfoData', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mackentoch/GitProjects/react-redux-antdesign-webpack-starter/src/app/redux/modules/userAuth.js');
}();

;

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(75);

__webpack_require__(1654);

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(1655);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(1656);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

_button2['default'].Group = _buttonGroup2['default'];
exports['default'] = _button2['default'];
module.exports = exports['default'];

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__(623);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(624);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Row = _row2['default'];
exports.Col = _col2['default'];

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Row = function (_React$Component) {
    (0, _inherits3['default'])(Row, _React$Component);

    function Row() {
        (0, _classCallCheck3['default'])(this, Row);
        return (0, _possibleConstructorReturn3['default'])(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Row, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                justify = _a.justify,
                align = _a.align,
                className = _a.className,
                gutter = _a.gutter,
                style = _a.style,
                children = _a.children,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-row' : _a$prefixCls,
                others = __rest(_a, ["type", "justify", "align", "className", "gutter", "style", "children", "prefixCls"]);
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, !type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
            var rowStyle = gutter > 0 ? (0, _extends3['default'])({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
            var cols = _react.Children.map(children, function (col) {
                if (!col) {
                    return null;
                }
                if (col.props && gutter > 0) {
                    return (0, _react.cloneElement)(col, {
                        style: (0, _extends3['default'])({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, col.props.style)
                    });
                }
                return col;
            });
            return _react2['default'].createElement(
                'div',
                (0, _extends3['default'])({}, others, { className: classes, style: rowStyle }),
                cols
            );
        }
    }]);
    return Row;
}(_react2['default'].Component);

exports['default'] = Row;

Row.defaultProps = {
    gutter: 0
};
Row.propTypes = {
    type: _propTypes2['default'].string,
    align: _propTypes2['default'].string,
    justify: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    gutter: _propTypes2['default'].number,
    prefixCls: _propTypes2['default'].string
};
module.exports = exports['default'];

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(12);

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = __webpack_require__(84);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var stringOrNumber = _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]);
var objectOrNumber = _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].number]);

var Col = function (_React$Component) {
    (0, _inherits3['default'])(Col, _React$Component);

    function Col() {
        (0, _classCallCheck3['default'])(this, Col);
        return (0, _possibleConstructorReturn3['default'])(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var span = props.span,
                order = props.order,
                offset = props.offset,
                push = props.push,
                pull = props.pull,
                className = props.className,
                children = props.children,
                _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
                others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);

            var sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
                var _extends2;

                var sizeProps = {};
                if (typeof props[size] === 'number') {
                    sizeProps.span = props[size];
                } else if ((0, _typeof3['default'])(props[size]) === 'object') {
                    sizeProps = props[size] || {};
                }
                delete others[size];
                sizeClassObj = (0, _extends4['default'])({}, sizeClassObj, (_extends2 = {}, (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _extends2));
            });
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + span, span !== undefined), (0, _defineProperty3['default'])(_classNames, prefixCls + '-order-' + order, order), (0, _defineProperty3['default'])(_classNames, prefixCls + '-offset-' + offset, offset), (0, _defineProperty3['default'])(_classNames, prefixCls + '-push-' + push, push), (0, _defineProperty3['default'])(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);
            return _react2['default'].createElement(
                'div',
                (0, _extends4['default'])({}, others, { className: classes }),
                children
            );
        }
    }]);
    return Col;
}(_react2['default'].Component);

exports['default'] = Col;

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: _propTypes2['default'].string,
    children: _propTypes2['default'].node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber
};
module.exports = exports['default'];

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = __webpack_require__(41);

var _omit2 = _interopRequireDefault(_omit);

var _TextArea = __webpack_require__(626);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var Input = function (_Component) {
    (0, _inherits3['default'])(Input, _Component);

    function Input() {
        (0, _classCallCheck3['default'])(this, Input);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));

        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Input, [{
        key: 'focus',
        value: function focus() {
            this.refs.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.refs.input.blur();
        }
    }, {
        key: 'getInputClassName',
        value: function getInputClassName() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                disabled = _props.disabled;

            return (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-disabled', disabled), _classNames));
        }
    }, {
        key: 'renderLabeledInput',
        value: function renderLabeledInput(children) {
            var props = this.props;
            // Not wrap when there is not addons
            if (!props.addonBefore && !props.addonAfter) {
                return children;
            }
            var wrapperClassName = props.prefixCls + '-group';
            var addonClassName = wrapperClassName + '-addon';
            var addonBefore = props.addonBefore ? _react2['default'].createElement(
                'span',
                { className: addonClassName },
                props.addonBefore
            ) : null;
            var addonAfter = props.addonAfter ? _react2['default'].createElement(
                'span',
                { className: addonClassName },
                props.addonAfter
            ) : null;
            var className = (0, _classnames2['default'])(props.prefixCls + '-wrapper', (0, _defineProperty3['default'])({}, wrapperClassName, addonBefore || addonAfter));
            // Need another wrapper for changing display:table to display:inline-block
            // and put style prop in wrapper
            if (addonBefore || addonAfter) {
                return _react2['default'].createElement(
                    'span',
                    { className: props.prefixCls + '-group-wrapper', style: props.style },
                    _react2['default'].createElement(
                        'span',
                        { className: className },
                        addonBefore,
                        (0, _react.cloneElement)(children, { style: null }),
                        addonAfter
                    )
                );
            }
            return _react2['default'].createElement(
                'span',
                { className: className },
                addonBefore,
                children,
                addonAfter
            );
        }
    }, {
        key: 'renderLabeledIcon',
        value: function renderLabeledIcon(children) {
            var props = this.props;

            if (!('prefix' in props || 'suffix' in props)) {
                return children;
            }
            var prefix = props.prefix ? _react2['default'].createElement(
                'span',
                { className: props.prefixCls + '-prefix' },
                props.prefix
            ) : null;
            var suffix = props.suffix ? _react2['default'].createElement(
                'span',
                { className: props.prefixCls + '-suffix' },
                props.suffix
            ) : null;
            return _react2['default'].createElement(
                'span',
                { className: (0, _classnames2['default'])(props.className, props.prefixCls + '-affix-wrapper'), style: props.style },
                prefix,
                (0, _react.cloneElement)(children, { style: null, className: this.getInputClassName() }),
                suffix
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _props2 = this.props,
                value = _props2.value,
                className = _props2.className;
            // Fix https://fb.me/react-unknown-prop

            var otherProps = (0, _omit2['default'])(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
            if ('value' in this.props) {
                otherProps.value = fixControlledValue(value);
                // Input elements must be either controlled or uncontrolled,
                // specify either the value prop, or the defaultValue prop, but not both.
                delete otherProps.defaultValue;
            }
            return this.renderLabeledIcon(_react2['default'].createElement('input', (0, _extends3['default'])({}, otherProps, { className: (0, _classnames2['default'])(this.getInputClassName(), className), onKeyDown: this.handleKeyDown, ref: 'input' })));
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.type === 'textarea') {
                return _react2['default'].createElement(_TextArea2['default'], (0, _extends3['default'])({}, this.props, { ref: 'input' }));
            }
            return this.renderLabeledInput(this.renderInput());
        }
    }]);
    return Input;
}(_react.Component);

exports['default'] = Input;

Input.defaultProps = {
    prefixCls: 'ant-input',
    type: 'text',
    disabled: false
};
Input.propTypes = {
    type: _propTypes2['default'].string,
    id: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    size: _propTypes2['default'].oneOf(['small', 'default', 'large']),
    disabled: _propTypes2['default'].bool,
    value: _propTypes2['default'].any,
    defaultValue: _propTypes2['default'].any,
    className: _propTypes2['default'].string,
    addonBefore: _propTypes2['default'].node,
    addonAfter: _propTypes2['default'].node,
    prefixCls: _propTypes2['default'].string,
    autosize: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].object]),
    onPressEnter: _propTypes2['default'].func,
    onKeyDown: _propTypes2['default'].func,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func,
    prefix: _propTypes2['default'].node,
    suffix: _propTypes2['default'].node
};
module.exports = exports['default'];

/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(12);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(13);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(11);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _omit = __webpack_require__(41);

var _omit2 = _interopRequireDefault(_omit);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _calculateNodeHeight = __webpack_require__(1672);

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

var TextArea = function (_React$Component) {
    (0, _inherits3['default'])(TextArea, _React$Component);

    function TextArea() {
        (0, _classCallCheck3['default'])(this, TextArea);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(this, arguments));

        _this.state = {
            textareaStyles: null
        };
        _this.resizeTextarea = function () {
            var autosize = _this.props.autosize;

            if (!autosize || !_this.textAreaRef) {
                return;
            }
            var minRows = autosize ? autosize.minRows : null;
            var maxRows = autosize ? autosize.maxRows : null;
            var textareaStyles = (0, _calculateNodeHeight2['default'])(_this.textAreaRef, false, minRows, maxRows);
            _this.setState({ textareaStyles: textareaStyles });
        };
        _this.handleTextareaChange = function (e) {
            if (!('value' in _this.props)) {
                _this.resizeTextarea();
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(e);
            }
        };
        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.saveTextAreaRef = function (textArea) {
            _this.textAreaRef = textArea;
        };
        return _this;
    }

    (0, _createClass3['default'])(TextArea, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.resizeTextarea();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // Re-render with the new content then recalculate the height as required.
            if (this.props.value !== nextProps.value) {
                if (this.nextFrameActionId) {
                    clearNextFrameAction(this.nextFrameActionId);
                }
                this.nextFrameActionId = onNextFrame(this.resizeTextarea);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.textAreaRef.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.textAreaRef.blur();
        }
    }, {
        key: 'getTextAreaClassName',
        value: function getTextAreaClassName() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                disabled = _props.disabled;

            return (0, _classnames2['default'])(prefixCls, className, (0, _defineProperty3['default'])({}, prefixCls + '-disabled', disabled));
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var otherProps = (0, _omit2['default'])(props, ['prefixCls', 'onPressEnter', 'autosize']);
            var style = (0, _extends3['default'])({}, props.style, this.state.textareaStyles);
            // Fix https://github.com/ant-design/ant-design/issues/6776
            // Make sure it could be reset when using form.getFieldDecorator
            if ('value' in otherProps) {
                otherProps.value = otherProps.value || '';
            }
            return _react2['default'].createElement('textarea', (0, _extends3['default'])({}, otherProps, { className: this.getTextAreaClassName(), style: style, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: this.saveTextAreaRef }));
        }
    }]);
    return TextArea;
}(_react2['default'].Component);

exports['default'] = TextArea;

TextArea.defaultProps = {
    prefixCls: 'ant-input'
};
module.exports = exports['default'];

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(630);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(222);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(632);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(22);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _asyncValidator = __webpack_require__(635);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _warning = __webpack_require__(31);

var _warning2 = _interopRequireDefault(_warning);

var _get = __webpack_require__(224);

var _get2 = _interopRequireDefault(_get);

var _has = __webpack_require__(145);

var _has2 = _interopRequireDefault(_has);

var _set = __webpack_require__(225);

var _set2 = _interopRequireDefault(_set);

var _createFieldsStore = __webpack_require__(1758);

var _createFieldsStore2 = _interopRequireDefault(_createFieldsStore);

var _utils = __webpack_require__(333);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DEFAULT_TRIGGER = 'onChange';

function createBaseForm() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var mapPropsToFields = option.mapPropsToFields,
      onFieldsChange = option.onFieldsChange,
      onValuesChange = option.onValuesChange,
      fieldNameProp = option.fieldNameProp,
      fieldMetaProp = option.fieldMetaProp,
      validateMessages = option.validateMessages,
      _option$mapProps = option.mapProps,
      mapProps = _option$mapProps === undefined ? _utils.mirror : _option$mapProps,
      _option$formPropName = option.formPropName,
      formPropName = _option$formPropName === undefined ? 'form' : _option$formPropName,
      withRef = option.withRef;


  function decorate(WrappedComponent) {
    var Form = (0, _createReactClass2['default'])({
      displayName: 'Form',

      mixins: mixins,

      getInitialState: function getInitialState() {
        var _this = this;

        var fields = mapPropsToFields && mapPropsToFields(this.props);
        this.fieldsStore = (0, _createFieldsStore2['default'])(fields || {});

        this.instances = {};
        this.cachedBind = {};
        // HACK: https://github.com/ant-design/ant-design/issues/6406
        ['getFieldsValue', 'getFieldValue', 'setFieldsInitialValue', 'getFieldsError', 'getFieldError', 'isFieldValidating', 'isFieldsValidating', 'isFieldsTouched', 'isFieldTouched'].forEach(function (key) {
          return _this[key] = function () {
            var _fieldsStore;

            (0, _warning2['default'])(false, 'you should not use `ref` on enhanced form, please use `wrappedComponentRef`. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
            return (_fieldsStore = _this.fieldsStore)[key].apply(_fieldsStore, arguments);
          };
        });

        return {
          submitting: false
        };
      },
      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (mapPropsToFields) {
          this.fieldsStore.replaceFields(mapPropsToFields(nextProps));
        }
      },
      onCollectCommon: function onCollectCommon(name_, action, args) {
        var name = name_;
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta[action]) {
          fieldMeta[action].apply(fieldMeta, (0, _toConsumableArray3['default'])(args));
        } else if (fieldMeta.originalProps && fieldMeta.originalProps[action]) {
          var _fieldMeta$originalPr;

          (_fieldMeta$originalPr = fieldMeta.originalProps)[action].apply(_fieldMeta$originalPr, (0, _toConsumableArray3['default'])(args));
        }
        var value = fieldMeta.getValueFromEvent ? fieldMeta.getValueFromEvent.apply(fieldMeta, (0, _toConsumableArray3['default'])(args)) : _utils.getValueFromEvent.apply(undefined, (0, _toConsumableArray3['default'])(args));
        if (onValuesChange && value !== this.fieldsStore.getFieldValue(name)) {
          onValuesChange(this.props, (0, _set2['default'])({}, name, value));
        }
        var nameKeyObj = (0, _utils.getNameIfNested)(name);
        if (this.fieldsStore.getFieldMeta(nameKeyObj.name).exclusive) {
          name = nameKeyObj.name;
        }
        var field = this.fieldsStore.getField(name);
        return { name: name, field: (0, _extends3['default'])({}, field, { value: value, touched: true }), fieldMeta: fieldMeta };
      },
      onCollect: function onCollect(name_, action) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        var _onCollectCommon = this.onCollectCommon(name_, action, args),
            name = _onCollectCommon.name,
            field = _onCollectCommon.field,
            fieldMeta = _onCollectCommon.fieldMeta;

        var validate = fieldMeta.validate;

        var fieldContent = (0, _extends3['default'])({}, field, {
          dirty: (0, _utils.hasRules)(validate)
        });
        this.setFields((0, _defineProperty3['default'])({}, name, fieldContent));
      },
      onCollectValidate: function onCollectValidate(name_, action) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        var _onCollectCommon2 = this.onCollectCommon(name_, action, args),
            field = _onCollectCommon2.field,
            fieldMeta = _onCollectCommon2.fieldMeta;

        var fieldContent = (0, _extends3['default'])({}, field, {
          dirty: true
        });
        this.validateFieldsInternal([fieldContent], {
          action: action,
          options: {
            firstFields: !!fieldMeta.validateFirst
          }
        });
      },
      getCacheBind: function getCacheBind(name, action, fn) {
        var cache = this.cachedBind[name] = this.cachedBind[name] || {};
        if (!cache[action]) {
          cache[action] = fn.bind(this, name, action);
        }
        return cache[action];
      },
      getFieldDecorator: function getFieldDecorator(name, fieldOption) {
        var _this2 = this;

        var props = this.getFieldProps(name, fieldOption);
        return function (fieldElem) {
          var fieldMeta = _this2.fieldsStore.getFieldMeta(name);
          var originalProps = fieldElem.props;
          if (true) {
            var valuePropName = fieldMeta.valuePropName;
            (0, _warning2['default'])(!(valuePropName in originalProps), '`getFieldDecorator` will override `' + valuePropName + '`, ' + ('so please don\'t set `' + valuePropName + '` directly ') + 'and use `setFieldsValue` to set it.');
            var defaultValuePropName = 'default' + valuePropName[0].toUpperCase() + valuePropName.slice(1);
            (0, _warning2['default'])(!(defaultValuePropName in originalProps), '`' + defaultValuePropName + '` is invalid ' + ('for `getFieldDecorator` will set `' + valuePropName + '`,') + ' please use `option.initialValue` instead.');
          }
          fieldMeta.originalProps = originalProps;
          fieldMeta.ref = fieldElem.ref;
          return _react2['default'].cloneElement(fieldElem, (0, _extends3['default'])({}, props, _this2.fieldsStore.getFieldValuePropValue(fieldMeta)));
        };
      },
      getFieldProps: function getFieldProps(name) {
        var _this3 = this;

        var usersFieldOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!name) {
          throw new Error('Must call `getFieldProps` with valid name string!');
        }

        var nameIfNested = (0, _utils.getNameIfNested)(name);
        var leadingName = nameIfNested.name;
        var fieldOption = (0, _extends3['default'])({
          valuePropName: 'value',
          validate: [],
          trigger: DEFAULT_TRIGGER,
          leadingName: leadingName,
          name: name
        }, usersFieldOption);

        var rules = fieldOption.rules,
            trigger = fieldOption.trigger,
            _fieldOption$validate = fieldOption.validateTrigger,
            validateTrigger = _fieldOption$validate === undefined ? trigger : _fieldOption$validate,
            exclusive = fieldOption.exclusive,
            validate = fieldOption.validate;


        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if ('initialValue' in fieldOption) {
          fieldMeta.initialValue = fieldOption.initialValue;
        }

        var leadingFieldMeta = this.fieldsStore.getFieldMeta(leadingName);
        if (nameIfNested.isNested) {
          leadingFieldMeta.virtual = !exclusive;
          // exclusive allow getFieldProps('x', {initialValue})
          // non-exclusive does not allow getFieldProps('x', {initialValue})
          leadingFieldMeta.hidden = !exclusive;
          leadingFieldMeta.exclusive = exclusive;
        }

        var inputProps = (0, _extends3['default'])({}, this.fieldsStore.getFieldValuePropValue(fieldOption), {
          ref: this.getCacheBind(name, name + '__ref', this.saveRef)
        });
        if (fieldNameProp) {
          inputProps[fieldNameProp] = name;
        }

        var validateRules = (0, _utils.normalizeValidateRules)(validate, rules, validateTrigger);
        var validateTriggers = validateRules.filter(function (item) {
          return !!item.rules && item.rules.length;
        }).map(function (item) {
          return item.trigger;
        }).reduce(function (pre, curr) {
          return pre.concat(curr);
        }, []);
        validateTriggers.forEach(function (action) {
          if (inputProps[action]) return;
          inputProps[action] = _this3.getCacheBind(name, action, _this3.onCollectValidate);
        });

        // make sure that the value will be collect
        if (trigger && validateTriggers.indexOf(trigger) === -1) {
          inputProps[trigger] = this.getCacheBind(name, trigger, this.onCollect);
        }

        var meta = (0, _extends3['default'])({}, fieldMeta, fieldOption, {
          validate: validateRules
        });
        this.fieldsStore.setFieldMeta(name, meta);
        if (fieldMetaProp) {
          inputProps[fieldMetaProp] = meta;
        }

        return inputProps;
      },
      getFieldInstance: function getFieldInstance(name) {
        return this.instances[name];
      },
      getRules: function getRules(fieldMeta, action) {
        var actionRules = fieldMeta.validate.filter(function (item) {
          return !action || item.trigger.indexOf(action) >= 0;
        }).map(function (item) {
          return item.rules;
        });
        return (0, _utils.flattenArray)(actionRules);
      },
      setFields: function setFields(fields) {
        var _this4 = this;

        this.fieldsStore.setFields(fields);
        if (onFieldsChange) {
          var changedFields = {};
          Object.keys(fields).forEach(function (f) {
            changedFields[f] = _this4.fieldsStore.getField(f);
          });
          onFieldsChange(this.props, changedFields);
        }
        this.forceUpdate();
      },
      resetFields: function resetFields(ns) {
        var newFields = this.fieldsStore.resetFields(ns);
        if (Object.keys(newFields).length > 0) {
          this.setFields(newFields);
        }
      },
      setFieldsValue: function setFieldsValue(fieldsValue) {
        if (onValuesChange) {
          onValuesChange(this.props, fieldsValue);
        }
        var newFields = {};
        var _fieldsStore2 = this.fieldsStore,
            fieldsMeta = _fieldsStore2.fieldsMeta,
            fields = _fieldsStore2.fields;

        var virtualPaths = (0, _utils.getVirtualPaths)(fieldsMeta);
        Object.keys(fieldsValue).forEach(function (name) {
          var value = fieldsValue[name];
          if (fieldsMeta[name] && fieldsMeta[name].virtual) {
            (0, _utils.clearVirtualField)(name, fields, fieldsMeta);
            for (var i = 0, len = virtualPaths[name].length; i < len; i++) {
              var path = virtualPaths[name][i];
              if ((0, _has2['default'])(fieldsValue, path)) {
                newFields[path] = {
                  name: path,
                  value: (0, _get2['default'])(fieldsValue, path)
                };
              }
            }
          } else if (fieldsMeta[name]) {
            newFields[name] = {
              name: name,
              value: value
            };
          } else {
            (0, _warning2['default'])(false, 'Cannot use `setFieldsValue` until ' + 'you use `getFieldDecorator` or `getFieldProps` to register it.');
          }
        });
        this.setFields(newFields);
      },
      saveRef: function saveRef(name, _, component) {
        if (!component) {
          // after destroy, delete data
          this.fieldsStore.clearField(name);
          delete this.instances[name];
          delete this.cachedBind[name];
          return;
        }
        var fieldMeta = this.fieldsStore.getFieldMeta(name);
        if (fieldMeta) {
          var ref = fieldMeta.ref;
          if (ref) {
            if (typeof ref === 'string') {
              throw new Error('can not set ref string for ' + name);
            }
            ref(component);
          }
        }
        this.instances[name] = component;
      },
      validateFieldsInternal: function validateFieldsInternal(fields, _ref, callback) {
        var _this5 = this;

        var fieldNames = _ref.fieldNames,
            action = _ref.action,
            _ref$options = _ref.options,
            options = _ref$options === undefined ? {} : _ref$options;

        var allRules = {};
        var allValues = {};
        var allFields = {};
        var alreadyErrors = {};
        fields.forEach(function (field) {
          var name = field.name;
          if (options.force !== true && field.dirty === false) {
            if (field.errors) {
              (0, _set2['default'])(alreadyErrors, name, { errors: field.errors });
            }
            return;
          }
          var fieldMeta = _this5.fieldsStore.getFieldMeta(name);
          var newField = (0, _extends3['default'])({}, field);
          newField.errors = undefined;
          newField.validating = true;
          newField.dirty = true;
          allRules[name] = _this5.getRules(fieldMeta, action);
          allValues[name] = newField.value;
          allFields[name] = newField;
        });
        this.setFields(allFields);
        // in case normalize
        Object.keys(allValues).forEach(function (f) {
          allValues[f] = _this5.fieldsStore.getFieldValue(f);
        });
        if (callback && (0, _utils.isEmptyObject)(allFields)) {
          callback((0, _utils.isEmptyObject)(alreadyErrors) ? null : alreadyErrors, this.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
          return;
        }
        var validator = new _asyncValidator2['default'](allRules);
        if (validateMessages) {
          validator.messages(validateMessages);
        }
        validator.validate(allValues, options, function (errors) {
          var errorsGroup = (0, _extends3['default'])({}, alreadyErrors);
          if (errors && errors.length) {
            errors.forEach(function (e) {
              var fieldName = e.field;
              if (!(0, _has2['default'])(errorsGroup, fieldName)) {
                (0, _set2['default'])(errorsGroup, fieldName, { errors: [] });
              }
              var fieldErrors = (0, _get2['default'])(errorsGroup, fieldName.concat('.errors'));
              fieldErrors.push(e);
            });
          }
          var expired = [];
          var nowAllFields = {};
          Object.keys(allRules).forEach(function (name) {
            var fieldErrors = (0, _get2['default'])(errorsGroup, name);
            var nowField = _this5.fieldsStore.getField(name);
            // avoid concurrency problems
            if (nowField.value !== allValues[name]) {
              expired.push({
                name: name
              });
            } else {
              nowField.errors = fieldErrors && fieldErrors.errors;
              nowField.value = allValues[name];
              nowField.validating = false;
              nowField.dirty = false;
              nowAllFields[name] = nowField;
            }
          });
          _this5.setFields(nowAllFields);
          if (callback) {
            if (expired.length) {
              expired.forEach(function (_ref2) {
                var name = _ref2.name;

                var fieldErrors = [{
                  message: name + ' need to revalidate',
                  field: name
                }];
                (0, _set2['default'])(errorsGroup, name, {
                  expired: true,
                  errors: fieldErrors
                });
              });
            }

            callback((0, _utils.isEmptyObject)(errorsGroup) ? null : errorsGroup, _this5.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
          }
        });
      },
      validateFields: function validateFields(ns, opt, cb) {
        var _this6 = this;

        var _getParams = (0, _utils.getParams)(ns, opt, cb),
            names = _getParams.names,
            callback = _getParams.callback,
            options = _getParams.options;

        var fieldNames = names || this.fieldsStore.getValidFieldsName();
        var fields = fieldNames.filter(function (name) {
          var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
          return (0, _utils.hasRules)(fieldMeta.validate);
        }).map(function (name) {
          var field = _this6.fieldsStore.getField(name);
          field.value = _this6.fieldsStore.getFieldValue(name);
          return field;
        });
        if (!fields.length) {
          if (callback) {
            callback(null, this.fieldsStore.getFieldsValue((0, _utils.flatFieldNames)(fieldNames)));
          }
          return;
        }
        if (!('firstFields' in options)) {
          options.firstFields = fieldNames.filter(function (name) {
            var fieldMeta = _this6.fieldsStore.getFieldMeta(name);
            return !!fieldMeta.validateFirst;
          });
        }
        this.validateFieldsInternal(fields, {
          fieldNames: fieldNames,
          options: options
        }, callback);
      },
      isSubmitting: function isSubmitting() {
        return this.state.submitting;
      },
      submit: function submit(callback) {
        var _this7 = this;

        var fn = function fn() {
          _this7.setState({
            submitting: false
          });
        };
        this.setState({
          submitting: true
        });
        callback(fn);
      },
      render: function render() {
        var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            restProps = (0, _objectWithoutProperties3['default'])(_props, ['wrappedComponentRef']);

        var formProps = (0, _defineProperty3['default'])({}, formPropName, this.getForm());
        function innerestWrappedComponentRef() {
          if (wrappedComponentRef && !innerestWrappedComponentRef.called) {
            wrappedComponentRef.apply(undefined, arguments);
            innerestWrappedComponentRef.called = true;
          }
        }
        if (withRef) {
          (0, _warning2['default'])(false, '`withRef` is deprecated, please use `wrappedComponentRef` instead. ' + 'See: https://github.com/react-component/form#note-use-wrappedcomponentref-instead-of-withref-after-rc-form140');
          formProps.ref = 'wrappedComponent';
        } else if (wrappedComponentRef) {
          formProps.ref = innerestWrappedComponentRef;
        }
        var props = mapProps.call(this, (0, _extends3['default'])({}, formProps, restProps, {
          wrappedComponentRef: innerestWrappedComponentRef
        }));
        return _react2['default'].createElement(WrappedComponent, props);
      }
    });

    return (0, _utils.argumentContainer)(Form, WrappedComponent);
  }

  return decorate;
}

exports['default'] = createBaseForm;
module.exports = exports['default'];

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentWithPureRenderMixin
 */

var shallowEqual = __webpack_require__(168);

function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

/**
 * If your React component's render function is "pure", e.g. it will render the
 * same result given the same props and state, provide this mixin for a
 * considerable performance boost.
 *
 * Most React components have pure render functions.
 *
 * Example:
 *
 *   var ReactComponentWithPureRenderMixin =
 *     require('ReactComponentWithPureRenderMixin');
 *   React.createClass({
 *     mixins: [ReactComponentWithPureRenderMixin],
 *
 *     render: function() {
 *       return <div className={this.props.className}>foo</div>;
 *     }
 *   });
 *
 * Note: This only checks shallow equality for props and state. If these contain
 * complex data structures this mixin may have false-negatives for deeper
 * differences. Only mixin to components which have simple props and state, or
 * use `forceUpdate()` when you know deep data structures have changed.
 *
 * See https://facebook.github.io/react/docs/pure-render-mixin.html
 */
var ReactComponentWithPureRenderMixin = {
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
};

module.exports = ReactComponentWithPureRenderMixin;

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FIELD_META_PROP = exports.FIELD_META_PROP = 'data-__meta';

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[1150]);
//# sourceMappingURL=app.bundle.js.map