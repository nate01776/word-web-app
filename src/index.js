import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Saved from './Saved'
import ApiConnect from './ApiConnect'
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/saved" component={Saved} />
      <Route path="/connect" component={ApiConnect} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
