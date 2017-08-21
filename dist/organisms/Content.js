'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'show-grid' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 2 },
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { bsStyle: 'pills', stacked: true, activeKey: this.props.location.pathname.split('/')[1] },
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: '' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Dashboard'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 'users' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/users' },
                'Users'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 'languages' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/languages' },
                'Languages'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 'groups' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/groups' },
                'Groups'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 'topics' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/topics' },
                'Topics'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 'platforms' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/platforms' },
                'Platforms'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.NavItem,
              { eventKey: 'reports' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/reports' },
                'Reports'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { md: 10 },
          this.props.children
        )
      );
    }
  }]);

  return Content;
}(_react.Component);

exports.Content = Content;
exports.default = Content;