'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Users = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./../../actions');

var Actions = _interopRequireWildcard(_actions);

var _user = require('./../../actions/user');

var UserActions = _interopRequireWildcard(_user);

var _TableList = require('./../../pages/TableList');

var _TableList2 = _interopRequireDefault(_TableList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_Component) {
	_inherits(Users, _Component);

	function Users() {
		_classCallCheck(this, Users);

		return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
	}

	_createClass(Users, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			//if ( !this.props.ListUsers.get('isLoadded') )
			this.props.fetch_users(this.props.ListUsers);
		}
	}, {
		key: '_search',
		value: function _search() {
			this.props.fetch_users(this.props.ListUsers, 'search');
		}
	}, {
		key: '_add',
		value: function _add() {
			this.props.set_user_page_type('new');
			this.props.go('/users/new');
		}
	}, {
		key: '_view',
		value: function _view(user) {
			this.props.select_user(user);
			this.props.set_user_page_type('view');
			this.props.go('/users/' + user.get('id'));
		}
	}, {
		key: '_remove',
		value: function _remove(user) {
			this.props.select_user(user);
			this.props.set_user_page_type('remove');
			this.props.go('/users/' + user.get('id'));
		}
	}, {
		key: 'render',
		value: function render() {
			this.props.teste();
			return _react2.default.createElement(_TableList2.default, {
				reducer: this.props.ListUsers,
				view: this._view.bind(this),
				add: this._add.bind(this),
				search: this._search.bind(this),
				updateSearchTerm: this.props.update_search_term.bind(this),
				remove: this._remove.bind(this),
				location: this.props.location,
				header: this.props.header,
				show_mobile_menu: this.props.show_mobile_menu,
				callback: this.props.fetch_users.bind(this)
			});
		}
	}]);

	return Users;
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

exports.Users = Users;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Users);