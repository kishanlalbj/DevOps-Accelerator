import React, { Component } from "react";
// import SideBar from "../../components/Sidebar/SideBar";
import { Container, Button, Modal, Badge, Row, Col } from "react-bootstrap";
import CustomCard from "../../components/Card/CustomCard";
import axios from "axios";

class Blueprint extends Component {
  state = {
    blueprints: []
  };

  componentDidMount() {
    axios
      .get("/api/blueprints/all")
      .then(response => {
        let copy = [...this.state.blueprints];
        copy = response.data;
        this.setState({ blueprints: copy });
      })
      .catch(err => {
        console.log(err);
      });
  }

  showBlueprint = name => {
    this.setState(prevState => {
      return {
        showmodel: true,
        blueprintName: name
      };
    });
  };

  render() {
    const { blueprints } = this.state;
    return (
      <div>
        <div>
          <br></br>
          <h4 style={{ float: "left" }}>Select a blueprint</h4>
        </div>
        <div style={{ float: "right" }}>
          <Button disabled> New </Button>
        </div>

        <div style={{ clear: "both" }}>
          <Row>
            {blueprints.map((blueprint, index) => {
              return (
                <Col sm={4} key={index}>
                  <CustomCard
                    width="100%"
                    showFooter
                    showblueprint={this.showBlueprint}
                    name={blueprint.name}
                    description={blueprint.description}
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
