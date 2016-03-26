import React, { Component, PropTypes } from 'react';
import Highlight from 'react-highlight';

const propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  toggle() {
    return () => {
      this.setState({ show: !this.state.show });
    };
  }

  render() {
    const {
      title,
      code,
    } = this.props;
    const { show } = this.state;

    return (
      <div className="library__code-block">
        <div className="library__code-block__title">
          <h3>{title}</h3>
          <button onClick={this.toggle()}>{show ? 'Hide' : 'Show'}</button>
        </div>
        <div className="library__code-block__content">
          {show ? (
            <Highlight className="javascript">
              {code.trim()}
            </Highlight>
          ) : (null)}
        </div>
      </div>
    );
  }
}

CodeBlock.propTypes = propTypes;

export default CodeBlock;
