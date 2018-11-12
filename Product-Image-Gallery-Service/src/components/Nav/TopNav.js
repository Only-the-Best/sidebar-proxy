import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import DropDowns from './DropDowns';
import DropDownList from './DropDownList.js';


const headerArr= Object.keys(DropDownList);
const dropDownHeader = Object.values(DropDownList);

export class TopNav extends React.Component {

  render() {
    return (
      <Navbar className="navbar-main" collapseOnSelect>
      <Navbar.Collapse>
        <Nav>
          {
            headerArr.map((header, i) => 
            <DropDowns header={header}
                       dropDownHeader={dropDownHeader[i].subHeader}
                       dropDownList={dropDownHeader[i].list}
                       key={i} />)
          }
          <Nav id="nav-top-main-right">
            <NavItem id="Nav-top-right1" href="#">List your rental</NavItem>
            <NavItem id="Nav-top-right2" href="#">Advertise</NavItem>
            <NavItem id="Nav-top-right3" href="#">Sign in</NavItem>
            <NavItem id="Nav-top-right3" href="#">Join</NavItem>
          </Nav>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }  
}

export default TopNav;