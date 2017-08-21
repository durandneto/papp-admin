'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Buttons = require('./../../atoms/Buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormValidation = function (_Component) {
	_inherits(FormValidation, _Component);

	function FormValidation() {
		_classCallCheck(this, FormValidation);

		return _possibleConstructorReturn(this, (FormValidation.__proto__ || Object.getPrototypeOf(FormValidation)).apply(this, arguments));
	}

	_createClass(FormValidation, [{
		key: '_save',
		value: function _save() {
			this.props.submit();
		}
	}, {
		key: 'getValidationPassword',
		value: function getValidationPassword(password) {

			if (password) {
				var length = password.length;
				if (length > 5) return 'success';else if (length > 3) return 'warning';else if (length > 0) return 'error';else return null;
			}

			return null;
		}
	}, {
		key: 'getValidationStringState',
		value: function getValidationStringState(text) {
			if (text) {
				var length = text.length;
				if (length > 5) return 'success';else if (length > 3) return 'warning';else if (length > 0) return 'error';else return null;
			}
			return null;
		}
	}, {
		key: 'getValidationEmail',
		value: function getValidationEmail(email) {

			if (email) {
				var length = email.length;
				if (length > 0) {
					var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					if (re.test(email)) {
						return 'success';
					} else {
						return 'error';
					}
				}
			}
			return null;
		}
	}]);

	return FormValidation;
}(_react.Component);

exports.default = FormValidation;