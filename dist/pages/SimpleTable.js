'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleTable = require('./../templates/SimpleTable');

var _SimpleTable2 = _interopRequireDefault(_SimpleTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableList = function (_Component) {
  _inherits(TableList, _Component);

  function TableList() {
    _classCallCheck(this, TableList);

    return _possibleConstructorReturn(this, (TableList.__proto__ || Object.getPrototypeOf(TableList)).apply(this, arguments));
  }

  _createClass(TableList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SimpleTable2.default,
        { header: this.props.header, show_mobile_menu: this.props.show_mobile_menu },
        this.props.children
      );
    }
  }]);

  return TableList;
}(_react.Component);

exports.TableList = TableList;
exports.default = TableList;