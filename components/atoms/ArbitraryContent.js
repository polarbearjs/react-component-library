import React, { PropTypes } from 'react';

const description = `
  A component for placeholder content
`;

const usage = '<ArbitraryContent content="Hello" />';

const propTypes = {
  content: PropTypes.string,
};

const docPropTypes = {
  content: {
    description: 'Display value',
    required: false,
    value: 'Any string',
  },
};

const exampleData = {
  content: 'Hello',
};

const ArbitraryContent = ({
  content,
}) => (
  <div className="abritrary-content">
    <span className="abritrary-content__text">
      {content || 'Content'}
    </span>
  </div>
);

ArbitraryContent.usage = usage;
ArbitraryContent.description = description;
ArbitraryContent.propTypes = propTypes;
ArbitraryContent.docPropTypes = docPropTypes;
ArbitraryContent.exampleData = exampleData;

export default ArbitraryContent;
