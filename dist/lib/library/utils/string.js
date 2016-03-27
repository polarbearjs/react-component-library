'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var capitalize = exports.capitalize = function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
};

var formatHtml = exports.formatHtml = function formatHtml(code) {
  return code.trim().replace(/\>/g, '>\n').split('\n').reduce(function (lines, line) {
    var newLine = line;
    if (newLine.includes('</') && newLine.slice(0, 2) !== '</') {
      var tag = newLine.indexOf('</');
      newLine = newLine.split('');
      newLine.splice(tag, 0, '\n');
      newLine = newLine.join('');
    }

    return [].concat(_toConsumableArray(lines), _toConsumableArray(newLine.split('\n')));
  }, []).reduce(function (lines, line) {
    var indent = '';
    var length = lines.indent;
    var closingTag = line.slice(0, 2) === '</';

    if (closingTag) {
      length -= 2;
      if (length < 0) {
        length = 0;
      }
    } else if (!lines.previousClosed) {
      length += 2;
    }

    var i = length;
    while (i--) {
      indent += ' ';
    }

    return {
      indent: length,
      lines: lines.lines + '\n' + (indent + line),
      previousClosed: closingTag
    };
  }, {
    indent: -2,
    lines: '',
    previousClosed: false
  }).lines;
};

var removeLibraryStyles = exports.removeLibraryStyles = function removeLibraryStyles(code) {
  return code.replace(/(\s)?(library[__a-zA-Z]*--[a-zA-Z]*|library[__a-zA-Z]*-[a-zA-Z]*|library[__a-zA-Z]*)(\s)?/g, '');
};