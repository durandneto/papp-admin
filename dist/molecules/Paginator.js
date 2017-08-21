'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Buttons = require('../atoms/Buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paginator = function (_Component) {
  _inherits(Paginator, _Component);

  function Paginator() {
    _classCallCheck(this, Paginator);

    return _possibleConstructorReturn(this, (Paginator.__proto__ || Object.getPrototypeOf(Paginator)).apply(this, arguments));
  }

  _createClass(Paginator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          allowNavigation = _props.allowNavigation,
          current = _props.current,
          total = _props.total,
          itemsPerPage = _props.itemsPerPage,
          limit = _props.limit;


      return _react2.default.createElement(
        'div',
        { className: 'fixed-table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'pull-left pagination-detail' },
          _react2.default.createElement(
            'span',
            { className: 'pagination-info' },
            'Showing ' + current + ' to ' + limit + ' of ' + total + ' rows'
          ),
          _react2.default.createElement(
            'span',
            { className: 'page-list' },
            _react2.default.createElement(
              'span',
              { className: 'btn-group dropup' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-default dropdown-toggle', 'data-toggle': 'dropdown' },
                _react2.default.createElement(
                  'span',
                  { className: 'page-size' },
                  itemsPerPage
                ),
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu', role: 'menu' },
                _react2.default.createElement(
                  'li',
                  { className: 'active' },
                  _react2.default.createElement(
                    'a',
                    null,
                    itemsPerPage
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    null,
                    '20'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    null,
                    '30'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    null,
                    '40'
                  )
                )
              )
            ),
            'records per page'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pull-right pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pagination' },
            _react2.default.createElement(
              'li',
              { className: 'page-first ' + (allowNavigation.get('prev') ? '' : 'disabled') + ' ',
                onClick: allowNavigation.get('prev') ? this.props.actionFirst : null },
              _react2.default.createElement(_Buttons.ButtonAncor, { label: 'first' })
            ),
            _react2.default.createElement(
              'li',
              { className: 'page-pre  ' + (allowNavigation.get('prev') ? '' : 'disabled'),
                onClick: allowNavigation.get('prev') ? this.props.actionPrev : null },
              _react2.default.createElement(_Buttons.ButtonAncor, { label: 'prev' })
            ),
            _react2.default.createElement(
              'li',
              { className: 'page-number active' },
              _react2.default.createElement(_Buttons.ButtonAncor, { label: current })
            ),
            _react2.default.createElement(
              'li',
              { className: 'page-next  ' + (allowNavigation.get('next') ? '' : 'disabled'),
                onClick: allowNavigation.get('next') ? this.props.actionNext : null },
              _react2.default.createElement(_Buttons.ButtonAncor, { label: 'next' })
            ),
            _react2.default.createElement(
              'li',
              { className: 'page-last  ' + (allowNavigation.get('next') ? '' : 'disabled'),
                onClick: allowNavigation.get('next') ? this.props.actionLast : null },
              _react2.default.createElement(_Buttons.ButtonAncor, { label: 'last' })
            )
          )
        )
      );
    }
  }]);

  return Paginator;
}(_react.Component);

exports.default = Paginator;