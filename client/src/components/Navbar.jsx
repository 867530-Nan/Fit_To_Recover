import React, { Component } from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import  Logo from './photodump/FTR-logo-hd-thumbnail.png';
import '../styles/navbar.css'

class NavBar extends Component {
    render() {
    return (
      <Menu stackable fixed="top" compact="true">
				<Menu.Item
          name='editorials'
          href='/'
        >
          Home
        </Menu.Item>

        <Dropdown name='About Us' text='About Us' pointing tabular className='link item'>
		      <Dropdown.Menu>
		        <Menu.Item href='/philosophy'>Philosophy</Menu.Item>
		        <Dropdown.Divider />
		        <Menu.Item href='/ourhistory'>Our History</Menu.Item>
						<Dropdown.Divider />
						<Menu.Item href="/testimonials">Testimonials</Menu.Item>
		      </Dropdown.Menu>
				</Dropdown>

				<Dropdown name='Programs' text='Programs' pointing className='link item'>
		      <Dropdown.Menu>
		        <Menu.Item href='/fitness'>Fitness</Menu.Item>
		        <Dropdown.Divider />
		        <Menu.Item href='/creativearts'>Creative Arts</Menu.Item>
						<Dropdown.Divider />
						<Menu.Item href="/nutrition">Nutrition</Menu.Item>
						<Dropdown.Divider />
						<Menu.Item href="/communityservices">Community Service</Menu.Item>
		      </Dropdown.Menu>
				</Dropdown>

				<Dropdown name='Media' text='Media' pointing className='link item'>
		      <Dropdown.Menu>
		        <Menu.Item href='/Gallery'>Gallery</Menu.Item>
		        <Dropdown.Divider />
		        <Menu.Item href='/newsletterarchive'>Newsletter Archive</Menu.Item>
		      </Dropdown.Menu>
				</Dropdown>

				<Dropdown name='Team FTR' text='Team FTR' pointing className='link item'>
		      <Dropdown.Menu>
		      	<Menu.Item href='/currentstaff'>Current Staff</Menu.Item>
		        <Dropdown.Divider />
		        <Menu.Item href='/board'>Board of Directors</Menu.Item>
		        <Dropdown.Divider />
		        <Menu.Item href='/contact'>Contact Us</Menu.Item>
		      </Dropdown.Menu>
				</Dropdown>

				<Menu.Item>
					<img src={Logo}/>
				</Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;
