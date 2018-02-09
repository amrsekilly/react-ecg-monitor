import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Image } from 'react-bootstrap';

class Emergency extends Component {
  render() {
    return (
      <div className="App2">
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
             <Navbar.Brand>
                 <a href="#brand"></a>
             </Navbar.Brand>
             <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                   Emergencies
                </NavItem>
                <NavItem eventKey={2} href="#">
                   Patient's Info
                </NavItem>
                <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown">
                   <MenuItem eventKey={3.1}>Action</MenuItem>
                   <MenuItem eventKey={3.2}>Another action</MenuItem>
                   <MenuItem eventKey={3.3}>Something else here</MenuItem>
                   <MenuItem divider />
                   <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                 <NavItem eventKey={1} href="#">
                    Link Right
                 </NavItem>
                 <NavItem eventKey={2} href="#">
                    Link Right
                 </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>  
          <h1 className="emer">Emergencies:</h1>
          <div className="EmergencyCard">
          <Image src="https://csolsqs.com/male/image_20170930_225302_862.jpg" style={{width:"100px", marginBottom:"10px"}} responsive/>
              <h3>Ahmed Alaa</h3><br/>
          <h3>Condition</h3><h4 style={{ color: "red" }}>Showing cardiac arrest symptoms</h4><br/>
              Location Emergency Time
          </div>
      </div>
    );
  }
}

export default Emergency;