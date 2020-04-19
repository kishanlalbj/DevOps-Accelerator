import React, { Component } from "react";

import { Navbar } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/auth/auth.actions";

class Nav extends Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    // axios
    //   .get("/api/auth/isAuthenticated")
    //   .then(response => {
    //     if (response.data === "authenticated") {
    //       console.log(response.data);
    //       this.setState({ isAuthenticated: true });
    //     }
    //   })
    //   .catch(err => {
    //     this.setState({ isAuthenticated: false });
    //   });
  }

  logout = () => {
    axios
      .get("/api/auth/logout")
      .then(response => {
        console.log(response);
        localStorage.removeItem("jwt-token");
        this.props.setCurrentUser(null);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.currentUser);
    return (
      <Navbar bg="dark" variant="dark" style={{ height: "50px" }}>
        <Navbar.Brand>{this.props.brand}</Navbar.Brand>
        {this.props.currentUser ? (
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
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUser(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
