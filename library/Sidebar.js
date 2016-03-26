import React, { Component, PropTypes } from 'react';

const propTypes = {
  components: PropTypes.array.isRequired,
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { components: props.components, filter: '' };
  }

  componentWillReceiveProps(props) {
    this.state = { components: props.components, filter: '' };
  }

  search() {
    return (e) => {
      const filter = e.target.value;
      const { components } = this.props;
      this.setState({
        filter,
        components: components.filter((component) => (
          component.name.match(new RegExp(filter, 'i'))
        )),
      });
    };
  }

  render() {
    const { components, filter } = this.state;

    return (
      <div className="library__sidebar">
        <div className="library__sidebar__item">
          <div className="library__sidebar__filter">
            <input
              className="library__sidebar_filter__input"
              onChange={this.search()}
              value={filter}
              placeholder="Search..."
            />
          </div>
        </div>
        <ul className="library__sidebar__items">
          {components.map((component, i) => (
            <li
              className="library__sidebar__item"
              key={`component-${i}-${component.name}`}
            >
              <a href={`#${component.name}`}>{component.name}</a>
            </li>
          ))}
          {components.length === 0 ? (
            <li
              className="library__sidebar__item"
            >
             No components...
            </li>
          ) : (null)}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = propTypes;

export default Sidebar;
