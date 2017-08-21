'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paginator = require('./Paginator');

var _Paginator2 = _interopRequireDefault(_Paginator);

var _Buttons = require('./../atoms/Buttons');

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
    key: '_next',
    value: function _next(param) {
      this.props.callback('next');
    }
  }, {
    key: '_first',
    value: function _first(param) {
      this.props.callback('first');
    }
  }, {
    key: '_last',
    value: function _last(param) {
      this.props.callback('last');
    }
  }, {
    key: '_prev',
    value: function _prev(param) {
      this.props.callback('prev');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'table',
        { className: 'table table-striped table-hover' },
        this.props.columns && this.props.rows ? _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            this.props.columns.map(function (value, index) {
              return _react2.default.createElement(
                'th',
                { key: 'datatablelistheader' + index },
                _react2.default.createElement(_Buttons.ButtonLinkTableHeader, { label: value, sortable: true })
              );
            }),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(_Buttons.ButtonLinkTableHeader, { label: 'Options' })
            )
          )
        ) : null,
        _react2.default.createElement(
          'tbody',
          null,
          this.props.rows ? this.props.rows.map(function (value, index) {
            return _react2.default.createElement(
              'tr',
              { 'data-index': index, key: 'datatablelistbody' + index },
              value.map(function (v, a) {
                return _react2.default.createElement(
                  'td',
                  { className: 'text-left', key: 'datatablelistbodytd' + a },
                  v
                );
              }),
              _react2.default.createElement(
                'td',
                null,
                _this2.props.view ? _react2.default.createElement(_Buttons.ButtonDefault, { icon: 'fa-eye', click: _this2.props.view.bind(_this2, value) }) : null,
                _this2.props.remove ? _react2.default.createElement(_Buttons.ButtonDefault, { icon: 'fa-ban', click: _this2.props.remove.bind(_this2, value) }) : null
              )
            );
          }) : _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              ' no data found'
            )
          )
        ),
        this.props.rows ? _react2.default.createElement(
          'tfoot',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_Paginator2.default, {
                current: this.props.paginator.get('currentPage'),
                limit: this.props.paginator.get('totalPage'),
                total: this.props.paginator.get('count'),
                itemsPerPage: this.props.paginator.get('limitPerPage'),
                actionNext: this._next.bind(this),
                actionPrev: this._prev.bind(this),
                actionLast: this._last.bind(this),
                actionFirst: this._first.bind(this),
                allowNavigation: this.props.paginator.get('allowNavigation')
              })
            )
          )
        ) : null
      );
    }
  }]);

  return TableList;
}(_react.Component);

exports.default = TableList;