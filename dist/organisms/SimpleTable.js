'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTable = function (_Component) {
  _inherits(SimpleTable, _Component);

  function SimpleTable() {
    _classCallCheck(this, SimpleTable);

    return _possibleConstructorReturn(this, (SimpleTable.__proto__ || Object.getPrototypeOf(SimpleTable)).apply(this, arguments));
  }

  _createClass(SimpleTable, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Col,
        null,
        _react2.default.createElement(
          'h3',
          null,
          'View Users '
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'table-responsive' },
          _react2.default.createElement(
            'div',
            { className: 'bootstrap-table' },
            _react2.default.createElement(
              'div',
              { className: 'fixed-table-toolbar' },
              _react2.default.createElement(
                'div',
                { className: 'bars pull-left' },
                _react2.default.createElement(
                  'div',
                  { id: 'toolbargrid' },
                  _react2.default.createElement('div', { className: 'form-inline', role: 'form' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'toolbar clearfix' },
              _react2.default.createElement(
                'div',
                { className: 'toolbar-left' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary' },
                  'Add User'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'btn btn-default', target: '_blank' },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-file-pdf-o' }),
                  ' Filter'
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'btn btn-default', target: '_blank' },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-file-pdf-o' }),
                  'export'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'toolbar-right' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-inline', role: 'form' },
                  _react2.default.createElement('input', { className: 'form-control table-search', type: 'text', placeholder: 'Search' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fixed-table-container' },
              _react2.default.createElement(
                'div',
                { className: 'fixed-table-header' },
                _react2.default.createElement('table', null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'fixed-table-body' },
                _react2.default.createElement(
                  'table',
                  { className: 'table table-striped table-hover' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        { className: 'text-left' },
                        _react2.default.createElement(
                          'div',
                          { className: 'th-inner sortable' },
                          'Description'
                        ),
                        _react2.default.createElement('div', { className: 'fht-cell' })
                      ),
                      _react2.default.createElement(
                        'th',
                        { className: 'text-left' },
                        _react2.default.createElement(
                          'div',
                          { className: 'th-inner sortable' },
                          'Leads'
                        ),
                        _react2.default.createElement('div', { className: 'fht-cell' })
                      ),
                      _react2.default.createElement(
                        'th',
                        { className: 'text-left' },
                        _react2.default.createElement(
                          'div',
                          { className: 'th-inner sortable' },
                          'Order Type'
                        ),
                        _react2.default.createElement('div', { className: 'fht-cell' })
                      ),
                      _react2.default.createElement(
                        'th',
                        { className: 'text-left' },
                        _react2.default.createElement(
                          'div',
                          { className: 'th-inner sortable' },
                          'Status'
                        ),
                        _react2.default.createElement('div', { className: 'fht-cell' })
                      ),
                      _react2.default.createElement(
                        'th',
                        { className: 'text-left' },
                        _react2.default.createElement(
                          'div',
                          { className: 'th-inner sortable' },
                          'Date Created'
                        ),
                        _react2.default.createElement('div', { className: 'fht-cell' })
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'th-inner ' },
                          'Options'
                        ),
                        _react2.default.createElement('div', { className: 'fht-cell' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      { 'data-index': '0' },
                      _react2.default.createElement(
                        'td',
                        { className: 'text-left' },
                        'Test'
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-left' },
                        _react2.default.createElement(
                          'a',
                          { href: '/broker/order/1/lead' },
                          '1/1'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-left' },
                        'Buyer'
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-left' },
                        'Completed'
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-left' },
                        '01/29/2015 16:47:05'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'a',
                          { className: 'btn btn-primary', href: '/broker/order/clone/1',
                            'data-toggle': 'tooltip',
                            'data-placement': 'top',
                            title: 'Clone Order' },
                          _react2.default.createElement('i', { className: 'fa fa-fw fa-files-o' })
                        ),
                        ' ',
                        _react2.default.createElement(
                          'a',
                          { className: 'btn btn-primary',
                            href: '/broker/order/detail/1', 'data-toggle': 'tooltip', 'data-placement': 'top',
                            title: 'View Order Detail' },
                          _react2.default.createElement('i', { className: 'fa fa-fw fa-eye' })
                        ),
                        _react2.default.createElement(
                          'a',
                          { id: 'BTN_ORDER_CANCEL1', className: 'btn btn-primary',
                            href: '/broker/order/cancel/request/1', 'data-toggle': 'tooltip', 'data-placement': 'top',
                            title: 'Cancel Order', style: { display: "none" } },
                          _react2.default.createElement('i', { className: 'fa fa-fw fa-ban' })
                        )
                      )
                    )
                  ),
                  _react2.default.createElement('tfoot', null)
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'fixed-table-pagination' },
                _react2.default.createElement(
                  'div',
                  { className: 'pull-left pagination-detail' },
                  _react2.default.createElement(
                    'span',
                    { className: 'pagination-info' },
                    'Showing 1 to 3 of 3 rows'
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
                          '10'
                        ),
                        ' ',
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
                            '10'
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
                      { className: 'page-first disabled' },
                      _react2.default.createElement(
                        'a',
                        null,
                        'first'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'page-pre disabled' },
                      _react2.default.createElement(
                        'a',
                        null,
                        'prev'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'page-number active disabled' },
                      _react2.default.createElement(
                        'a',
                        null,
                        'current'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'page-next disabled' },
                      _react2.default.createElement(
                        'a',
                        null,
                        'next'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'page-last disabled' },
                      _react2.default.createElement(
                        'a',
                        null,
                        'last'
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement('div', { className: 'clearfix' })
        )
      );
    }
  }]);

  return SimpleTable;
}(_react.Component);

exports.SimpleTable = SimpleTable;
exports.default = SimpleTable;