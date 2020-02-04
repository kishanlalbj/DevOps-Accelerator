import React, { Component } from "react";
import "./Landing.css";
import { Row, Col } from "react-bootstrap";
import Login from "../../components/Login/Login";
import Registration from "../../components/Registration/Registration";
import axios from "axios";
import setAuthHeader from "../../utils/setAuthHeader";

class Landing extends Component {
  state = {
    login: true,
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = e => {
    e.preventDefault();
    let { email, password } = this.state;
    let obj = {
      email,
      password
    };

    axios
      .post("/api/auth/login", obj)
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("jwt-token", `Bearer ${response.data.token}`);
          setAuthHeader(`Bearer ${response.data.token}`);
          this.props.history.push("/home");
        } else {
          console.log("Login Failed");
        }
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  onSignup = () => {
    console.log("Signed Up");

    let { firstName, lastName, email, password } = this.state;
    let obj = {
      firstName,
      lastName,
      email,
      password
    };

    axios
      .post("/api/auth/register", obj)
      .then(response => {
        console.log(response.data);
        this.toggleForm();
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  toggleForm = () => {
    this.setState(prevState => {
      return { login: !prevState.login };
    });
  };

  render() {
    const { login } = this.state;
    return (
      <React.Fragment>
        <Row style={{ marginRight: "15px" }}>
          <Col md="8">
            <div className="hero">
              <div className="hero-textbox">
                <h1>
                  <span className="hero-main-text">DevOps Accelerator</span>
                  <span className="hero-sub-text">
                    <center>
                      Create CI CD pipelines for your applications in minutes
                    </center>
                  </span>
                </h1>
              </div>
            </div>
          </Col>

          <Col md="3">
            <div className="form">
              {login ? (
                <Login
                  onLogin={this.onLogin}
                  email={this.state.email}
                  password={this.state.password}
                  onChange={this.onChange}
                  toggleForm={this.toggleForm}
                />
              ) : (
                <Registration
                  onSignup={this.onSignup}
                  toggleForm={this.toggleForm}
                />
              )}
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Landing;
