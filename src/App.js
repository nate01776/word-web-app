import React, { Component } from 'react';
import { Link } from 'react-router';
import Saved from './Saved.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">Words</Link>
          <Link to="/saved" activeClassName="active">Saved</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
