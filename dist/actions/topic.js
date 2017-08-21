'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_UPLOAD_TOPIC_AVATAR = exports.DELETED_ERROR = exports.UPDATE_SEARCH_TERM = exports.DELETED = exports.UPDATED = exports.SET_PAGE_TYPE = exports.UPDATED_ERROR = exports.CREATED_NEW_ERROR = exports.CREATED_NEW = exports.NEW = exports.CREATTING_NEW = exports.SET_PAGE = exports.SEARCHED_COUNT = exports.SEARCHED = exports.SELECT = undefined;
exports.set_page = set_page;
exports.set_avatar_topic = set_avatar_topic;
exports.fetch = fetch;
exports.is_saving = is_saving;
exports.select = select;
exports.update_search_term = update_search_term;
exports.new_row = new_row;
exports.set_page_type = set_page_type;
exports.create_new = create_new;
exports.remove = remove;
exports.update = update;

var _api = require('./../middleware/api');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SELECT = exports.SELECT = Symbol('SELECT');
var SEARCHED = exports.SEARCHED = Symbol('SEARCHED');
var SEARCHED_COUNT = exports.SEARCHED_COUNT = Symbol('SEARCHED_COUNT');
var SET_PAGE = exports.SET_PAGE = Symbol('SET_PAGE');
var CREATTING_NEW = exports.CREATTING_NEW = Symbol('CREATTING_NEW');
var NEW = exports.NEW = Symbol('NEW');
var CREATED_NEW = exports.CREATED_NEW = Symbol('CREATED_NEW');
var CREATED_NEW_ERROR = exports.CREATED_NEW_ERROR = Symbol('CREATED_NEW_ERROR');
var UPDATED_ERROR = exports.UPDATED_ERROR = Symbol('UPDATED_ERROR');
var SET_PAGE_TYPE = exports.SET_PAGE_TYPE = Symbol('SET_PAGE_TYPE');
var UPDATED = exports.UPDATED = Symbol('UPDATED');
var DELETED = exports.DELETED = Symbol('DELETED');
var UPDATE_SEARCH_TERM = exports.UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM');
var DELETED_ERROR = exports.DELETED_ERROR = Symbol('DELETED_ERROR');
var SET_UPLOAD_TOPIC_AVATAR = exports.SET_UPLOAD_TOPIC_AVATAR = Symbol('SET_UPLOAD_TOPIC_AVATAR');

function set_page(page, allowNavigation) {
  return function (dispatch) {
    dispatch({
      type: SET_PAGE,
      page: page,
      allowNavigation: allowNavigation
    });
  };
}

function set_avatar_topic(file) {
  console.log('set_avatar_topicset_avatar_topicset_avatar_topicset_avatar_topicset_avatar_topicset_avatar_topicset_avatar_topicset_avatar_topic');
  return {
    type: SET_UPLOAD_TOPIC_AVATAR,
    file: file
  };
}

function fetch(topics, action) {

  var limit = topics.get('paginator').get('limitPerPage');
  var total = topics.get('paginator').get('totalPage');
  var page = topics.get('paginator').get('currentPage');
  var term = topics.get('searchTerm');
  var search = true;
  var allowNavigation = {
    next: true,
    prev: false
  };

  switch (true) {
    case action === 'next':
      allowNavigation.prev = page < total;
      page++;
      allowNavigation.next = page < total;
      search = page <= total;
      break;
    case action === 'prev':
      page--;
      allowNavigation.next = page <= total;
      allowNavigation.prev = page > 1;
      search = page >= 1;
      break;
      // eslint-disable-next-line
      search = page !== total;
    case action === 'first':

      page = 1;
      search = page !== total;
      if (search) {
        allowNavigation.prev = false;
        allowNavigation.next = true;
      } else {
        allowNavigation.prev = false;
        allowNavigation.next = false;
      }

      break;
    case action === 'last':
      search = page !== total;
      if (search) {
        page = total;
        allowNavigation.prev = true;
        allowNavigation.next = false;
      } else {
        allowNavigation.prev = false;
        allowNavigation.next = false;
      }

      break;
    case action === 'search':
      page = 1;
      break;
    default:
  }

  return function (dispatch) {

    if (search) {
      dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/topic/search?limit=' + limit + '&page=' + page + '&name=' + term,
          successType: SEARCHED
        });
      }, function (response) {

        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/topic/count?name=' + term,
          successType: SEARCHED_COUNT

        });
      }]));
      dispatch(set_page(page, allowNavigation));
    } else {
      dispatch(set_page(1, allowNavigation));
    }
  };
}
function is_saving(isSaving) {
  return {
    type: CREATTING_NEW,
    isSaving: isSaving
  };
}
function select(selectedRow) {

  return function (dispatch) {
    dispatch({
      type: SELECT,
      selectedRow: selectedRow
    });
  };
}
function update_search_term(term) {
  return {
    type: UPDATE_SEARCH_TERM,
    term: term
  };
}
function new_row(newRow) {
  return {
    type: NEW,
    newRow: newRow
  };
}
function set_page_type(param) {
  return {
    type: SET_PAGE_TYPE,
    param: param
  };
}
function create_new(topic) {
  return function (dispatch, getState) {
    var newRow = getState().ListTopics.get('newRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: newRow.toObject(),
        path: '/topic/save',
        successType: CREATED_NEW,
        errorType: CREATED_NEW_ERROR
      });
    }, function (response) {
      console.log('create_newcreate_newcreate_newcreate_newcreate_newcreate_newcreate_newcreate_new', getState().ListTopics.get('avatar').toJS());
      // user 58c6912d3733f428d048d0a9
      var formData = new FormData();
      formData.append('avatar', getState().ListTopics.get('avatar').toJS());
      formData.append('id', response.row.id);

      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: formData,
        path: '/topic/set-avatar'
      });
    }]));
  };
}
function remove(topic) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListTopics.get('selectedRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'delete',
        type: 'external',
        path: '/topic/remove/' + selectedRow.get('id'),
        header: { 'api-key-papp': selectedRow.get('id') },
        successType: DELETED,
        errorType: DELETED_ERROR
      });
    }, function (response) {
      window.location.href = '/topics';
    }]));
  };
}

function update(topic) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListTopics.get('selectedRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'put',
        type: 'external',
        body: { id: selectedRow.get('id'), name: selectedRow.get('name'), color: selectedRow.get('color'), user: selectedRow.get('user').get('id') },
        path: '/topic/update',
        header: { 'api-key-papp': selectedRow.get('id') },
        successType: UPDATED,
        errorType: UPDATED_ERROR
      });
    }, function (response) {
      console.log('update topic.jsx', response.row.id);
    }]));
  };
}