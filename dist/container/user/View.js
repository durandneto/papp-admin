'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewUser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactBootstrap = require('react-bootstrap');

var _actions = require('./../../actions');

var Actions = _interopRequireWildcard(_actions);

var _user = require('./../../actions/user');

var UserActions = _interopRequireWildcard(_user);

var _User = require('./../../organisms/forms/User');

var _User2 = _interopRequireDefault(_User);

var _Home = require('./../../pages/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewUser = function (_Component) {
  _inherits(NewUser, _Component);

  function NewUser() {
    _classCallCheck(this, NewUser);

    return _possibleConstructorReturn(this, (NewUser.__proto__ || Object.getPrototypeOf(NewUser)).apply(this, arguments));
  }

  _createClass(NewUser, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.hide_message();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Home2.default,
        {
          header: this.props.header,
          show_mobile_menu: this.props.show_mobile_menu },
        _react2.default.createElement(_User2.default, {
          reducer: this.props.ListUsers,

          user: this.props.ListUsers.get('selectedUser'),
          status: this.props.ListUsers.get('status'),

          hide_message: this.props.hide_message,
          save: this.props.select_user.bind(this),
          set_page_type: this.props.set_user_page_type,
          submit: this.props.update_user.bind(this),
          remove: this.props.remove_user.bind(this)
        })
      );
    }
  }]);

  return NewUser;
}(_react.Component);

function mapStateToProps(state) {
  return {
    header: state.header,
    ListUsers: state.ListUsers
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Object.assign(Actions, UserActions), dispatch);
}

exports.NewUser = NewUser;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewUser);