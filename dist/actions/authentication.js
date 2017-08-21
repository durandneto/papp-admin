'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGOUT = exports.USER_AUTHENTICATED_ERROR = exports.SET_USER_ADMIN = exports.AUTHENTICATED = undefined;
exports.set_user_admin = set_user_admin;
exports.logout = logout;
exports.authenticate = authenticate;

var _api = require('./../middleware/api');

var _reactRouter = require('react-router');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* User */
var AUTHENTICATED = exports.AUTHENTICATED = Symbol('AUTHENTICATED');
var SET_USER_ADMIN = exports.SET_USER_ADMIN = Symbol('SET_USER_ADMIN');
var USER_AUTHENTICATED_ERROR = exports.USER_AUTHENTICATED_ERROR = Symbol('USER_AUTHENTICATED_ERROR');
var LOGOUT = exports.LOGOUT = Symbol('LOGOUT');

function set_user_admin(user) {
  return {
    type: SET_USER_ADMIN,
    user: user
  };
}
function logout(user) {
  return {
    type: LOGOUT
  };
}
function authenticate() {
  return function (dispatch, getState) {
    var user = {
      email: getState().UserAdmin.get('email'),
      password: getState().UserAdmin.get('password')
    };
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: user,
        path: '/user/authenticate',
        successType: AUTHENTICATED,
        errorType: USER_AUTHENTICATED_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}