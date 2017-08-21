'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _authentication = require('../actions/authentication');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = {
  name: undefined,
  email: undefined,
  id: undefined,
  authenticationToken: undefined,
  isLogged: false,
  title: {
    error: { title: 'Authentiation failed' },
    view: { title: 'User Logged' },
    new: { title: 'Login User' }
  },
  visualizationType: 'new',
  status: {
    type: undefined,
    message: undefined
  }
};

var defaultState = _immutable2.default.fromJS(user);

function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _authentication.AUTHENTICATED:
      return state.mergeDeep({
        isLogged: true,
        authenticationToken: action.response.authenticationToken,
        email: action.response.user.email,
        name: action.response.user.name,
        id: action.response.user.id,
        visualizationType: 'view',
        status: {
          type: null,
          message: null
        }
      });
      break;
    case _authentication.SET_USER_ADMIN:
      return state.mergeDeep({
        email: action.user.email,
        password: action.user.password
      });
      break;
    case _authentication.LOGOUT:
      return state.merge(user);
      break;
    case _authentication.USER_AUTHENTICATED_ERROR:
      return state.mergeDeep({
        visualizationType: 'error',
        status: {
          type: action.status,
          message: action.message
        }
      });
      break;
    default:
      return state;
  }
}

exports.default = appReducer;