'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Buttons = require('./../atoms/Buttons');

var _Box = require('./../atoms/Box');

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonContainer = function (_Component) {
  _inherits(ButtonContainer, _Component);

  function ButtonContainer(props) {
    _classCallCheck(this, ButtonContainer);

    var _this = _possibleConstructorReturn(this, (ButtonContainer.__proto__ || Object.getPrototypeOf(ButtonContainer)).call(this, props));

    _this._open = _this._open.bind(_this);
    _this._close = _this._close.bind(_this);
    return _this;
  }

  _createClass(ButtonContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ isOpen: false, search: '' });
    }
  }, {
    key: '_open',
    value: function _open(e) {
      this.setState({ isOpen: true });
    }
  }, {
    key: '_close',
    value: function _close(e) {
      this.setState({ isOpen: false });
    }
  }, {
    key: '_search',
    value: function _search() {
      this.props.search(this.state.search);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var _this2 = this;

      this.setState({ search: e.target.value }, function () {
        _this2.props.updateSearchTerm(_this2.state.search);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Box.BoxFull,
        { isOpen: this.state.isOpen, closeCallback: this._close },
        _react2.default.createElement(
          'div',
          { className: 'well' },
          _react2.default.createElement(_Buttons.ButtonFormSquad, {
            icon: 'fa-plus-square',
            type: 'primary',
            click: this.props.add }),
          _react2.default.createElement(_Buttons.ButtonFormSquad, { label: 'Close',
            click: this._close }),
          _react2.default.createElement(_Buttons.ButtonFormSquad, { label: 'Open',
            click: this._open
          }),
          _react2.default.createElement(_Buttons.ButtonFormSquad, { click: this._search.bind(this), label: 'Search', className: 'pull-right' }),
          _react2.default.createElement('input', {
            className: 'pull-right',
            type: 'text',
            value: this.state.search,
            placeholder: 'Enter text',
            onChange: this.handleChange.bind(this)
          })
        )
      );
    }
  }]);

  return ButtonContainer;
}(_react.Component);

exports.default = ButtonContainer;