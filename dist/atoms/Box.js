'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxFull = exports.Box = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gsap = require('gsap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box(props) {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));
  }

  _createClass(Box, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: this.props.className },
        this.props.children
      );
    }
  }]);

  return Box;
}(_react.Component);

var BoxFull = function (_Component2) {
  _inherits(BoxFull, _Component2);

  function BoxFull(props) {
    _classCallCheck(this, BoxFull);

    var _this2 = _possibleConstructorReturn(this, (BoxFull.__proto__ || Object.getPrototypeOf(BoxFull)).call(this, props));

    _this2._close = _this2._close.bind(_this2);
    _this2._open = _this2._open.bind(_this2);
    return _this2;
  }

  _createClass(BoxFull, [{
    key: '_close',
    value: function _close() {
      _gsap.TweenMax.set(this.refs.boxFull, { className: "-=box-full" });
    }
  }, {
    key: '_open',
    value: function _open() {

      var elements = document.getElementsByClassName('animation');
      var tl = new _gsap.TimelineMax();

      tl.add(_gsap.TweenMax.set(this.refs.boxFull, { className: "+=box-full" }));
      tl.add(_gsap.TweenMax.set(elements, { opacity: 0 }));
      tl.add(_gsap.TweenMax.staggerTo(elements, 0.5, { opacity: 1 }, 0.5));
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.isOpen) {
        this._open();
      } else {
        this._close();
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'boxFull', className: 'box' },
        _react2.default.createElement('div', { className: 'animation background', onClick: this.props.closeCallback }),
        _react2.default.createElement(
          'div',
          { className: 'animation children' },
          this.props.children
        )
      );
    }
  }]);

  return BoxFull;
}(_react.Component);

exports.Box = Box;
exports.BoxFull = BoxFull;
exports.default = Box;