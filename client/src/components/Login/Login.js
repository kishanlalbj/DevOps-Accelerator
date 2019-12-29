import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = props => {
  const onLogin = e => {
    props.onLogin(e);
  };
  const toggleForm = () => {
    props.toggleForm();
  };

  return (
    <div>
      <center>
        <h5>Login</h5>
      </center>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={props.email}
            name="email"
            onChange={props.onChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={props.password}
            name="password"
            onChange={props.onChange}
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: "#343a40", border: "none" }}
          onClick={onLogin}
          type="submit"
        >
          Login
        </Button>
        &nbsp;&nbsp;
        <Button
          style={{ backgroundColor: "#343a40", border: "none" }}
          onClick={toggleForm}
        >
          Register
        </Button>
        &nbsp;&nbsp;
        <a>Forgot Password ?</a>
      </Form>
    </div>
  );
};

export default Login;
