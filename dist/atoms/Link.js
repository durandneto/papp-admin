'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./../actions');

var Actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link(props) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

    _this._onMouseEnter = _this._onMouseEnter.bind(_this);
    _this._onMouseLeave = _this._onMouseLeave.bind(_this);

    _this.state = {
      class: 'normal'
    };
    return _this;
  }

  _createClass(Link, [{
    key: '_onMouseEnter',
    value: function _onMouseEnter() {
      this.setState({ class: 'hovered' });
    }
  }, {
    key: '_onMouseLeave',
    value: function _onMouseLeave() {
      this.setState({ class: 'normal' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          change_name = _props.change_name,
          header = _props.header;


      return _react2.default.createElement(
        'a',
        {
          className: this.state.class,
          href: this.props.page || '#',
          onClick: change_name.bind(this, ' | Durand', 35),
          onMouseEnter: this._onMouseEnter,
          onMouseLeave: this._onMouseLeave },
        this.props.children,
        ' ',
        header.get('name'),
        ' ',
        header.get('age')
      );
    }
  }]);

  return Link;
}(_react.Component);

function mapStateToProps(state) {
  return {
    header: state.header
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Actions, dispatch);
}

exports.Link = Link;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Link);