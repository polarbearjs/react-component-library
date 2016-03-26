import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = ({
  children,
}) => (
  <div className="library__wrapper">
    {children}
  </div>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
