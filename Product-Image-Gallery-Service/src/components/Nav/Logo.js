import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import TopNav from './TopNav.js';

const Logo = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Header>
        <Navbar.Brand> 
          <a href="/">
            <Image id="brand" src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" />
          </a> 
        </Navbar.Brand>
      </Navbar.Header>
      <TopNav /> 
    </Navbar>
  )
}

export default Logo;
