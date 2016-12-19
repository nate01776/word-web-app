import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/search" className="page-name">Words</Link>
          {/* great work using activeClassName! */}
          <Link to="/saved" activeClassName="save-link-active" className="save-link">Saved</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
