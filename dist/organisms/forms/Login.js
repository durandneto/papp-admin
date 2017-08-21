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

var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    _classCallCheck(this, LoginForm);

    return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
  }

  _createClass(LoginForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState(this.props.reducer.toObject());
      this.props.hide_message();
    }
  }, {
    key: '_save',
    value: function _save() {
      this.props.submit();
    }
  }, {
    key: 'getValidationPassword',
    value: function getValidationPassword() {

      if (this.state.password) {
        var length = this.state.password.length;
        if (length > 5) return 'success';else if (length > 3) return 'warning';else if (length > 0) return 'error';else return null;
      }

      return null;
    }
  }, {
    key: 'getValidationState',
    value: function getValidationState() {
      if (this.state.name) {
        var length = this.state.name.length;
        if (length > 5) return 'success';else if (length > 3) return 'warning';else if (length > 0) return 'error';else return null;
      }
      return null;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var _this2 = this;

      this.setState({ name: e.target.value }, function () {
        _this2.props.save(_this2.state);
      });
    }
  }, {
    key: 'getValidationEmail',
    value: function getValidationEmail() {

      if (this.state.email) {
        var length = this.state.email.length;
        if (length > 0) {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(this.state.email)) {
            return 'success';
          } else {
            return 'error';
          }
        }
      }
    }
  }, {
    key: 'handleChangeEmail',
    value: function handleChangeEmail(e) {
      var _this3 = this;

      this.setState({ email: e.target.value }, function () {
        _this3.props.save(_this3.state);
      });
    }
  }, {
    key: 'handleChangePassword',
    value: function handleChangePassword(e) {
      var _this4 = this;

      this.setState({ password: e.target.value }, function () {
        _this4.props.save(_this4.state);
      });
    }
  }, {
    key: 'renderView',
    value: function renderView() {
      return _react2.default.createElement(
        _reactBootstrap.Alert,
        { bsStyle: this.props.reducer.get('visualizationType') === 'remove' ? 'danger' : 'info' },
        _react2.default.createElement(
          'p',
          null,
          'ID: ',
          this.props.reducer.get('id')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Name: ',
          this.props.reducer.get('name')
        ),
        _react2.default.createElement(
          'p',
          null,
          'E-mail: ',
          this.props.reducer.get('email')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Session: ',
          this.props.reducer.get('authenticationToken')
        )
      );
    }
  }, {
    key: 'renderNewUserButton',
    value: function renderNewUserButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        this.props.isSaving ? 'Saving new User' : 'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'primary',
          click: this._save.bind(this),
          label: 'Save'
        })
      );
    }
  }, {
    key: 'renderEditUserButton',
    value: function renderEditUserButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'primary',
          click: this._save.bind(this),
          label: 'Save'
        }),
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'danger',
          click: this.props.set_page_type.bind(this, 'remove'),
          label: 'Remove'
        })
      );
    }
  }, {
    key: 'renderViewUserButton',
    value: function renderViewUserButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'primary',
          click: this.props.logout.bind(this),
          label: 'Logout'
        })
      );
    }
  }, {
    key: 'renderRemoveUserButton',
    value: function renderRemoveUserButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'danger',
          click: this.props.remove.bind(this),
          label: 'Remove'
        })
      );
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationEmail()
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'E-mail'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'email',
            value: this.props.reducer.get('email'),
            placeholder: 'Enter e-mail',
            onChange: this.handleChangeEmail.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on e-mail validation.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationPassword()
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Password'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'password',
            value: this.props.reducer.get('password'),
            placeholder: 'Enter password',
            onChange: this.handleChangePassword.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string.'
          )
        ),
        this.props.reducer.get('status').get('type') === 'SUCCESS' ? _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'success', onDismiss: this.props.hide_message },
          _react2.default.createElement(
            'h4',
            null,
            'Oh yeah! New User created succefully!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'ID: ',
            this.props.lastUser.get('id')
          ),
          _react2.default.createElement(
            'p',
            null,
            'Name: ',
            this.props.lastUser.get('name')
          ),
          _react2.default.createElement(
            'p',
            null,
            'E-mail: ',
            this.props.lastUser.get('email')
          )
        ) : null,
        this.props.reducer.get('status').get('type') === 'ERROR' ? _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'danger', onDismiss: this.props.hide_message },
          _react2.default.createElement(
            'h4',
            null,
            'Oh snap! You got an error!'
          ),
          _react2.default.createElement(
            'p',
            null,
            this.props.reducer.get('status').get('message')
          )
        ) : null,
        this.renderNewUserButton()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'h1',
          null,
          this.props.reducer.get('title').get(this.props.reducer.get('visualizationType')).get('title')
        ),
        '     ',
        this.props.reducer.get('visualizationType') === 'view' ? _react2.default.createElement(
          'span',
          null,
          this.renderView(),
          this.renderViewUserButton()
        ) : null,
        this.props.reducer.get('visualizationType') === 'remove' ? _react2.default.createElement(
          'span',
          null,
          this.renderView(),
          this.renderRemoveUserButton()
        ) : null,
        this.props.reducer.get('visualizationType') === 'new' || this.props.reducer.get('visualizationType') === 'error' ? _react2.default.createElement(
          'span',
          null,
          this.renderForm()
        ) : null
      );
    }
  }]);

  return LoginForm;
}(_react.Component);

exports.default = LoginForm;