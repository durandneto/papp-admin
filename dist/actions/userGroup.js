'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_MEMBER_SEARCH_TERM = exports.NEW_MEMBER = exports.DELETED_ERROR = exports.UPDATE_SEARCH_TERM = exports.DELETED = exports.UPDATED = exports.SET_PAGE_TYPE = exports.UPDATED_ERROR = exports.CREATED_NEW_MEMBER_ERROR = exports.CREATED_NEW_MEMBER = exports.CREATED_NEW_ERROR = exports.CREATED_NEW = exports.NEW = exports.CREATTING_NEW = exports.SET_MEMBER_PAGE_TYPE = exports.SET_PAGE = exports.SEARCHED_MEMBERS_COUNT = exports.SEARCHED_MEMBERS = exports.SEARCHED_COUNT = exports.SEARCHED = exports.SELECT = undefined;
exports.joinGroup = joinGroup;
exports.set_page = set_page;
exports.fetch_members = fetch_members;
exports.fetch = fetch;
exports.is_saving = is_saving;
exports.select = select;
exports.update_member_search_term = update_member_search_term;
exports.update_search_term = update_search_term;
exports.new_member_row = new_member_row;
exports.new_row = new_row;
exports.set_member_page_type = set_member_page_type;
exports.set_page_type = set_page_type;
exports.join_new_member = join_new_member;
exports.create_new = create_new;
exports.remove_member = remove_member;
exports.remove = remove;
exports.update = update;

var _api = require('./../middleware/api');

var _reactRouter = require('react-router');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SELECT = exports.SELECT = Symbol('SELECT');
var SEARCHED = exports.SEARCHED = Symbol('SEARCHED');
var SEARCHED_COUNT = exports.SEARCHED_COUNT = Symbol('SEARCHED_COUNT');
var SEARCHED_MEMBERS = exports.SEARCHED_MEMBERS = Symbol('SEARCHED_MEMBERS');
var SEARCHED_MEMBERS_COUNT = exports.SEARCHED_MEMBERS_COUNT = Symbol('SEARCHED_MEMBERS_COUNT');
var SET_PAGE = exports.SET_PAGE = Symbol('SET_PAGE');
var SET_MEMBER_PAGE_TYPE = exports.SET_MEMBER_PAGE_TYPE = Symbol('SET_MEMBER_PAGE_TYPE');
var CREATTING_NEW = exports.CREATTING_NEW = Symbol('CREATTING_NEW');
var NEW = exports.NEW = Symbol('NEW');
var CREATED_NEW = exports.CREATED_NEW = Symbol('CREATED_NEW');
var CREATED_NEW_ERROR = exports.CREATED_NEW_ERROR = Symbol('CREATED_NEW_ERROR');
var CREATED_NEW_MEMBER = exports.CREATED_NEW_MEMBER = Symbol('CREATED_NEW_MEMBER');
var CREATED_NEW_MEMBER_ERROR = exports.CREATED_NEW_MEMBER_ERROR = Symbol('CREATED_NEW_MEMBER_ERROR');
var UPDATED_ERROR = exports.UPDATED_ERROR = Symbol('UPDATED_ERROR');
var SET_PAGE_TYPE = exports.SET_PAGE_TYPE = Symbol('SET_PAGE_TYPE');
var UPDATED = exports.UPDATED = Symbol('UPDATED');
var DELETED = exports.DELETED = Symbol('DELETED');
var UPDATE_SEARCH_TERM = exports.UPDATE_SEARCH_TERM = Symbol('UPDATE_SEARCH_TERM');
var DELETED_ERROR = exports.DELETED_ERROR = Symbol('DELETED_ERROR');
var NEW_MEMBER = exports.NEW_MEMBER = Symbol('NEW_MEMBER');
var UPDATE_MEMBER_SEARCH_TERM = exports.UPDATE_MEMBER_SEARCH_TERM = Symbol('UPDATE_MEMBER_SEARCH_TERM');

function joinGroup() {
  return function (dispatch, getState) {
    var selectedRow = getState().ListUserGroups.get('selectedRow');
    var path = getState().ListUserGroups.get('path');
    _reactRouter.browserHistory.push(path + '/' + selectedRow.get('id') + '/join');
  };
}
function set_page(page, allowNavigation) {
  return function (dispatch) {
    dispatch({
      type: SET_PAGE,
      page: page,
      allowNavigation: allowNavigation
    });
  };
}
function fetch_members(action) {

  return function (dispatch, getState) {

    var userJoinedGroup = getState().ListUserJoinedGroups;
    var group = getState().ListUserGroups.get('selectedRow');

    console.log(userJoinedGroup, group);

    var limit = userJoinedGroup.get('paginator').get('limitPerPage');
    var total = userJoinedGroup.get('paginator').get('totalPage');
    var page = userJoinedGroup.get('paginator').get('currentPage');
    var term = userJoinedGroup.get('searchTerm');
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

    if (search) {
      dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/user/group/' + group.get('id') + '/members?limit=' + limit + '&page=' + page + '&name=' + term,
          successType: SEARCHED_MEMBERS
        });
      }, function (response) {

        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/user/group/' + group.get('id') + '/members/count?name=' + term,
          successType: SEARCHED_MEMBERS_COUNT

        });
      }]));
      dispatch(set_page(page, allowNavigation));
    } else {
      dispatch(set_page(1, allowNavigation));
    }
  };
}
function fetch(userGroups, action) {

  var limit = userGroups.get('paginator').get('limitPerPage');
  var total = userGroups.get('paginator').get('totalPage');
  var page = userGroups.get('paginator').get('currentPage');
  var term = userGroups.get('searchTerm');
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
          path: '/user/group/search?limit=' + limit + '&page=' + page + '&name=' + term,
          successType: SEARCHED
        });
      }, function (response) {

        return _defineProperty({}, _api.CALL_API, {
          method: 'get',
          type: 'external',
          path: '/user/group/count?name=' + term,
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
function update_member_search_term(term) {
  return {
    type: UPDATE_MEMBER_SEARCH_TERM,
    term: term
  };
}
function update_search_term(term) {
  return {
    type: UPDATE_SEARCH_TERM,
    term: term
  };
}
function new_member_row(newRow) {
  console.log(newRow);
  return {
    type: NEW_MEMBER,
    newRow: newRow
  };
}
function new_row(newRow) {
  console.log(newRow);
  return {
    type: NEW,
    newRow: newRow
  };
}
function set_member_page_type(param) {
  return {
    type: SET_MEMBER_PAGE_TYPE,
    param: param
  };
}
function set_page_type(param) {
  return {
    type: SET_PAGE_TYPE,
    param: param
  };
}
function join_new_member(userGroup) {
  return function (dispatch, getState) {
    var group = getState().ListUserGroups.get('selectedRow');
    var newRow = getState().ListUserJoinedGroups.get('newRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: newRow.toObject(),
        path: '/user/group/' + group.get('id') + '/join',
        successType: CREATED_NEW_MEMBER,
        errorType: CREATED_NEW_MEMBER_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}
function create_new(userGroup) {
  return function (dispatch, getState) {
    var newRow = getState().ListUserGroups.get('newRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'post',
        type: 'external',
        body: newRow.toObject(),
        path: '/user/group/save',
        successType: CREATED_NEW,
        errorType: CREATED_NEW_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}
function remove_member(userGroup) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListUserGroups.get('selectedRow');
    /*
    dispatch(is_saving(true))
    dispatch({
      [CHAIN_API]: [
          ()=> {
            return {
              [CALL_API]: {
                method: 'delete',
                type : 'external',
                path: '/user/group/remove/'+selectedRow.get('id'),
                header: { 'api-key-papp': selectedRow.get('id')},
                successType: DELETED,
                errorType: DELETED_ERROR
              }
            }
          }, (response) => {
            window.location.href = '/groups'
          }
        ]
    })
     */
  };
}
function remove(userGroup) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListUserGroups.get('selectedRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'delete',
        type: 'external',
        path: '/user/group/remove/' + selectedRow.get('id'),
        header: { 'api-key-papp': selectedRow.get('id') },
        successType: DELETED,
        errorType: DELETED_ERROR
      });
    }, function (response) {
      window.location.href = '/groups';
    }]));
  };
}
function update(userGroup) {
  return function (dispatch, getState) {
    var selectedRow = getState().ListUserGroups.get('selectedRow');
    dispatch(is_saving(true));
    dispatch(_defineProperty({}, _api.CHAIN_API, [function () {
      return _defineProperty({}, _api.CALL_API, {
        method: 'put',
        type: 'external',
        body: {
          id: selectedRow.get('id'),
          name: selectedRow.get('name'),
          description: selectedRow.get('description'),
          location: selectedRow.get('location'),
          topics: selectedRow.get('topics'),
          link: selectedRow.get('link'),
          user: selectedRow.get('user').get('id'),
          platform: selectedRow.get('platform').get('id'),
          userLanguage: selectedRow.get('userLanguage').get('id')
        },
        path: '/user/group/update',
        header: { 'api-key-papp': selectedRow.get('id') },
        successType: UPDATED,
        errorType: UPDATED_ERROR
      });
    }, function (response) {
      console.log(response);
    }]));
  };
}