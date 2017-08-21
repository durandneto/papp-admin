'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableListTemplate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Header = require('./../organisms/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('./../organisms/Content');

var _Content2 = _interopRequireDefault(_Content);

var _SimpleTable = require('./../organisms/SimpleTable');

var _SimpleTable2 = _interopRequireDefault(_SimpleTable);

var _Footer = require('./../organisms/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableListTemplate = function (_Component) {
  _inherits(TableListTemplate, _Component);

  function TableListTemplate() {
    _classCallCheck(this, TableListTemplate);

    return _possibleConstructorReturn(this, (TableListTemplate.__proto__ || Object.getPrototypeOf(TableListTemplate)).apply(this, arguments));
  }

  _createClass(TableListTemplate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          show_mobile_menu = _props.show_mobile_menu,
          users = _props.users;

      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { fluid: true },
        _react2.default.createElement(_Header2.default, { data: header, show_mobile_menu: show_mobile_menu }),
        _react2.default.createElement(
          _Content2.default,
          null,
          _react2.default.createElement(_SimpleTable2.default, { data: users })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return TableListTemplate;
}(_react.Component);

exports.TableListTemplate = TableListTemplate;
exports.default = TableListTemplate;