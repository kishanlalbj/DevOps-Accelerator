import React from "react";
import { Form, Button } from "react-bootstrap";

const Registration = props => {
  const onSignup = () => {
    props.onSignup();
  };
  return (
    <div>
      <center>
        <h5>Register</h5>
      </center>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check
            type="checkbox"
            label="I read all the terms and conditions"
          />
        </Form.Group>
        <Button
          onClick={onSignup}
          style={{ backgroundColor: "#343a40", border: "none" }}
          type="submit"
        >
          Sign Up
        </Button>
        &nbsp;&nbsp; &nbsp;&nbsp;
        <p>
          Already have an account ? &nbsp;
          <Button
            onClick={onSignup}
            style={{ backgroundColor: "#343a40", border: "none" }}
            type="submit"
          >
            Login
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
