'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArbitraryContent = require('./ArbitraryContent');

var _ArbitraryContent2 = _interopRequireDefault(_ArbitraryContent);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var description = '\n  Container for elements inside of a grid.\n';

var usage = '\n<Row>\n  <Col xs={1} md={1} lg={1}>\n    ...\n  </Col>\n  <Col xs={1} md={1} lg={1}>\n    ...\n  </Col>\n  ...\n</Row>\n';

var propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  xs: _react.PropTypes.number.isRequired,
  sm: _react.PropTypes.number,
  md: _react.PropTypes.number,
  lg: _react.PropTypes.number,
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  xsPull: _react.PropTypes.number,
  smPull: _react.PropTypes.number,
  mdPull: _react.PropTypes.number,
  lgPull: _react.PropTypes.number
};

var docPropTypes = {
  children: {
    description: 'Child Elements',
    required: true,
    value: '\n<div>\n  Any Html\n  <OrReactComponents />\n</div>\n    '
  },
  className: {
    description: 'Classes for the col',
    required: false,
    value: 'any__class or__set--of-classes'
  },
  xs: {
    description: 'Col size on extra small screens (smaller than 34em)',
    required: true,
    value: '1-12'
  },
  sm: {
    description: 'Col size on small screens (larger than 34em, smaller than 62em)',
    required: false,
    value: '1-12'
  },
  md: {
    description: 'Col size on small screens (larger than 62em, smaller than 75em)',
    required: false,
    value: '1-12'
  },
  lg: {
    description: 'Col size on small screens (larger than 75em)',
    required: false,
    value: '1-12'
  },
  xsOffset: {
    description: 'Offset on extra small screens (smaller than 34em)',
    required: false,
    value: '1-12'
  },
  smOffset: {
    description: 'Offset on small screens (larger than 34em, smaller than 62em)',
    required: false,
    value: '1-12'
  },
  mdOffset: {
    description: 'Offset on small screens (larger than 62em, smaller than 75em)',
    required: false,
    value: '1-12'
  },
  lgOffset: {
    description: 'Offset on small screens (larger than 75em)',
    required: false,
    value: '1-12'
  },
  xsPull: {
    description: 'Pull on extra small screens (smaller than 34em)',
    required: false,
    value: '1-12'
  },
  smPull: {
    description: 'Pull on small screens (larger than 34em, smaller than 62em)',
    required: false,
    value: '1-12'
  },
  mdPull: {
    description: 'Pull on small screens (larger than 62em, smaller than 75em)',
    required: false,
    value: '1-12'
  },
  lgPull: {
    description: 'Pull on small screens (larger than 75em)',
    required: false,
    value: '1-12'
  }
};

var exampleData = {
  children: _react2.default.createElement(_ArbitraryContent2.default, null),
  xs: 5,
  sm: 6,
  md: 7,
  lg: 8
};

var Row = function Row(_ref) {
  var _classnames;

  var children = _ref.children;
  var className = _ref.className;
  var xs = _ref.xs;
  var sm = _ref.sm;
  var md = _ref.md;
  var lg = _ref.lg;
  var xsOffset = _ref.xsOffset;
  var smOffset = _ref.smOffset;
  var mdOffset = _ref.mdOffset;
  var lgOffset = _ref.lgOffset;
  var xsPull = _ref.xsPull;
  var smPull = _ref.smPull;
  var mdPull = _ref.mdPull;
  var lgPull = _ref.lgPull;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)(className, (_classnames = {}, _defineProperty(_classnames, 'col-xs-' + xs, true), _defineProperty(_classnames, 'col-sm-' + sm, !!sm), _defineProperty(_classnames, 'col-md-' + md, !!md), _defineProperty(_classnames, 'col-lg-' + lg, !!lg), _defineProperty(_classnames, 'col-xs-offset-' + xsOffset, !!xsOffset), _defineProperty(_classnames, 'col-sm-offset-' + smOffset, !!smOffset), _defineProperty(_classnames, 'col-md-offset-' + mdOffset, !!mdOffset), _defineProperty(_classnames, 'col-lg-offset-' + lgOffset, !!lgOffset), _defineProperty(_classnames, 'col-xs-pull-' + xsOffset, !!xsPull), _defineProperty(_classnames, 'col-sm-pull-' + smOffset, !!smPull), _defineProperty(_classnames, 'col-md-pull-' + mdOffset, !!mdPull), _defineProperty(_classnames, 'col-lg-pull-' + lgOffset, !!lgPull), _classnames))
    },
    children
  );
};

Row.usage = usage;
Row.description = description;
Row.propTypes = propTypes;
Row.docPropTypes = docPropTypes;
Row.exampleData = exampleData;

exports.default = Row;