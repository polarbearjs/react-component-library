import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Components from './Components';

const propTypes = {
  group: PropTypes.string,
  groups: PropTypes.array.isRequired,
  components: PropTypes.array.isRequired,
};

const Library = ({
  components,
  groups,
  group,
}) => (
  <Wrapper>
    <Sidebar
      components={components}
    />
    <Components
      group={group}
      components={components}
    >
      <Nav
        activeGroup={group}
        groups={groups}
      />
    </Components>
  </Wrapper>
);

Library.propTypes = propTypes;

export default Library;
