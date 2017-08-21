'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Languages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./../../actions');

var Actions = _interopRequireWildcard(_actions);

var _language = require('./../../actions/language');

var LanguageActions = _interopRequireWildcard(_language);

var _TableList = require('./../../pages/TableList');

var _TableList2 = _interopRequireDefault(_TableList);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Languages = function (_Component) {
	_inherits(Languages, _Component);

	function Languages() {
		_classCallCheck(this, Languages);

		return _possibleConstructorReturn(this, (Languages.__proto__ || Object.getPrototypeOf(Languages)).apply(this, arguments));
	}

	_createClass(Languages, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (!this.props.ListLanguages.get('isLoadded')) this.props.fetch(this.props.ListLanguages);
		}
	}, {
		key: '_search',
		value: function _search() {
			this.props.fetch(this.props.ListLanguages, 'search');
		}
	}, {
		key: '_add',
		value: function _add() {
			this.props.set_page_type('new');
			this.props.go(this.props.ListLanguages.get('path') + '/new');
		}
	}, {
		key: '_view',
		value: function _view(row) {
			this.props.select(row);
			this.props.set_page_type('view');
			this.props.go(this.props.ListLanguages.get('path') + '/' + row.get('id'));
		}
	}, {
		key: '_remove',
		value: function _remove(row) {
			this.props.select(row);
			this.props.set_page_type('remove');
			this.props.go(this.props.ListLanguages.get('path') + '/' + row.get('id'));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_TableList2.default, {
				reducer: this.props.ListLanguages,
				view: this._view.bind(this),
				add: this._add.bind(this),
				search: this._search.bind(this),
				updateSearchTerm: this.props.update_search_term.bind(this),
				remove: this._remove.bind(this),
				location: this.props.location,
				header: this.props.header,
				show_mobile_menu: this.props.show_mobile_menu,
				callback: this.props.fetch.bind(this)
			});
		}
	}]);

	return Languages;
}(_react.Component);

function mapStateToProps(state) {
	return {
		header: state.header,
		ListLanguages: state.ListLanguages
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(Object.assign(Actions, LanguageActions), dispatch);
}

exports.Languages = Languages;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Languages);