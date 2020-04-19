import React, { Component } from "react";
import { Form, Button, ButtonToolbar } from "react-bootstrap";
import Axios from "axios";
// import { TextField } from "../../components/Inputs/TextField/TextField";

class AddEngine extends Component {
  state = {
    engineName: "",
    engineDescription: "",
    blueprint: "",
    blueprintData: "",
    sample: {
      github: {
        repositoryName: "TEST",
        branches: [
          {
            branchName: "dev"
          }
        ]
      },
      sonar: {
        projectName: "TEST",
        projectID: "TES",
        qualityGateName: "QG-TEST"
      }
    }
  };

  addEngine = () => {
    let newEngine = {
      name: this.state.name,
      description: this.state.description,
      blueprintName: this.state.blueprint
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

  componentDidMount = () => {
    fetch(`/api/blueprints/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let copy = data.name;
        let copyBPData = data.blueprintData;

        console.log(copy);
        this.setState({ blueprint: copy, blueprintData: copyBPData });
      });
  };

  // renderInputFields = blueprintData => {
  //   let keysArray = Object.keys(blueprintData);
  //   console.log("KeysArray", keysArray);
  //   let parentKey = "";

  //   if (keysArray.length >= 1) {
  //     return keysArray.map((key, index) => {
  //       // console.log("KEY==", key);
  //       // console.log("TYPE_OF_KEY==", typeof key);
  //       // console.log("TYPE_OF_PARENT_KEY==", typeof blueprintData[key]);

  //       if (
  //         typeof blueprintData[key] === "object" &&
  //         !Array.isArray(blueprintData[key])
  //       ) {
  //         // console.log(blueprintData[key]);
  //         return (
  //           <React.Fragment>
  //             <h5>{key.toUpperCase()}</h5>
  //             {this.renderInputFields(blueprintData[key])}
  //           </React.Fragment>
  //         );
  //       } else if (Array.isArray(blueprintData[key])) {
  //         return this.renderInputFields(blueprintData[key]);
  //       } else if (typeof blueprintData[key] === "string") {
  //         // console.log("FINAL====");
  //         // console.log(key, blueprintData[key]);

  //         return (
  //           <TextField
  //             label={key}
  //             name={key}
  //             value={blueprintData[key]}
  //             disabled={false}
  //           ></TextField>
  //         );
  //       }
  //     });
  //   } else {
  //     console.log("Not entering");
  //   }
  // };

  render() {
    const { blueprint, name, description, blueprintData } = this.state;

    return (
      <div>
        <Form>
          <Form.Group>
            <h5>New Project</h5>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project Name"
              name="name"
              value={name}
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
              value={description}
              onChange={this.onChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="blueprint"
              placeholder="Blueprint"
              value={blueprint}
              disabled
            ></Form.Control>
          </Form.Group>
          {/* {this.renderInputFields(this.state.sample)} */}
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
        </Form>
      </div>
    );
  }
}

export default AddEngine;
