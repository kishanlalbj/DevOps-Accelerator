import React, { Component } from "react";
import { Form, Container, Button, ButtonToolbar } from "react-bootstrap";
import Axios from "axios";

class AddEngine extends Component {
  state = {
    name: "",
    description: "",
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
        <br></br>
        <Container>
          <h4>Add New Engine</h4>
          <Form>
            <Form.Group>
              <Form.Label>Engine Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Engine Name"
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

            <Form.Group>
              <ButtonToolbar>
                <Button onClick={this.addEngine} variant="primary">
                  Build Engine
                </Button>
                &nbsp;
                <Button onClick={this.navigate} variant="secondary">
                  Cancel
                </Button>
              </ButtonToolbar>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddEngine;
