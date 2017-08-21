'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHOW_MOBILE_MENU = exports.HIDE_MESSAGE = exports.CAROUSEL_CURRENT = exports.CAROUSEL_NEXT = exports.CAROUSEL_PREV = exports.RESET_CAROUSEL = exports.CHANGE_NAME = undefined;
exports.go = go;
exports.show_mobile_menu = show_mobile_menu;
exports.hide_message = hide_message;
exports.carousel_next = carousel_next;
exports.carousel_prev = carousel_prev;
exports.carousel_set_current = carousel_set_current;

var _api = require('./../middleware/api');

var _reactRouter = require('react-router');

var CHANGE_NAME = exports.CHANGE_NAME = Symbol('CHANGE_NAME');
var RESET_CAROUSEL = exports.RESET_CAROUSEL = Symbol('RESET_CAROUSEL');
var CAROUSEL_PREV = exports.CAROUSEL_PREV = Symbol('CAROUSEL_PREV');
var CAROUSEL_NEXT = exports.CAROUSEL_NEXT = Symbol('CAROUSEL_NEXT');
var CAROUSEL_CURRENT = exports.CAROUSEL_CURRENT = Symbol('CAROUSEL_CURRENT');
var HIDE_MESSAGE = exports.HIDE_MESSAGE = Symbol('HIDE_MESSAGE');
var SHOW_MOBILE_MENU = exports.SHOW_MOBILE_MENU = Symbol('SHOW_MOBILE_MENU');

function go(path, returnUrl) {
  return function (dispatch) {
    if (returnUrl !== undefined && returnUrl !== '') _reactRouter.browserHistory.push(returnUrl);else _reactRouter.browserHistory.push(path);
  };
}
function show_mobile_menu() {

  return function (dispatch, getState) {
    var show = !getState().header.get('showMobileMenu');
    dispatch({
      type: SHOW_MOBILE_MENU,
      show: show
    });
  };
}

function hide_message() {
  return {
    type: HIDE_MESSAGE
  };
}

function carousel_next() {
  return function (dispatch, getState) {
    var stateNext = getState();
    var activeNext = stateNext.Carousel.get('active') + 1;

    if (activeNext >= stateNext.Carousel.get('img').toArray().length) {
      activeNext = 0;
    }
    dispatch(carousel_set_current(activeNext, 'next'));
  };
}
function carousel_prev() {
  return function (dispatch, getState) {
    var statePrev = getState();
    var activePrev = statePrev.Carousel.get('active') - 1;
    if (activePrev < 0) {
      activePrev = statePrev.Carousel.get('img').toArray().length - 1;
    }
    dispatch(carousel_set_current(activePrev, 'prev'));
  };
}
function carousel_set_current(current, action) {
  return function (dispatch, getState) {
    var active = getState().Carousel.get('active');
    if (active !== current) {
      dispatch({
        type: CAROUSEL_CURRENT,
        current: current,
        action: action
      });
    }
  };
}