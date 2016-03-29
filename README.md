# React Component Library

This is a scaffold for a react component library.

* Expose your design as react components in a separate module so you can use them across multiple projects
* Expose compiled assets so they can be used in other projects
* Expose compiled assets with a custom loader that can be consumed by webpack
* View your components inside of a fancy library

![preview](docs/screen.jpg)

# Getting Started

### Requirements

* node ^3.0.0

### Starting a dev server

```
chmod +x ./bin/library-server // You only have to run this once this makes the server executable
chmod +x ./bin/build // You only have to run this once this makes the build executable

./bin/library-server // This starts a server on port 8080
or
PORT=xxxx ./bin/library-server // This starts a server on a custom PORT
```

The dev server will watch your filesystem for changes and automagically recompile assets and reload your library

### Compiling Assets

<strong>This should be done before every commit and will be set up as a pre commit hook</strong>

Assets will be checked in to version control so they can be used in client applications loaders.

```
npm build // will compile assets into dist/ folder and source in to the lib folder
```
# Importing styles from another project

Include a reference to your component library in your package.json

### If you published to npm

```js
{
  ...
  dependencies: {
    ...
    'your-package-name': 'version'
  },
  ...
}
```

### Styleguide hosted with git

```js
{
  ...
  dependencies: {
    ...
    'your-package-name': 'git://github.com/user/your-component-library.git#commit'
  },
  ...
}
```

## Basic

Once you have a reference to the project your styles will live in

* `node_modules/your-package-name/dist/normalize.css`
* `node_modules/your-package-name/dist/highlight.css`
* `node_modules/your-package-name/dist/library.css`
* `node_modules/your-package-name/dist/application.css`

You will probably want to set up a step in your build process that copies the files from `node_modules` into your asset folder.

## Webpack

The simplest route is to add the stylesheets as entry points to your webpack config.

```js
{
  entry: [
    ...
    './node_modules/your-package-name/dist/normalize.css',
    './node_modules/your-package-name/dist/highlight.css',
    './node_modules/your-package-name/dist/library.css',
    './node_modules/your-package-name/dist/application.css',
  ],
  ...
  module: {
    loaders: [
      ...
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      }
    ]
}
```

Or to require them from node modules

ES5
```js
require('./node_modules/your-package-name/dist/library.css');
require('./node_modules/your-package-name/dist/library.css');
```

ES2015
```js
import './node_modules/your-package-name/dist/library.css';
import './node_modules/your-package-name/dist/library.css';
```

# Importing components from another project

Include a reference to your component library in your package.json

### If you published to npm

```js
{
  ...
  dependencies: {
    ...
    'your-package-name': 'version'
  },
  ...
}
```

### Styleguide hosted with git

```js
{
  ...
  dependencies: {
    ...
    'your-package-name': 'git://github.com/user/your-component-library.git#commit'
  },
  ...
}
```

Once you have that you can import components based on their groups

ES2015
```js
import * as Groups from 'your-package-name';
const { atoms: { Grid, Row, Col } } = Groups;

const render = () => (
  <Grid>
    <Row>
      <Col xs={6}>
        Content
      </Col>
      <Col xs={6}>
        Content
      </Col>
    </Row>
  </Grid>
);
```

ES5
```js
var components = require('your-package-name');

var Grid = components.atoms.Grid;
var Row = components.atoms.Row;
var Col = components.atoms.Col;

function render() {}
  return (
    <Grid>
      <Row>
        <Col xs={6}>
          Content
        </Col>
        <Col xs={6}>
          Content
        </Col>
      </Row>
    </Grid>
  )
}
```

# Defining Components

Components are defined in groups and live under `/components`.

A good baseline is [Atomic Design](http://patternlab.io/about.html) the groups being `atoms, molecules, organisms, templates, pages`

The folder structure for this would be

```
./components
  ./atoms
    SomeAtom.js
    SomeOtherAtom.js
    ...
    index.js
  ./molecules
    SomeMolecule.js
    ...
    index.js
  ./organisms
    SomeOrganisim.js
    ...
    index.js
  ./templates
    SomeTemplate.js
    ...
    index.js
  ./pages
    SomePage.js
    index.js
  index.js
```

The `index.js` for components.

```js
// define groups in order you want them to appear in Library
import * as atoms from './atoms'
import * as molecules from './molecules'
import * as organisms from './organisms'
import * as templates from './templates'
import * as pages from './pages'
```

The `index.js` for a group.

```js
// define components in order you want them to appear in the library
export SomeAtom from './SomeAtom';
export SomeOtherAtom from './SomeOtherAtom';
...
```

# Defining a component

The basic structure is

ES2015
```js
import React, { PropTypes } from 'react';

const description = `
  A react component of sorts
`;

const usage = `
<Compy
  prop={'value'}
/>
`;

const propTypes = {
  prop: PropTypes.string.isRequired,
};

const docPropTypes = {
  prop: {
    description: 'Some Prop',
    required: true,
    value: `Some Value`,
  },
};

const exampleData = {
  prop: 'I am example data',
};

const Compy = ({
  prop,
}) => (
  <span>
    {prop}
  </span>
);

Compy.description = description;
Compy.usage = usage;
Compy.propTypes = propTypes;
Compy.docPropTypes = docPropTypes;
Compy.exampleData = exampleData;

export default Compy;
```

### Description

Description is a brief summary for your component and will be the first thing displayed after the title of your component in the library.

Remember to add this as a property on your component.

```js
Component.description = description;
```

### Usage

Usage is an example of how to use your component. It's a multi line string. And should have no left padding but can have blank top and bottom lines.

We played with generating this but wound up not doing it because components with children need to have a sensible indented structure.

### docPropTypes

Documentation for your properties that will be output as a table.

We wish we could infer this from normal `propTypes` but it's not feasible in this setup because it involves a AST of each component and augmenting that.

It's structure is

```js
const docPropTypes = {
  prop: {
    description: 'Some Prop',
    required: true,
    value: ``,
  },
  otherProp: {
    ...
  },
};
```

#### description

A quick description of the component.

#### required

Wether the prop is required or not.

#### value

An example value for the property.

### Example data

This will be used to render a preview of your component.

```js
const exampleData = {
  prop: 'I am example data',
  children: (
    <div>
      <div>
        <div>
          <span>This is how you define children.
        </div>
      </div>
    </div>
  )
};
```

# Fin.
