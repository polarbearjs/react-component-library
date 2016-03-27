'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Library = require('./Library');

var _Library2 = _interopRequireDefault(_Library);

var _components = require('../components');

var Groups = _interopRequireWildcard(_components);

var _groups = require('./selectors/groups');

var _components2 = require('./selectors/components');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  params: _react.PropTypes.object.isRequired
};

var LibraryContainer = function LibraryContainer(_ref) {
  var group = _ref.params.group;
  return _react2.default.createElement(_Library2.default, {
    group: group,
    groups: (0, _groups.groups)(Groups),
    components: (0, _components2.components)(Groups, group)
  });
};

LibraryContainer.propTypes = propTypes;

exports.default = LibraryContainer;