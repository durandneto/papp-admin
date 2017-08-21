'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewUserGroup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactBootstrap = require('react-bootstrap');

var _actions = require('./../../actions');

var Actions = _interopRequireWildcard(_actions);

var _userGroup = require('./../../actions/userGroup');

var UserGroupActions = _interopRequireWildcard(_userGroup);

var _UserGroup = require('./../../organisms/forms/UserGroup');

var _UserGroup2 = _interopRequireDefault(_UserGroup);

var _TableAction = require('./../../organisms/TableAction');

var _TableAction2 = _interopRequireDefault(_TableAction);

var _Home = require('./../../pages/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewUserGroup = function (_Component) {
  _inherits(NewUserGroup, _Component);

  function NewUserGroup() {
    _classCallCheck(this, NewUserGroup);

    return _possibleConstructorReturn(this, (NewUserGroup.__proto__ || Object.getPrototypeOf(NewUserGroup)).apply(this, arguments));
  }

  _createClass(NewUserGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.hide_message();
      //if ( !this.props.ListUserJoinedGroups.get('isLoadded') )
      this.props.fetch_members();
    }
  }, {
    key: '_search',
    value: function _search() {
      this.props.fetch_members('search');
    }
  }, {
    key: '_add',
    value: function _add() {
      //this.props.set_page_type('new')
      this.props.go(this.props.ListUserGroups.get('path') + '/join');
    }
  }, {
    key: '_view',
    value: function _view(row) {
      //this.props.select(row)
      //this.props.set_page_type('view')
      this.props.go(this.props.ListUserJoinedGroups.get('path') + '/' + row.get('id'));
    }
  }, {
    key: '_remove',
    value: function _remove(row) {
      //this.props.select(row)
      //this.props.set_page_type('remove')
      this.props.go(this.props.ListUserJoinedGroups.get('path') + '/' + row.get('id'));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _Home2.default,
        {
          header: this.props.header,
          show_mobile_menu: this.props.show_mobile_menu },
        _react2.default.createElement(_UserGroup2.default, {
          reducer: this.props.ListUserGroups,

          row: this.props.ListUserGroups.get('selectedRow'),
          status: this.props.ListUserGroups.get('status'),
          joinGroup: this.props.joinGroup,

          hide_message: this.props.hide_message,
          save: this.props.select,
          set_page_type: this.props.set_page_type,
          submit: this.props.update,
          remove: this.props.remove
        }),
        _react2.default.createElement(
          'h1',
          null,
          'Members'
        ),
        _react2.default.createElement(_TableAction2.default, {
          view: this._view,
          add: this.props.joinGroup,
          search: this._search.bind(this),
          remove: this._remove,
          updateSearchTerm: this.props.update_member_search_term,
          columns: this.props.ListUserJoinedGroups.get('data').get('columns'),
          rows: this.props.ListUserJoinedGroups.get('data').get('rows'),
          paginator: this.props.ListUserJoinedGroups.get('paginator') })
      );
    }
  }]);

  return NewUserGroup;
}(_react.Component);

function mapStateToProps(state) {
  return {
    header: state.header,
    ListUserGroups: state.ListUserGroups,
    ListUserJoinedGroups: state.ListUserJoinedGroups
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(Object.assign(Actions, UserGroupActions), dispatch);
}

exports.NewUserGroup = NewUserGroup;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(NewUserGroup);