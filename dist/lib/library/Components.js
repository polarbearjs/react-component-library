'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentDisplay = require('./ComponentDisplay');

var _ComponentDisplay2 = _interopRequireDefault(_ComponentDisplay);

var _string = require('./utils/string');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  group: _react.PropTypes.string,
  components: _react.PropTypes.array.isRequired,
  children: _react.PropTypes.node.isRequired
};

var Components = function Components(_ref) {
  var components = _ref.components;
  var group = _ref.group;
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'library__components__wrapper' },
    children,
    _react2.default.createElement(
      'div',
      { className: 'library__components__content' },
      _react2.default.createElement(
        'div',
        { className: 'library__component' },
        !group ? _react2.default.createElement(
          'h1',
          null,
          'All Components'
        ) : _react2.default.createElement(
          'h1',
          null,
          (0, _string.capitalize)(group)
        ),
        _react2.default.createElement('hr', null)
      ),
      components.map(function (component, i) {
        return _react2.default.createElement(_ComponentDisplay2.default, {
          key: 'component-' + i,
          name: component.name,
          Component: component.component
        });
      })
    )
  );
};

Components.propTypes = propTypes;

exports.default = Components;