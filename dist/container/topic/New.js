'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewTopic = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactBootstrap = require('react-bootstrap');

var _actions = require('./../../actions');

var Actions = _interopRequireWildcard(_actions);

var _topic = require('./../../actions/topic');

var TopicActions = _interopRequireWildcard(_topic);

var _Topic = require('./../../organisms/forms/Topic');

var _Topic2 = _interopRequireDefault(_Topic);

var _Home = require('./../../pages/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTopic = function (_Component) {
  _inherits(NewTopic, _Component);

  function NewTopic() {
    _classCallCheck(this, NewTopic);

    return _possibleConstructorReturn(this, (NewTopic.__proto__ || Object.getPrototypeOf(NewTopic)).apply(this, arguments));
  }

  _createClass(NewTopic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.set_page_type('new');
      this.props.hide_message();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Home2.default,
        {
          header: this.props.header,
          User: this.props.User,
          show_mobile_menu: this.props.show_mobile_menu },
        _react2.default.createElement(_Topic2.default, {
          reducer: this.props.ListTopics,

          row: this.props.ListTopics.get('newRow'),
          avatar: this.props.ListTopics.get('avatar'),
          lastRow: this.props.ListTopics.get('lastRow'),
          status: this.props.ListTopics.get('status'),

          hide_message: this.props.hide_message,
          save: this.props.new_row.bind(this),
          set_page_type: this.props.set_page_type,
          set_avatar_topic: this.props.set_avatar_topic,
          submit: this.props.create_new.bind(this),
          remove: this.props.remove.bind(this)
        })
      );
    }
  }]);

  return NewTopic;
}(_react.Component);

function mapStateToProps(state) {
  return {
    header: state.header,
    ListTopics: state.ListTopics,
    User: state.UserAdmin
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Object.assign(Actions, TopicActions), dispatch);
}

exports.NewTopic = NewTopic;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewTopic);