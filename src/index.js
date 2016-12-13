import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Saved from './Saved'
import Search from './Search'
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/search" component={Search} />
      <Route path="/saved" component={Saved} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
