import React, { PropTypes } from 'react';
import Row from './Row';
import Col from './Col';
import ArbitraryContent from './ArbitraryContent';

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
  fluid: PropTypes.bool,
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
  fluid: {
    description: 'Should the container be fluid',
    required: false,
    value: 'true|false',
  },
};

const exampleData = {
  children: (
    <div>
      <Row className="library__component__example-backgound">
        <Col className="library__component__example-border" xs={12} sm={6} md={8}>
          <ArbitraryContent content=".col-xs-12 .col-sm-6 .col-md-8" />
        </Col>
        <Col className="library__component__example-border" xs={6} md={4}>
          <ArbitraryContent content=".col-xs-6 .col-md-4" />
        </Col>
      </Row>
      <Row className="library__component__example-backgound">
        <Col className="library__component__example-border" xs={6} sm={4}>
          <ArbitraryContent content=".col-xs-6 .col-sm-4" />
        </Col>
        <Col className="library__component__example-border" xs={6} sm={4}>
          <ArbitraryContent content=".col-xs-6 .col-sm-4" />
        </Col>
        <Col className="library__component__example-border" xs={6} sm={4}>
          <ArbitraryContent content=".col-xs-6 .col-sm-4" />
        </Col>
      </Row>
    </div>
  ),
};

const Grid = ({
  children,
  fluid,
}) => (
  fluid ? (
    <div className="container-fluid">
      {children}
    </div>
  ) : (
    <div className="container">
      {children}
    </div>
  )
);

Grid.usage = usage;
Grid.description = description;
Grid.propTypes = propTypes;
Grid.docPropTypes = docPropTypes;
Grid.exampleData = exampleData;

export default Grid;
