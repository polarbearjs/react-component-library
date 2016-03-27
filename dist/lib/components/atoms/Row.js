'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _ArbitraryContent = require('./ArbitraryContent');

var _ArbitraryContent2 = _interopRequireDefault(_ArbitraryContent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var description = '\n  Container for elements inside of a grid.\n';

var usage = '\n<Grid>\n  <Row>\n    <Col xs={1} md={1} lg={1}>\n      ...\n    </Col>\n    <Col xs={1} md={1} lg={1}>\n      ...\n    </Col>\n    ...\n  </Row>\n</Grid>\n';

var propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string
};

var docPropTypes = {
  children: {
    description: 'Child Elements',
    required: true,
    value: '\n<Row>\n  <Col xs={1} md={1} lg={1}>\n    ...\n  </Col>\n  <Col xs={1} md={1} lg={1}>\n    ...\n  </Col>\n  ...\n</Row>\n    '
  },
  className: {
    description: 'Classes for the row',
    required: false,
    value: 'any__class or__set--of-classes'
  }
};

var exampleData = {
  className: 'library__component__example-backgound',
  children: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Col2.default,
      { className: 'library__component__example-border', xs: 12, sm: 6, md: 8 },
      _react2.default.createElement(_ArbitraryContent2.default, { content: '.col-xs-12 .col-sm-6 .col-md-8' })
    ),
    _react2.default.createElement(
      _Col2.default,
      { className: 'library__component__example-border', xs: 6, md: 4 },
      _react2.default.createElement(_ArbitraryContent2.default, { content: '.col-xs-6 .col-md-4' })
    )
  )
};

var Grid = function Grid(_ref) {
  var children = _ref.children;
  var className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('row', className) },
    children
  );
};

Grid.usage = usage;
Grid.description = description;
Grid.propTypes = propTypes;
Grid.docPropTypes = docPropTypes;
Grid.exampleData = exampleData;

exports.default = Grid;