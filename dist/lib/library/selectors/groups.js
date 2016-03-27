"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var groups = exports.groups = function groups(componentGroups) {
  return Object.keys(componentGroups).map(function (name) {
    return {
      name: name
    };
  });
};