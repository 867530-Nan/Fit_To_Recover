import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Navbar, MenuItem, NavDropdown, NavItem, Nav } from 'react-bootstrap';
import  Logo from './photodump/FTR-logo-hd-thumbnail.png';
import '../styles/navbar.css'

class NavBar extends Component {
    render() {
    return (
      
		<Navbar collapseOnSelect fixedTop fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <img href="/" src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <MenuItem eventKey={1} href='/home'>Home</MenuItem>
      	<NavDropdown eventKey={1} title="About Us" id="basic-nav-dropdown">
          <MenuItem eventKey={1.1} href='/philosophy'>Philosophy</MenuItem>
          <MenuItem eventKey={1.2} href='/ourhistory'>Our History</MenuItem>
          <MenuItem eventKey={1.3} href='/testimonials'>Testimonials</MenuItem>
        </NavDropdown>
      	<NavDropdown eventKey={2} title="Programs" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1} href='/fitness'>Fitness</MenuItem>
          <MenuItem eventKey={2.2} href='/creativearts'>Creative Arts</MenuItem>
          <MenuItem eventKey={2.3} href='/nutrition'>Nutrition</MenuItem>
          <MenuItem eventKey={2.4} href='/communityservice'>Community Service</MenuItem>
        </NavDropdown>
     	 	<NavDropdown eventKey={3} title="Media" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href='/gallery'>Gallery</MenuItem>
          <MenuItem eventKey={3.2} href='/newsletterarchive'>Newsletter Archive</MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={4} title="Team FTR" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1} href='/currentstaff'>Current Staff</MenuItem>
          <MenuItem eventKey={4.2} href='/board'>Board of Directors</MenuItem>
          <MenuItem eventKey={4.3} href='/contact'>Contact Us</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}

export default NavBar;
