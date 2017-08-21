'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Groups = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./../actions');

var Actions = _interopRequireWildcard(_actions);

var _TableList = require('./../pages/TableList');

var _TableList2 = _interopRequireDefault(_TableList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Groups = function (_Component) {
  _inherits(Groups, _Component);

  function Groups() {
    _classCallCheck(this, Groups);

    return _possibleConstructorReturn(this, (Groups.__proto__ || Object.getPrototypeOf(Groups)).apply(this, arguments));
  }

  _createClass(Groups, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TableList2.default, {
        columns: ['Id Group', 'Title', 'Language'],
        data: [[1, 'grupo 1', 'EN'], [2, 'grupo 2', 'PT'], [3, 'grupo 3', 'EN']],
        location: this.props.location,
        header: this.props.header,
        User: this.props.User,
        show_mobile_menu: this.props.show_mobile_menu });
    }
  }]);

  return Groups;
}(_react.Component);

function mapStateToProps(state) {
  return {
    header: state.header,
    User: state.UserAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Actions, dispatch);
}

exports.Groups = Groups;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Groups);