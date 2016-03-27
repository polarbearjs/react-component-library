'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var description = '\n  A component for placeholder content\n';

var usage = '<ArbitraryContent content="Hello" />';

var propTypes = {
  content: _react.PropTypes.string
};

var docPropTypes = {
  content: {
    description: 'Display value',
    required: false,
    value: 'Any string'
  }
};

var exampleData = {
  content: 'Hello'
};

var ArbitraryContent = function ArbitraryContent(_ref) {
  var content = _ref.content;
  return _react2.default.createElement(
    'div',
    { className: 'abritrary-content' },
    _react2.default.createElement(
      'span',
      { className: 'abritrary-content__text' },
      content || 'Content'
    )
  );
};

ArbitraryContent.usage = usage;
ArbitraryContent.description = description;
ArbitraryContent.propTypes = propTypes;
ArbitraryContent.docPropTypes = docPropTypes;
ArbitraryContent.exampleData = exampleData;

exports.default = ArbitraryContent;