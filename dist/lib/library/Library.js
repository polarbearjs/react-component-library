'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Components = require('./Components');

var _Components2 = _interopRequireDefault(_Components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  group: _react.PropTypes.string,
  groups: _react.PropTypes.array.isRequired,
  components: _react.PropTypes.array.isRequired
};

var Library = function Library(_ref) {
  var components = _ref.components;
  var groups = _ref.groups;
  var group = _ref.group;
  return _react2.default.createElement(
    _Wrapper2.default,
    null,
    _react2.default.createElement(_Sidebar2.default, {
      components: components
    }),
    _react2.default.createElement(
      _Components2.default,
      {
        group: group,
        components: components
      },
      _react2.default.createElement(_Nav2.default, {
        activeGroup: group,
        groups: groups
      })
    )
  );
};

Library.propTypes = propTypes;

exports.default = Library;