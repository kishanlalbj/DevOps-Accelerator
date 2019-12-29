import React, { Component } from "react";

import { Navbar } from "react-bootstrap";
import axios from "axios";
class Nav extends Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    axios
      .get("/api/auth/isAuthenticated")
      .then(response => {
        if (response.data === "authenticated") {
          console.log(response.data);
          this.setState({ isAuthenticated: true });
        }
      })
      .catch(err => {
        this.setState({ isAuthenticated: false });
      });
  }

  logout = () => {
    axios
      .get("/api/auth/logout")
      .then(response => {
        console.log(response);
        localStorage.removeItem("jwt-token");
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.props.brand}</Navbar.Brand>
          {isAuthenticated ? (
            <>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <p style={{ color: "white" }} onClick={this.logout}>
                  Logout
                </p>
              </Navbar.Collapse>
            </>
          ) : null}
        </Navbar>
      </div>
    );
  }
}

export default Nav;
