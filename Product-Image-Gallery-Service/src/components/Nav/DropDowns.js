import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

const DropDowns = ({header, dropDownHeader, dropDownList }) => {
  return (
  <NavDropdown className="Nav-top-bar-header" id="dropdowns-list" title={header}>
      <div id="drop-down-list-header-container">
        <span id="drop-down-list-header">{dropDownHeader}</span>
      </div>
      <div id="drop-down-list-container">
        {dropDownList.map((dropList, i) => <MenuItem key={i}>{dropList}</MenuItem>) }
      </div>
  </NavDropdown>
  ) 
}

export default DropDowns;