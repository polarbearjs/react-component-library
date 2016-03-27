'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _string = require('./utils/string');

var _server = require('react-dom/server');

var _PropTypeTable = require('./PropTypeTable');

var _PropTypeTable2 = _interopRequireDefault(_PropTypeTable);

var _CodeBlock = require('./CodeBlock');

var _CodeBlock2 = _interopRequireDefault(_CodeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  name: _react.PropTypes.string.isRequired,
  Component: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]).isRequired
};

var ComponentDisplay = function ComponentDisplay(_ref) {
  var name = _ref.name;
  var Component = _ref.Component;
  return _react2.default.createElement(
    'div',
    { id: name, className: 'library__component' },
    _react2.default.createElement(
      'h2',
      null,
      name
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'span',
      null,
      Component.description
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Prop Types'
    ),
    _react2.default.createElement(_PropTypeTable2.default, { object: Component.docPropTypes }),
    _react2.default.createElement(
      'h3',
      null,
      'Example'
    ),
    _react2.default.createElement(
      'div',
      { className: 'library__component__container' },
      _react2.default.createElement(Component, Component.exampleData)
    ),
    _react2.default.createElement(_CodeBlock2.default, {
      title: 'Usage',
      code: Component.usage
    }),
    _react2.default.createElement(_CodeBlock2.default, {
      title: 'Html',
      code: (0, _string.formatHtml)((0, _string.removeLibraryStyles)((0, _server.renderToStaticMarkup)(_react2.default.createElement(Component, Component.exampleData))))
    })
  );
};

ComponentDisplay.propTypes = propTypes;

exports.default = ComponentDisplay;