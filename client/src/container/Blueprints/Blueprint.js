import React, { Component } from "react";
// import SideBar from "../../components/Sidebar/SideBar";
import { Button, Badge, Row, Col } from "react-bootstrap";
import CustomCard from "../../components/Card/CustomCard";
import axios from "axios";

class Blueprint extends Component {
  state = {
    blueprints: [],
    currentBlueprintToDisplay: {}
  };

  componentDidMount() {
    axios
      .get("/api/blueprints/all")
      .then(response => {
        console.log(response.data);
        let copy = [...this.state.blueprints];
        copy = response.data;
        this.setState({ blueprints: copy });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onShowBlueprint = blueprintId => {
    this.props.history.push(`/blueprint/${blueprintId}`);
  };

  onSelectBlueprint = blueprintId => {
    this.props.history.push(`/engine/create/${blueprintId}`);
  };

  render() {
    const { blueprints, currentBlueprintToDisplay } = this.state;
    console.log(currentBlueprintToDisplay);
    return (
      <div>
        <div>
          <br></br>
          <h4 style={{ float: "left" }}>Available Blueprints</h4>
        </div>
        <div style={{ float: "right" }}>
          <Button disabled> New </Button>
        </div>

        <div style={{ clear: "both" }}>
          <Row>
            {blueprints.map(blueprint => {
              return (
                <Col sm={4} key={blueprint._id}>
                  <CustomCard
                    id={blueprint._id}
                    width="100%"
                    showFooter
                    name={blueprint.name}
                    description={blueprint.description}
                    onView={this.onShowBlueprint}
                    onSelect={this.onSelectBlueprint}
                  >
                    <Badge variant="primary"> {blueprint.category} </Badge>
                  </CustomCard>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Blueprint;
