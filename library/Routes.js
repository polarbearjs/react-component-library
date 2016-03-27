import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Library from './LibraryContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Library} />
    <Route path="/groups/:group" component={Library} />
  </Router>
);
