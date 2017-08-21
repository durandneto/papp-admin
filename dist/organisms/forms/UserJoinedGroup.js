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

var UserJoinedGroupForm = function (_FormValidation) {
  _inherits(UserJoinedGroupForm, _FormValidation);

  function UserJoinedGroupForm(props) {
    _classCallCheck(this, UserJoinedGroupForm);

    return _possibleConstructorReturn(this, (UserJoinedGroupForm.__proto__ || Object.getPrototypeOf(UserJoinedGroupForm)).call(this, props));
  }

  _createClass(UserJoinedGroupForm, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState(this.props.row.toObject());
      this.props.hide_message();
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
    key: 'handleUserChange',
    value: function handleUserChange(e) {
      var _this3 = this;

      this.setState({ user: { id: e.target.value } }, function () {
        _this3.props.save(_this3.state);
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
          'User Id: ',
          this.props.row.get('user').get('id')
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
          'Group: ',
          this.props.row.get('group').get('name')
        )
      );
    }
  }, {
    key: 'renderNewUserJoinedGroupButton',
    value: function renderNewUserJoinedGroupButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        this.props.isSaving ? 'Saving new UserJoinedGroup' : 'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'primary',
          click: this._save.bind(this),
          label: 'Save'
        })
      );
    }
  }, {
    key: 'renderEditUserJoinedGroupButton',
    value: function renderEditUserJoinedGroupButton() {
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
    key: 'renderViewUserJoinedGroupButton',
    value: function renderViewUserJoinedGroupButton() {
      console.log(this.props.joinGroup);
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
          type: 'default',
          click: this.props.joinGroup,
          label: 'Join'
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
    key: 'renderRemoveUserJoinedGroupButton',
    value: function renderRemoveUserJoinedGroupButton() {
      return _react2.default.createElement(
        _reactBootstrap.Well,
        { bsSize: 'large' },
        'Actions',
        _react2.default.createElement(_Buttons.ButtonFormSquad, {
          className: 'pull-right',
          type: 'danger',
          click: this.props.remove_member.bind(this),
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
        this.props.status.get('type') === 'SUCCESS' ? _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: 'success', onDismiss: this.props.hide_message },
          _react2.default.createElement(
            'h4',
            null,
            'Oh yeah! New UserJoinedGroup created succefully!'
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
            'User Id: ',
            this.props.lastRow.get('user').get('id') || null
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
            'Group: ',
            this.props.lastRow.get('group').get('name') || null
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
        this.renderNewUserJoinedGroupButton()
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
          this.props.reducer.get('title').get(this.props.reducer.get('visualizationType')).get('title'),
          ' ',
          this.props.group.get('name')
        ),
        _react2.default.createElement(
          'h4',
          null,
          'Owner:',
          ' ',
          this.props.group.get('user').get('name')
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.group.get('user').get('email')
        ),
        this.props.reducer.get('visualizationType') === 'view' ? _react2.default.createElement(
          'span',
          null,
          this.renderView(),
          this.renderViewUserJoinedGroupButton()
        ) : null,
        this.props.reducer.get('visualizationType') === 'remove' ? _react2.default.createElement(
          'span',
          null,
          this.renderView(),
          this.renderRemoveUserJoinedGroupButton()
        ) : null,
        this.props.reducer.get('visualizationType') === 'new' || this.props.reducer.get('visualizationType') === 'edit' ? _react2.default.createElement(
          'span',
          null,
          this.renderForm()
        ) : null
      );
    }
  }]);

  return UserJoinedGroupForm;
}(_FormValidation3.default);

exports.default = UserJoinedGroupForm;