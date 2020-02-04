import React, { Component } from "react";
import { Form, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import Axios from "axios";

class AddEngine extends Component {
  state = {
    name: "",
    description: "",
    github_username: "",
    github_apikey: "",
    github_tech_stack: "MERN",
    blueprint: "default"
  };

  addEngine = () => {
    let newEngine = {
      name: this.state.name,
      description: this.state.description,
      blueprint: this.state.blueprint
    };

    Axios.post("/api/engines/add", newEngine)
      .then(response => {
        this.navigate();
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  navigate = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col md="4">
              <Form.Group>
                <h5>New Project</h5>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Project Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Blueprint</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  name="blueprint"
                  placeholder="Blueprint"
                  value={this.state.blueprint}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <h5> Github</h5>

              <Form.Group>
                <Form.Label>Github Instance</Form.Label>
                <Form.Control
                  disabled
                  type="text"
                  name="github_instance"
                  placeholder="Tech Stack"
                  value="http://github.com"
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="github_username"
                  placeholder="Github Username"
                  value={this.state.github_username}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="github_password"
                  placeholder="Github Password"
                  value={this.state.github_password}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Repository Name</Form.Label>
                <Form.Control
                  type="text"
                  name="repo_name"
                  placeholder="Repository Name"
                  value={this.state.github_reponame}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Base Code Tech Stack</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  name="github_tech_stack"
                  placeholder="Base Code Stack"
                  value={this.state.github_tech_stack}
                  onChange={this.onChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <ButtonToolbar>
                  <Button onClick={this.addEngine} variant="primary">
                    Create
                  </Button>
                  &nbsp;
                  <Button onClick={this.navigate} variant="secondary">
                    Cancel
                  </Button>
                </ButtonToolbar>
              </Form.Group>
            </Col>

            <Col md={4}>
              <h5>Jenkins</h5>
            </Col>
            <Col md={4}>
              <h5>SonarQube</h5>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddEngine;
