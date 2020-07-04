import React, { useState } from "react";
import {
  Collapse,
  Navbar as ReactStrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

const Navbar = ({ loggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <ReactStrapNavbar color="light" light expand="md">
        <NavbarBrand className="nav-part" href="/">nutrition</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="nav-part">
              <NavLink href="/log/">log food</NavLink>
            </NavItem>
            <NavItem className="nav-part">
              <NavLink href="/journal/">journal</NavLink>
            </NavItem>
            <NavItem className="nav-part">
              <NavLink href="/recipes/">recipes</NavLink>
            </NavItem>
            <NavItem className="nav-part">
              <NavLink href="/calculator/">calculator</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            { 
              loggedIn ? 
                <NavLink className="nav-part" href="/signout">Sign Out</NavLink>
              : (
                <>
                <NavLink className="nav-part" href="/signup">Sign Up</NavLink>
                <NavLink className="nav-part" href="/login">Log In</NavLink>
                </>
              ) 

            }
          </Nav>
          <NavbarText>food is made of stuff</NavbarText>
        </Collapse>
      </ReactStrapNavbar>
    </div>
  );
};

export default Navbar;
