'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _topic = require('../actions/topic');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = _immutable2.default.fromJS({
  path: '/topics',
  data: {
    rows: [],
    columns: []
  },
  searchTerm: '',
  isLoadded: false,
  visualizationType: 'view',
  isSaving: false,
  title: {
    edit: { title: 'Edit Topic' },
    remove: { title: 'Remove Topic?' },
    view: { title: 'Topic Detail' },
    new: { title: 'New Topic' }
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
    color: null,
    avatar: {
      file: {
        preview: null,
        name: null,
        size: null,
        type: null
      },

      uploadded: false,
      isUploadding: false
    },
    user: {
      id: null
    }
  },
  lastRow: {
    name: null,
    color: null,
    avatar: {
      file: {
        preview: null,
        name: null,
        size: null,
        type: null
      },

      uploadded: false,
      isUploadding: false
    },
    id: -1,
    user: {
      id: null
    }
  },
  selectedRow: {
    name: null,
    id: -1,
    color: null,
    avatar: {
      file: {
        preview: null,
        name: null,
        size: null,
        type: null
      },

      uploadded: false,
      isUploadding: false
    },
    user: {
      id: null
    }
  },
  status: {
    type: null,
    message: null
  },
  avatar: {}
});

function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case _topic.SET_PAGE:
      return state.mergeDeep({
        paginator: {
          currentPage: action.page,
          allowNavigation: action.allowNavigation
        }
      });
      // eslint-disable-next-line
      break;
    case _topic.CREATTING_NEW:
      return state.mergeDeep({ isSaving: true });
      // eslint-disable-next-line
      break;
    case _topic.SET_PAGE_TYPE:
      return state.merge({ visualizationType: action.param });
      // eslint-disable-next-line
      break;
    case _topic.UPDATED:
      return state.merge({ visualizationType: 'view' });
      // eslint-disable-next-line
      break;
    case _topic.NEW:
      return state.merge({ newRow: action.newRow });
      // eslint-disable-next-line
      break;
    case _topic.SELECT:
      return state.merge({ selectedRow: action.selectedRow });
      // eslint-disable-next-line
      break;
    case _topic.UPDATE_SEARCH_TERM:
      return state.merge({ searchTerm: action.term });
      // eslint-disable-next-line
      break;
    case _topic.CREATED_NEW:

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
    case _topic.CREATED_NEW_ERROR:
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
    case _topic.SET_UPLOAD_TOPIC_AVATAR:
      console.log(action.file);
      return state.mergeDeep({
        avatar: action.file
      });
      //eslint-disable-next-line
      break;
    case _topic.SEARCHED:
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
    case _topic.SEARCHED_COUNT:
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