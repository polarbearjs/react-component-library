export const capitalize = (value) => (
  value[0].toUpperCase() + value.slice(1)
);

export const formatHtml = (code) => (
  code.trim().replace(/\>/g, '>\n').split('\n').reduce((lines, line) => {
    let newLine = line;
    if (newLine.includes('</') && newLine.slice(0, 2) !== '</') {
      const tag = newLine.indexOf('</');
      newLine = newLine.split('');
      newLine.splice(tag, 0, '\n');
      newLine = newLine.join('');
    }

    return [
      ...lines,
      ...newLine.split('\n'),
    ];
  }, []).reduce((lines, line) => {
    let indent = '';
    let length = lines.indent;
    const closingTag = line.slice(0, 2) === '</';

    if (closingTag) {
      length -= 2;
      if (length < 0) {
        length = 0;
      }
    } else if (!lines.previousClosed) {
      length += 2;
    }

    let i = length;
    while (i--) {
      indent += ' ';
    }

    return {
      indent: length,
      lines: `${lines.lines}\n${indent + line}`,
      previousClosed: closingTag,
    };
  }, {
    indent: -2,
    lines: '',
    previousClosed: false,
  }).lines
);

export const removeLibraryStyles = (code) => (
  code.replace(
    /(\s)?(library[__a-zA-Z]*--[a-zA-Z]*|library[__a-zA-Z]*-[a-zA-Z]*|library[__a-zA-Z]*)(\s)?/g,
    '',
  )
);
