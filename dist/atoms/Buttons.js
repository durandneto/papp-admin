'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSquad = exports.ButtonAncor = exports.ButtonFormSquad = exports.ButtonLinkTableHeader = exports.ButtonDefault = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var ButtonDefault = function (_Component) {
  _inherits(ButtonDefault, _Component);

  function ButtonDefault() {
    _classCallCheck(this, ButtonDefault);

    return _possibleConstructorReturn(this, (ButtonDefault.__proto__ || Object.getPrototypeOf(ButtonDefault)).apply(this, arguments));
  }

  _createClass(ButtonDefault, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          click = _props.click;


      return _react2.default.createElement(
        'span',
        { onClick: click },
        _react2.default.createElement('i', { className: 'fa fa-fw ' + icon })
      );
    }
  }]);

  return ButtonDefault;
}(_react.Component);

var ButtonLinkTableHeader = function (_ButtonDefault) {
  _inherits(ButtonLinkTableHeader, _ButtonDefault);

  function ButtonLinkTableHeader() {
    _classCallCheck(this, ButtonLinkTableHeader);

    return _possibleConstructorReturn(this, (ButtonLinkTableHeader.__proto__ || Object.getPrototypeOf(ButtonLinkTableHeader)).apply(this, arguments));
  }

  _createClass(ButtonLinkTableHeader, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          click = _props2.click,
          sortable = _props2.sortable;


      var className = sortable ? 'sortable' : '';

      return _react2.default.createElement(
        'span',
        { onClick: click },
        _react2.default.createElement(
          'div',
          { className: 'th-inner ' + sortable },
          label
        ),
        _react2.default.createElement('div', { className: 'fht-cell' })
      );
    }
  }]);

  return ButtonLinkTableHeader;
}(ButtonDefault);

var ButtonAncor = function (_ButtonDefault2) {
  _inherits(ButtonAncor, _ButtonDefault2);

  function ButtonAncor() {
    _classCallCheck(this, ButtonAncor);

    return _possibleConstructorReturn(this, (ButtonAncor.__proto__ || Object.getPrototypeOf(ButtonAncor)).apply(this, arguments));
  }

  _createClass(ButtonAncor, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          label = _props3.label,
          click = _props3.click,
          className = _props3.className;


      className = className ? className : '';

      return _react2.default.createElement(
        'a',
        { onClick: click, className: className },
        label
      );
    }
  }]);

  return ButtonAncor;
}(ButtonDefault);

var ButtonSquad = function (_ButtonDefault3) {
  _inherits(ButtonSquad, _ButtonDefault3);

  function ButtonSquad() {
    _classCallCheck(this, ButtonSquad);

    return _possibleConstructorReturn(this, (ButtonSquad.__proto__ || Object.getPrototypeOf(ButtonSquad)).apply(this, arguments));
  }

  _createClass(ButtonSquad, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          to = _props4.to,
          label = _props4.label,
          type = _props4.type,
          icon = _props4.icon;


      type = type ? type : 'default';
      icon = icon ? icon : '';

      return _react2.default.createElement(
        _reactRouter.Link,
        { to: to ? to : null, className: 'btn btn-' + type },
        icon ? _react2.default.createElement('i', { className: 'fa fa-fw -square -circle ' + icon }) : null,
        label
      );
    }
  }]);

  return ButtonSquad;
}(ButtonDefault);

var ButtonFormSquad = function (_ButtonDefault4) {
  _inherits(ButtonFormSquad, _ButtonDefault4);

  function ButtonFormSquad() {
    _classCallCheck(this, ButtonFormSquad);

    return _possibleConstructorReturn(this, (ButtonFormSquad.__proto__ || Object.getPrototypeOf(ButtonFormSquad)).apply(this, arguments));
  }

  _createClass(ButtonFormSquad, [{
    key: 'render',
    value: function render() {
      var _props5 = this.props,
          to = _props5.to,
          label = _props5.label,
          type = _props5.type,
          icon = _props5.icon,
          click = _props5.click,
          className = _props5.className;


      type = type ? type : 'default';
      icon = icon ? icon : '';
      className = className ? className : '';

      return _react2.default.createElement(
        'span',
        { onClick: click ? click : null, className: 'btn btn-' + type + ' ' + className },
        icon ? _react2.default.createElement('i', { className: 'fa fa-fw -square -circle ' + icon }) : null,
        label
      );
    }
  }]);

  return ButtonFormSquad;
}(ButtonDefault);

exports.ButtonDefault = ButtonDefault;
exports.ButtonLinkTableHeader = ButtonLinkTableHeader;
exports.ButtonFormSquad = ButtonFormSquad;
exports.ButtonAncor = ButtonAncor;
exports.ButtonSquad = ButtonSquad;
exports.default = ButtonDefault;