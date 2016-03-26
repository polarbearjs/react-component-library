import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Library from './LibraryContainer';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Library} />
    <Route path="/groups/:group" component={Library} />
  </Router>,
  document.getElementById('root')
);
