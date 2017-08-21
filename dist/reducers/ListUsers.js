'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('../actions');

var _user = require('../actions/user');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _immutable2.default.fromJS({
	path: 'users',
	data: {
		rows: [],
		columns: []
	},
	searchTerm: '',
	isLoadded: false,
	visualizationType: 'view',
	isSavingUser: false,
	title: {
		edit: { title: 'Edit User' },
		remove: { title: 'Remove User?' },
		view: { title: 'User Detail' },
		new: { title: 'New User' }
	},
	paginator: {
		count: 0,
		totalPage: 0,
		currentPage: 1,
		limitPerPage: 10,
		allowNavigation: {
			next: true,
			prev: true
		}
	},
	newUser: {
		name: undefined,
		email: undefined,
		password: undefined
	},
	lastUser: {
		name: undefined,
		email: undefined,
		id: -1
	},
	selectedUser: {
		name: undefined,
		email: undefined,
		id: -1
	},
	status: {
		type: undefined,
		message: undefined
	}
});

function appReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _user.USER_SET_PAGE:
			return state.mergeDeep({
				paginator: {
					currentPage: action.page,
					allowNavigation: action.allowNavigation
				}
			});
			// eslint-disable-next-line
			break;
		case _user.CREATTING_NEW_USER:
			return state.mergeDeep({ isSavingUser: true });
			// eslint-disable-next-line
			break;
		case _user.SET_USER_PAGE_TYPE:
			return state.merge({ visualizationType: action.param });
			// eslint-disable-next-line
			break;
		case _user.UPDATED_USER:
			return state.merge({ visualizationType: 'view' });
			// eslint-disable-next-line
			break;
		case _user.NEW_USER:
			return state.merge({ newUser: action.user });
			// eslint-disable-next-line
			break;
		case _user.SELECT_USER:
			return state.merge({ selectedUser: action.user });
			// eslint-disable-next-line
			breakt - disable - next - line;
			break;
		case _user.UPDATE_SEARCH_TERM:
			return state.merge({ searchTerm: action.term });
			// eslint-disable-next-line
			break;
		case _user.CREATED_NEW_USER:

			var keys = Object.keys(state.get('newUser').toObject());
			var resetUser = {};

			keys.map(function (key) {
				resetUser[key] = undefined;
			});

			return state.merge({
				isSavingUser: false,
				status: { type: action.status, message: undefined },
				newUser: resetUser,
				lastUser: action.response.user
			});
			// eslint-disable-next-line
			break;
		case _user.CREATED_NEW_USER_ERROR:
			return state.merge({
				isSavingUser: false,
				status: {
					type: action.status,
					message: action.message
				}
			});
			//eslint-disable-next-line
			break;
		case _actions.HIDE_MESSAGE:
			return state.merge({
				status: {
					type: undefined,
					message: undefined
				}
			});
			//eslint-disable-next-line
			break;
		case _user.SEARCHED_USER:
			var columns = undefined;
			var rows = undefined;
			if (action.response.users.length > 0) {
				columns = Object.keys(action.response.users[0]);
				rows = action.response.users;
			}
			return state.merge({
				data: {
					columns: columns,
					rows: rows
				},
				isLoadded: true
			});
			// eslint-disable-next-line
			break;
		case _user.SEARCHED_USER_COUNT:
			return state.mergeDeep({
				paginator: {
					count: action.response.count,
					totalPage: Math.ceil(action.response.count / state.get('paginator').get('limitPerPage'))
				}
			});
			// eslint-disable-next-line
			break;
		default:
			return state;
	}
}

exports.default = appReducer;