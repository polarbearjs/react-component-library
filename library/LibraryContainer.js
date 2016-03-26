import React, { PropTypes } from 'react';
import Library from './Library';
import * as Groups from '../components';
import { groups } from './selectors/groups';
import { components } from './selectors/components';

const propTypes = {
  params: PropTypes.object.isRequired,
};

const LibraryContainer = ({ params: { group } }) => (
  <Library
    group={group}
    groups={groups(Groups)}
    components={components(Groups, group)}
  />
);

LibraryContainer.propTypes = propTypes;

export default LibraryContainer;
