import React, { PropTypes } from 'react';
import { formatHtml, removeLibraryStyles } from './utils/string';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypeTable from './PropTypeTable';
import CodeBlock from './CodeBlock';

const propTypes = {
  name: PropTypes.string.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

const ComponentDisplay = ({
  name,
  Component,
}) => (
  <div id={name} className="library__component">
    <h2>{name}</h2>
    <hr />
    <span>{Component.description}</span>
    <h3>Prop Types</h3>
    <PropTypeTable object={Component.docPropTypes} />
    <h3>Example</h3>
    <div className="library__component__container">
      <Component
        {...Component.exampleData}
      />
    </div>
    <CodeBlock
      title="Usage"
      code={Component.usage}
    />
    <CodeBlock
      title="Html"
      code={formatHtml(
        removeLibraryStyles(
          renderToStaticMarkup(
            <Component
              {...Component.exampleData}
            />
          )
        )
      )}
    />
  </div>
);

ComponentDisplay.propTypes = propTypes;

export default ComponentDisplay;
