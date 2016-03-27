'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  object: _react.PropTypes.object.isRequired
};

var Compy = function Compy(_ref) {
  var object = _ref.object;
  return _react2.default.createElement(
    'div',
    { className: 'library__table__wrapper' },
    _react2.default.createElement(
      'table',
      { className: 'library__table' },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Property'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Description'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Required'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Value'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        Object.keys(object).map(function (key, i) {
          return _react2.default.createElement(
            'tr',
            { key: key + '-' + i },
            _react2.default.createElement(
              'td',
              null,
              key
            ),
            _react2.default.createElement(
              'td',
              null,
              object[key].description
            ),
            _react2.default.createElement(
              'td',
              null,
              object[key].required ? 'Yes' : 'No'
            ),
            _react2.default.createElement(
              'td',
              { className: 'library__table--nopad' },
              _react2.default.createElement(
                _reactHighlight2.default,
                { className: 'javascript' },
                object[key].value.trim()
              )
            )
          );
        })
      )
    )
  );
};

Compy.propTypes = propTypes;

exports.default = Compy;