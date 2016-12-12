import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/saved" component={Saved} />
    <Route path="/connect" component={ApiConnect}
  </Router>
  ), document.getElementById('root')
);
