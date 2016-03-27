'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _string = require('./utils/string');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  activeGroup: _react.PropTypes.string,
  groups: _react.PropTypes.array.isRequired
};

var Nav = function Nav(_ref) {
  var groups = _ref.groups;
  var activeGroup = _ref.activeGroup;
  return _react2.default.createElement(
    'div',
    { className: 'library__nav' },
    _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)('library__nav__item', { 'library__nav__item--active': !activeGroup })
      },
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '' },
        'All'
      )
    ),
    groups.map(function (group, i) {
      return _react2.default.createElement(
        'span',
        {
          className: (0, _classnames2.default)('library__nav__item', { 'library__nav__item--active': group.name === activeGroup }),
          key: 'group-' + i
        },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/groups/' + group.name },
          (0, _string.capitalize)(group.name)
        )
      );
    })
  );
};

Nav.propTypes = propTypes;

exports.default = Nav;