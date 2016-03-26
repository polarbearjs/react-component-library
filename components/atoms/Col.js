import React, { PropTypes } from 'react';
import ArbitraryContent from './ArbitraryContent';
import classnames from 'classnames';

const description = `
  Container for elements inside of a grid.
`;

const usage = `
<Row>
  <Col xs={1} md={1} lg={1}>
    ...
  </Col>
  <Col xs={1} md={1} lg={1}>
    ...
  </Col>
  ...
</Row>
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  xs: PropTypes.number.isRequired,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xsPull: PropTypes.number,
  smPull: PropTypes.number,
  mdPull: PropTypes.number,
  lgPull: PropTypes.number,
};

const docPropTypes = {
  children: {
    description: 'Child Elements',
    required: true,
    value: `
<div>
  Any Html
  <OrReactComponents />
</div>
    `,
  },
  className: {
    description: 'Classes for the col',
    required: false,
    value: 'any__class or__set--of-classes',
  },
  xs: {
    description: 'Col size on extra small screens (smaller than 34em)',
    required: true,
    value: '1-12',
  },
  sm: {
    description: 'Col size on small screens (larger than 34em, smaller than 62em)',
    required: false,
    value: '1-12',
  },
  md: {
    description: 'Col size on small screens (larger than 62em, smaller than 75em)',
    required: false,
    value: '1-12',
  },
  lg: {
    description: 'Col size on small screens (larger than 75em)',
    required: false,
    value: '1-12',
  },
  xsOffset: {
    description: 'Offset on extra small screens (smaller than 34em)',
    required: false,
    value: '1-12',
  },
  smOffset: {
    description: 'Offset on small screens (larger than 34em, smaller than 62em)',
    required: false,
    value: '1-12',
  },
  mdOffset: {
    description: 'Offset on small screens (larger than 62em, smaller than 75em)',
    required: false,
    value: '1-12',
  },
  lgOffset: {
    description: 'Offset on small screens (larger than 75em)',
    required: false,
    value: '1-12',
  },
  xsPull: {
    description: 'Pull on extra small screens (smaller than 34em)',
    required: false,
    value: '1-12',
  },
  smPull: {
    description: 'Pull on small screens (larger than 34em, smaller than 62em)',
    required: false,
    value: '1-12',
  },
  mdPull: {
    description: 'Pull on small screens (larger than 62em, smaller than 75em)',
    required: false,
    value: '1-12',
  },
  lgPull: {
    description: 'Pull on small screens (larger than 75em)',
    required: false,
    value: '1-12',
  },
};

const exampleData = {
  children: (
    <ArbitraryContent />
  ),
  xs: 5,
  sm: 6,
  md: 7,
  lg: 8,
};

const Row = ({
  children,
  className,
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xsPull,
  smPull,
  mdPull,
  lgPull,
}) => (
  <div className={classnames(className, {
    [`col-xs-${xs}`]: true,
    [`col-sm-${sm}`]: !!sm,
    [`col-md-${md}`]: !!md,
    [`col-lg-${lg}`]: !!lg,
    [`col-xs-offset-${xsOffset}`]: !!xsOffset,
    [`col-sm-offset-${smOffset}`]: !!smOffset,
    [`col-md-offset-${mdOffset}`]: !!mdOffset,
    [`col-lg-offset-${lgOffset}`]: !!lgOffset,
    [`col-xs-pull-${xsOffset}`]: !!xsPull,
    [`col-sm-pull-${smOffset}`]: !!smPull,
    [`col-md-pull-${mdOffset}`]: !!mdPull,
    [`col-lg-pull-${lgOffset}`]: !!lgPull,
  })}
  >
    {children}
  </div>
);

Row.usage = usage;
Row.description = description;
Row.propTypes = propTypes;
Row.docPropTypes = docPropTypes;
Row.exampleData = exampleData;

export default Row;
