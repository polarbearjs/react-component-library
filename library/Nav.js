import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { capitalize } from './utils/string';
import { Link } from 'react-router';

const propTypes = {
  activeGroup: PropTypes.string,
  groups: PropTypes.array.isRequired,
};

const Nav = ({
  groups,
  activeGroup,
}) => (
  <div className="library__nav">
    <span
      className={classnames(
        'library__nav__item',
        { 'library__nav__item--active': !activeGroup },
      )}
    >
      <Link to="">All</Link>
    </span>
    {groups.map((group, i) => (
      <span
        className={classnames(
          'library__nav__item',
          { 'library__nav__item--active': group.name === activeGroup }
        )}
        key={`group-${i}`}
      >
        <Link to={`/groups/${group.name}`}>{capitalize(group.name)}</Link>
      </span>
    ))}
  </div>
);

Nav.propTypes = propTypes;

export default Nav;
