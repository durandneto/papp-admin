'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _Buttons = require('./../../atoms/Buttons');

var _FormValidation2 = require('./FormValidation');

var _FormValidation3 = _interopRequireDefault(_FormValidation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserGroupForm = function (_FormValidation) {
  _inherits(UserGroupForm, _FormValidation);

  function UserGroupForm(props) {
    _classCallCheck(this, UserGroupForm);

    return _possibleConstructorReturn(this, (UserGroupForm.__proto__ || Object.getPrototypeOf(UserGroupForm)).call(this, props));
  }

  _createClass(UserGroupForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState(this.props.row.toObject());
      this.props.hide_message();
    }
  }, {
    key: 'handleLinkChange',
    value: function handleLinkChange(e) {
      var _this2 = this;

      this.setState({ link: e.target.value }, function () {
        _this2.props.save(_this2.state);
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var _this3 = this;

      this.setState({ name: e.target.value }, function () {
        _this3.props.save(_this3.state);
      });
    }
  }, {
    key: 'handleDescriptionChange',
    value: function handleDescriptionChange(e) {
      var _this4 = this;

      this.setState({ description: e.target.value }, function () {
        _this4.props.save(_this4.state);
      });
    }
  }, {
    key: 'handleLocationChange',
    value: function handleLocationChange(e) {
      var _this5 = this;

      this.setState({ location: e.target.value }, function () {
        _this5.props.save(_this5.state);
      });
    }
  }, {
    key: 'handleTopicsChange',
    value: function handleTopicsChange(e) {
      var _this6 = this;

      this.setState({ topics: e.target.value }, function () {
        _this6.props.save(_this6.state);
      });
    }
  }, {
    key: 'handleUserChange',
    value: function handleUserChange(e) {
      var _this7 = this;

      this.setState({ user: { id: e.target.value } }, function () {
        _this7.props.save(_this7.state);
      });
    }
  }, {
    key: 'handleLanguageChange',
    value: function handleLanguageChange(e) {
      var _this8 = this;

      this.setState({ userLanguage: { id: e.target.value } }, function () {
        _this8.props.save(_this8.state);
      });
    }
  }, {
    key: 'handlePlatformChange',
    value: function handlePlatformChange(e) {
      var _this9 = this;

      this.setState({ platform: { id: e.target.value } }, function () {
        _this9.props.save(_this9.state);
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
          this.props.row.get('id')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Name: ',
          this.props.row.get('name')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Description: ',
          this.props.row.get('description')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Location: ',
          this.props.row.get('location')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Topics: ',
          this.props.row.get('topics')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Link: ',
          this.props.row.get('link')
        ),
        _react2.default.createElement(
          'p',
          null,
          'User Id: ',
          this.props.row.get('user').get('id')
        ),
        _react2.default.createElement(
          'p',
          null,
          'User Name: ',
          this.props.row.get('user').get('name')
        ),
        _react2.default.createElement(
          'p',
          null,
          'User Email: ',
          this.props.row.get('user').get('email')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Platform: ',
          this.props.row.get('platform').get('name')
        ),
        _react2.default.createElement(
          'p',
          null,
          'Language: ',
          this.props.row.get('userLanguage').get('name')
        )
      );
    }
  }, {
    key: 'renderNewUserGroupButton',
    value: function renderNewUserGroupButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        this.props.isSaving ? 'Saving new UserGroup' : 'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'primary',
          click: this._save.bind(this),
          label: 'Save'
        })
      );
    }
  }, {
    key: 'renderEditUserGroupButton',
    value: function renderEditUserGroupButton() {
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
    key: 'renderViewUserGroupButton',
    value: function renderViewUserGroupButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'primary',
          click: this.props.set_page_type.bind(this, 'edit'),
          label: 'Edit'
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
    key: 'renderRemoveUserGroupButton',
    value: function renderRemoveUserGroupButton() {
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
            validationState: this.getValidationStringState(this.props.row.get('name'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Full Name'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('name'),
            placeholder: 'Enter full name',
            onChange: this.handleChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('description'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Full Description'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('description'),
            placeholder: 'Enter full description',
            onChange: this.handleDescriptionChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('location'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Full location'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('location'),
            placeholder: 'Enter full location',
            onChange: this.handleLocationChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('topics'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Full topics'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('topics'),
            placeholder: 'Enter full topics',
            onChange: this.handleTopicsChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('link'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Link'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('link'),
            placeholder: 'Enter full link',
            onChange: this.handleLinkChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('user').get('id'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'User ID'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('user').get('id'),
            placeholder: 'Enter User ID',
            onChange: this.handleUserChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('userLanguage').get('id'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Language ID'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('userLanguage').get('id'),
            placeholder: 'Enter Language ID',
            onChange: this.handleLanguageChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          {
            controlId: 'formBasicText',
            validationState: this.getValidationStringState(this.props.row.get('platform').get('id'))
          },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            'Platform ID'
          ),
          _react2.default.createElement(_reactBootstrap.FormControl, {
            type: 'text',
            value: this.props.row.get('platform').get('id'),
            placeholder: 'Enter Platform ID',
            onChange: this.handlePlatformChange.bind(this)
          }),
          _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null),
          _react2.default.createElement(
            _reactBootstrap.HelpBlock,
            null,
            'Validation is based on string length more than 5 caracters.'
          )
        ),
        this.props.status.get('type') === 'SUCCESS' ? _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'success', onDismiss: this.props.hide_message },
          _react2.default.createElement(
            'h4',
            null,
            'Oh yeah! New UserGroup created succefully!'
          ),
          _react2.default.createElement(
            'p',
            null,
            'ID: ',
            this.props.lastRow.get('id')
          ),
          _react2.default.createElement(
            'p',
            null,
            'Name: ',
            this.props.lastRow.get('name') || null
          ),
          _react2.default.createElement(
            'p',
            null,
            'Description: ',
            this.props.lastRow.get('description')
          ),
          _react2.default.createElement(
            'p',
            null,
            'Location: ',
            this.props.lastRow.get('location')
          ),
          _react2.default.createElement(
            'p',
            null,
            'Topics: ',
            this.props.lastRow.get('topics')
          ),
          _react2.default.createElement(
            'p',
            null,
            'Link: ',
            this.props.lastRow.get('link')
          ),
          _react2.default.createElement(
            'p',
            null,
            'User Id: ',
            this.props.lastRow.get('user').get('id') || null
          ),
          _react2.default.createElement(
            'p',
            null,
            'User Name: ',
            this.props.lastRow.get('user').get('name') || null
          ),
          _react2.default.createElement(
            'p',
            null,
            'User Email: ',
            this.props.lastRow.get('user').get('email') || null
          ),
          _react2.default.createElement(
            'p',
            null,
            'Platform: ',
            this.props.lastRow.get('platform').get('name') || null
          ),
          _react2.default.createElement(
            'p',
            null,
            'Language: ',
            this.props.lastRow.get('userLanguage').get('name') || null
          )
        ) : null,
        this.props.status.get('type') === 'ERROR' ? _react2.default.createElement(
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
            this.props.status.get('message')
          )
        ) : null,
        this.renderNewUserGroupButton()
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
          this.renderViewUserGroupButton()
        ) : null,
        this.props.reducer.get('visualizationType') === 'remove' ? _react2.default.createElement(
          'span',
          null,
          this.renderView(),
          this.renderRemoveUserGroupButton()
        ) : null,
        this.props.reducer.get('visualizationType') === 'new' || this.props.reducer.get('visualizationType') === 'edit' ? _react2.default.createElement(
          'span',
          null,
          this.renderForm()
        ) : null
      );
    }
  }]);

  return UserGroupForm;
}(_FormValidation3.default);

exports.default = UserGroupForm;