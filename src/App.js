import React, { Component } from 'react';
import './App.css';
import ECG from './ECG';
import Emergency from './Emergency';

import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Emergency />
        <ECG />
      </div>
    );
  }
}

export default App;
