'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _actions = require('../actions');

var _platform = require('../actions/platform');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _immutable2.default.fromJS({
	path: '/platforms',
	data: {
		rows: [],
		columns: []
	},
	searchTerm: '',
	isLoadded: false,
	visualizationType: 'view',
	isSaving: false,
	title: {
		edit: { title: 'Edit Platform' },
		remove: { title: 'Remove Platform?' },
		view: { title: 'Platform Detail' },
		new: { title: 'New Platform' }
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
	newRow: {
		name: null,
		user: {
			id: null
		}
	},
	lastRow: {
		name: null,
		id: -1,
		user: {
			id: null
		}
	},
	selectedRow: {
		name: null,
		id: -1,
		user: {
			id: null
		}
	},
	status: {
		type: null,
		message: null
	}
});

function appReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	switch (action.type) {
		case _platform.SET_PAGE:
			return state.mergeDeep({
				paginator: {
					currentPage: action.page,
					allowNavigation: action.allowNavigation
				}
			});
			// eslint-disable-next-line
			break;
		case _platform.CREATTING_NEW:
			return state.mergeDeep({ isSaving: true });
			// eslint-disable-next-line
			break;
		case _platform.SET_PAGE_TYPE:
			return state.merge({ visualizationType: action.param });
			// eslint-disable-next-line
			break;
		case _platform.UPDATED:
			return state.merge({ visualizationType: 'view' });
			// eslint-disable-next-line
			break;
		case _platform.NEW:
			console.log(action.newRow);
			return state.merge({ newRow: action.newRow });
			// eslint-disable-next-line
			break;
		case _platform.SELECT:
			console.log(action.selectedRow);
			return state.merge({ selectedRow: action.selectedRow });
			// eslint-disable-next-line
			break;
		case _platform.UPDATE_SEARCH_TERM:
			return state.merge({ searchTerm: action.term });
			// eslint-disable-next-line
			break;
		case _platform.CREATED_NEW:

			var keys = Object.keys(state.get('newRow').toObject());
			var resetRow = {};

			keys.map(function (key) {
				resetRow[key] = null;
			});
			resetRow.user = { id: null };

			return state.merge({
				isSaving: false,
				status: { type: action.status, message: null },
				newRow: resetRow,
				lastRow: action.response.row
			});
			// eslint-disable-next-line
			break;
		case _platform.CREATED_NEW_ERROR:
			return state.merge({
				isSaving: false,
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
					type: null,
					message: null
				}
			});
			//eslint-disable-next-line
			break;
		case _platform.SEARCHED:
			var columns = null;
			var rows = null;
			if (action.response.rows.length > 0) {
				columns = Object.keys(action.response.rows[0]);
				rows = action.response.rows;
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
		case _platform.SEARCHED_COUNT:
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