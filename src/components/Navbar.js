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
        <NavbarBrand href="/">nutrition</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/log/">log</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recipes/">recipes</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            { 
              loggedIn ? 
                <NavLink href="/signout">Sign Out</NavLink>
              : (
                <>
                <NavLink href="/signup">Sign Up</NavLink>
                <NavLink href="/login">Log In</NavLink>
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
