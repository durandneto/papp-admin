'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETED_USER_ERROR = exports.UPDATE_SEARCH_TERM = exports.DELETED_USER = exports.UPDATED_USER = exports.SET_USER_PAGE_TYPE = exports.UPDATED_USER_ERROR = exports.CREATED_NEW_USER_ERROR = exports.CREATED_NEW_USER = exports.NEW_USER = exports.CREATTING_NEW_USER = exports.USER_SET_PAGE = exports.SEARCHED_USER_COUNT = exports.SEARCHED_USER = exports.SELECT_USER = undefined;
exports.user_set_page = user_set_page;
exports.teste = teste;
exports.fetch_users = fetch_users;
exports.is_saving_user = is_saving_user;
exports.select_user = select_user;
exports.update_search_term = update_search_term;
exports.new_user = new_user;
exports.set_user_page_type = set_user_page_type;
exports.create_new_user = create_new_user;
exports.remove_user = remove_user;
exports.update_user = update_user;

var _api = require('./../middleware/api');

var _reactRouter = require('react-router');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* User */
var SELECT_USER = exports.SELECT_USER = Symbol('SELECT_USER');
var SEARCHED_USER = exports.SEARCHED_USER = Symbol('SEARCHED_USER');
var SEARCHED_USER_COUNT = exports.SEARCHED_USER_COUNT = Symbol('SEARCHED_USER_COUNT');
var USER_SET_PAGE = exports.USER_SET_PAGE = Symbol('USER_SET_PAGE');
var CREATTING_NEW_USER = exports.CREATTING_NEW_USER = Symbol('CREATTING_NEW_USER');
var NEW_USER = exports.NEW_USER = Symbol('NEW_USER');
var CREATED_NEW_USER = exports.CREATED_NEW_USER = Symbol('CREATED_NEW_USER');
var CREATED_NEW_USER_ERROR = exports.CREATED_NEW_USER_ERROR = Symbol('CREATED_NEW_USER_ERROR');
var UPDATED_USER_ERROR = exports.UPDATED_USER_ERROR = Symbol('UPDATED_USER_ERROR');
var SET_USER_PAGE_TYPE = exports.SET_USER_PAGE_TYPE = Symbol('SET_USER_PAGE_TYPE');
var UPDATED_USER = exports.UPDATED_USER = Symbol('UPDATED_USER');
var DELETED_USER = exports.DELETED_USER = Symbol('DELETED_USER');
var UPDATE_SEARCH_TERM = exports.UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM');
var DELETED_USER_ERROR = exports.DELETED_USER_ERROR = Symbol('DELETED_USER_ERROR');

/* Users */
function user_set_page(page, allowNavigation) {
  return function (dispatch) {
    dispatch({
      type: USER_SET_PAGE,
      page: page,
      allowNavigation: allowNavigation
    });
  };
}

function teste() {
  return function (dispatch) {
    console.log('teste user');
  };
}

function fetch_users(users, action) {

  var limit = users.get('paginator').get('limitPerPage');
  var total = users.get('paginator').get('totalPage');
  var page = users.get('paginator').get('currentPage');
  var term = users.get('searchTerm');
  // let count = users.get('paginator').get('count')
  var search = true;
  var allowNavigation = {
    next: true,
    prev: false
  };

  console.log(term);

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
          path: '/user/search?limit=' + limit + '&page=' + page + '&name=' + term,
          successType: SEARCHED_USER
        });
      }, function (response) {

        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/user/count?name=' + term,
          successType: SEARCHED_USER_COUNT

        });
      }]));
      dispatch(user_set_page(page, allowNavigation));
    } else {
      dispatch(user_set_page(1, allowNavigation));
    }
  };
}
function is_saving_user(isSavingUser) {
  return {
    type: CREATTING_NEW_USER,
    isSavingUser: isSavingUser
  };
}
function select_user(user) {

  return function (dispatch) {
    // dispatch(set_user_page_type('view'))   
    dispatch({
      type: SELECT_USER,
      user: user
    });
  };
}
function update_search_term(term) {
  return {
    type: UPDATE_SEARCH_TERM,
    term: term
  };
}
function new_user(user) {
  return {
    type: NEW_USER,
    user: user
  };
}
function set_user_page_type(param) {
  return {
    type: SET_USER_PAGE_TYPE,
    param: param
  };
}
function create_new_user(user) {
  return function (dispatch, getState) {
    var newUser = getState().ListUsers.get('newUser');
    dispatch(is_saving_user(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: newUser.toObject(),
        path: '/user/save',
        successType: CREATED_NEW_USER,
        errorType: CREATED_NEW_USER_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}
function remove_user(user) {
  return function (dispatch, getState) {
    var selectedUser = getState().ListUsers.get('selectedUser');
    dispatch(is_saving_user(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'delete',
        type: 'external',
        path: '/user/remove',
        header: { 'api-key-papp': selectedUser.get('id') },
        successType: DELETED_USER,
        errorType: DELETED_USER_ERROR
      });
    }, function (response) {
      // go('/users')
      window.location.href = '/users';
      console.log(response);
    }]));
  };
}
function update_user(user) {
  return function (dispatch, getState) {
    var selectedUser = getState().ListUsers.get('selectedUser');
    dispatch(is_saving_user(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'put',
        type: 'external',
        body: selectedUser.toObject(),
        path: '/user/update',
        header: { 'api-key-papp': selectedUser.get('id') },
        successType: UPDATED_USER,
        errorType: UPDATED_USER_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}