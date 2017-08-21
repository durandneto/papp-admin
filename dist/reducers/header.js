'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('../actions');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _immutable2.default.fromJS({ showMobileMenu: false });

function appReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _actions.SHOW_MOBILE_MENU:
			return state.merge({ showMobileMenu: action.show });
			// eslint-disable-next-line
			break;
		default:
			return state;
	}
}

exports.default = appReducer;