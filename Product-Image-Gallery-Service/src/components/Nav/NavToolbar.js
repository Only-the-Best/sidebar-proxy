import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';

const NavToolbar = ({height, slider}) => {
  return (
    <Navbar id="nav-toolbar" fixedTop={height}>
    <Nav id={slider}>  
      <NavItem id={height ? 'navItem-contact-highlight': 'navItem-contact'}>CONTACT AGENT</NavItem> 
      <NavItem><i className="far fa-heart"></i>SAVE</NavItem> 
      <NavItem><i className="fas fa-envelope-square"></i>SHARE</NavItem>
      <NavDropdown title="MORE" id="SubNav-dropdowns">
          <MenuItem >Print</MenuItem> 
          <MenuItem >Get New Listings In Email</MenuItem>
          <MenuItem divider />
          <MenuItem>Edit listing, photo, and price</MenuItem>
          <MenuItem>Claim this listing</MenuItem>
          <MenuItem>Report problem with listing</MenuItem> 
      </NavDropdown>
    </Nav>    
    </Navbar>
  )
}

export default NavToolbar;
