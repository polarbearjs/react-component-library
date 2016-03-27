"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var components = exports.components = function components(groups, group) {
  if (group) {
    return Object.keys(groups[group]).map(function (name) {
      return {
        name: name,
        component: groups[group][name]
      };
    });
  }

  return Object.keys(groups).reduce(function (allComponents, group) {
    return [].concat(_toConsumableArray(allComponents), _toConsumableArray(components(groups, group)));
  }, []);
};