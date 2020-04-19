import React, { Component } from "react";
import Axios from "axios";

class ViewBlueprint extends Component {
  state = {
    blueprint: {}
  };

  componentDidMount() {
    Axios.get(`/api/blueprints/${this.props.match.params.id}`)
      .then(response => {
        console.log("Helloooooo", response.data);
        let copy = { ...this.state.blueprint };
        copy = response.data;
        this.setState({ blueprint: copy });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { blueprint } = this.state;

    return (
      <div>
        <h5>{blueprint.name}</h5>

        <p>{blueprint.description}</p>
        <code>{JSON.stringify(blueprint.blueprintData)}</code>
      </div>
    );
  }
}

export default ViewBlueprint;
