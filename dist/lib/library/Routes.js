'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _LibraryContainer = require('./LibraryContainer');

var _LibraryContainer2 = _interopRequireDefault(_LibraryContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LibraryContainer2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/groups/:group', component: _LibraryContainer2.default })
);