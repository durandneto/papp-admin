'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _combineReducers;

var _redux = require('redux');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _ListUsers = require('./ListUsers');

var _ListUsers2 = _interopRequireDefault(_ListUsers);

var _ListLanguages = require('./ListLanguages');

var _ListLanguages2 = _interopRequireDefault(_ListLanguages);

var _ListTopics = require('./ListTopics');

var _ListTopics2 = _interopRequireDefault(_ListTopics);

var _ListUserGroups = require('./ListUserGroups');

var _ListUserGroups2 = _interopRequireDefault(_ListUserGroups);

var _ListUserJoinedGroups = require('./ListUserJoinedGroups');

var _ListUserJoinedGroups2 = _interopRequireDefault(_ListUserJoinedGroups);

var _ListPlatforms = require('./ListPlatforms');

var _ListPlatforms2 = _interopRequireDefault(_ListPlatforms);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = (0, _redux.combineReducers)((_combineReducers = {
  header: _header2.default,
  UserAdmin: _User2.default,
  ListPlatforms: _ListPlatforms2.default,
  ListUserGroups: _ListUserGroups2.default
}, _defineProperty(_combineReducers, 'ListUserGroups', _ListUserGroups2.default), _defineProperty(_combineReducers, 'ListTopics', _ListTopics2.default), _defineProperty(_combineReducers, 'ListLanguages', _ListLanguages2.default), _defineProperty(_combineReducers, 'ListUsers', _ListUsers2.default), _combineReducers));

exports.default = reducer;