import React, { PropTypes } from 'react';
import Col from './Col';
import ArbitraryContent from './ArbitraryContent';
import classnames from 'classnames';


const description = `
  Container for elements inside of a grid.
`;

const usage = `
<Grid>
  <Row>
    <Col xs={1} md={1} lg={1}>
      ...
    </Col>
    <Col xs={1} md={1} lg={1}>
      ...
    </Col>
    ...
  </Row>
</Grid>
`;

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const docPropTypes = {
  children: {
    description: 'Child Elements',
    required: true,
    value: `
<Row>
  <Col xs={1} md={1} lg={1}>
    ...
  </Col>
  <Col xs={1} md={1} lg={1}>
    ...
  </Col>
  ...
</Row>
    `,
  },
  className: {
    description: 'Classes for the row',
    required: false,
    value: 'any__class or__set--of-classes',
  },
};

const exampleData = {
  className: 'library__component__example-backgound',
  children: (
    <div>
      <Col className="library__component__example-border" xs={12} sm={6} md={8}>
        <ArbitraryContent content=".col-xs-12 .col-sm-6 .col-md-8" />
      </Col>
      <Col className="library__component__example-border" xs={6} md={4}>
        <ArbitraryContent content=".col-xs-6 .col-md-4" />
      </Col>
    </div>
  ),
};

const Grid = ({
  children,
  className,
}) => (
  <div className={classnames('row', className)}>
    {children}
  </div>
);

Grid.usage = usage;
Grid.description = description;
Grid.propTypes = propTypes;
Grid.docPropTypes = docPropTypes;
Grid.exampleData = exampleData;

export default Grid;
