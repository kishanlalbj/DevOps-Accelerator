import React from "react";
import { Navbar } from "react-bootstrap";
const Nav = props => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Nav;
