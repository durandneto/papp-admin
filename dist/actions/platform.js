'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETED_ERROR = exports.UPDATE_SEARCH_TERM = exports.DELETED = exports.UPDATED = exports.SET_PAGE_TYPE = exports.UPDATED_ERROR = exports.CREATED_NEW_ERROR = exports.CREATED_NEW = exports.NEW = exports.CREATTING_NEW = exports.SET_PAGE = exports.SEARCHED_COUNT = exports.SEARCHED = exports.SELECT = undefined;
exports.set_page = set_page;
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

function set_page(page, allowNavigation) {
  return function (dispatch) {
    dispatch({
      type: SET_PAGE,
      page: page,
      allowNavigation: allowNavigation
    });
  };
}
function fetch(platforms, action) {

  var limit = platforms.get('paginator').get('limitPerPage');
  var total = platforms.get('paginator').get('totalPage');
  var page = platforms.get('paginator').get('currentPage');
  var term = platforms.get('searchTerm');
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
          path: '/platform/search?limit=' + limit + '&page=' + page + '&name=' + term,
          successType: SEARCHED
        });
      }, function (response) {

        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/platform/count?name=' + term,
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
  console.log(newRow);
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
function create_new(platform) {
  return function (dispatch, getState) {
    var newRow = getState().ListPlatforms.get('newRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: newRow.toObject(),
        path: '/platform/save',
        successType: CREATED_NEW,
        errorType: CREATED_NEW_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}
function remove(platform) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListPlatforms.get('selectedRow');
    var user = getState().UserAdmin;
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'delete',
        type: 'external',
        path: '/platform/remove/' + selectedRow.get('id'),
        header: { 'api-key-papp': user.get('authenticationToken') },
        successType: DELETED,
        errorType: DELETED_ERROR
      });
    }, function (response) {
      window.location.href = '/platforms';
    }]));
  };
}
function update(platform) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListPlatforms.get('selectedRow');
    var user = getState().UserAdmin;
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'put',
        type: 'external',
        body: { id: selectedRow.get('id'), name: selectedRow.get('name') },
        path: '/platform/update',
        header: { 'api-key-papp': user.get('authenticationToken') },
        successType: UPDATED,
        errorType: UPDATED_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}