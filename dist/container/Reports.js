'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reports = undefined;

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

var Reports = function (_Component) {
  _inherits(Reports, _Component);

  function Reports() {
    _classCallCheck(this, Reports);

    return _possibleConstructorReturn(this, (Reports.__proto__ || Object.getPrototypeOf(Reports)).apply(this, arguments));
  }

  _createClass(Reports, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TableList2.default, {
        columns: ['Id Report', 'Description', 'User Report', 'Group Reported'],
        data: [[99, 'report 1', 'Durand Neto', 'familia lima'], [567, 'report 2', 'Rodrigo', 'Rio de Janeiro - SP'], [345, 'report 3', 'Alice', 'Alice a Feia']],
        location: this.props.location,
        User: this.props.User,
        header: this.props.header,
        show_mobile_menu: this.props.show_mobile_menu });
    }
  }]);

  return Reports;
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

exports.Reports = Reports;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Reports);