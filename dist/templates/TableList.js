'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableActionTemplate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Header = require('./../organisms/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('./../organisms/Content');

var _Content2 = _interopRequireDefault(_Content);

var _TableAction = require('./../organisms/TableAction');

var _TableAction2 = _interopRequireDefault(_TableAction);

var _Footer = require('./../organisms/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _SimpleBreadcrumb = require('./../organisms/SimpleBreadcrumb');

var _SimpleBreadcrumb2 = _interopRequireDefault(_SimpleBreadcrumb);

var _Detail = require('./../organisms/Detail');

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableActionTemplate = function (_Component) {
  _inherits(TableActionTemplate, _Component);

  function TableActionTemplate() {
    _classCallCheck(this, TableActionTemplate);

    return _possibleConstructorReturn(this, (TableActionTemplate.__proto__ || Object.getPrototypeOf(TableActionTemplate)).apply(this, arguments));
  }

  _createClass(TableActionTemplate, [{
    key: '_callback',
    value: function _callback(type) {
      var _props = this.props,
          reducer = _props.reducer,
          callback = _props.callback;


      callback(reducer, type);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          reducer = _props2.reducer,
          header = _props2.header,
          show_mobile_menu = _props2.show_mobile_menu,
          location = _props2.location,
          User = _props2.User;


      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { fluid: true },
        _react2.default.createElement(_Header2.default, { data: header, show_mobile_menu: show_mobile_menu, User: User }),
        _react2.default.createElement(
          _Content2.default,
          { location: location },
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 12 },
              _react2.default.createElement(_SimpleBreadcrumb2.default, { location: location })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 12 },
              _react2.default.createElement(_TableAction2.default, {
                view: this.props.view,
                add: this.props.add,
                updateSearchTerm: this.props.updateSearchTerm,
                search: this.props.search,
                remove: this.props.remove,
                path: reducer.get('path'),
                columns: reducer.get('data').get('columns'),
                rows: reducer.get('data').get('rows'),
                callback: this._callback.bind(this),
                paginator: reducer.get('paginator') })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 12 },
              _react2.default.createElement(_Detail2.default, {
                type: 'user' })
            )
          ),
          this.props.children
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return TableActionTemplate;
}(_react.Component);

exports.TableActionTemplate = TableActionTemplate;
exports.default = TableActionTemplate;