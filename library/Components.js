import React, { PropTypes } from 'react';
import ComponentDisplay from './ComponentDisplay';
import { capitalize } from './utils/string';

const propTypes = {
  group: PropTypes.string,
  components: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

const Components = ({
  components,
  group,
  children,
}) => (
  <div className="library__components__wrapper">
    {children}
    <div className="library__components__content">
      <div className="library__component">
        {!group ? (
          <h1>All Components</h1>
        ) : (
          <h1>{capitalize(group)}</h1>
        )}
        <hr />
      </div>
      {components.map((component, i) => (
        <ComponentDisplay
          key={`component-${i}`}
          name={component.name}
          Component={component.component}
        />
      ))}
    </div>
  </div>
);

Components.propTypes = propTypes;

export default Components;
