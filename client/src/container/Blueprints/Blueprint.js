import React, { Component } from "react";
import SideBar from "../../components/Sidebar/SideBar";
import { Container, Button, Card, Badge, Row, Col } from "react-bootstrap";
import CustomCard from "../../components/Card/CustomCard";
import axios from "axios";

class Blueprint extends Component {
  state = {
    lists: [
      {
        name: "Technology"
      },
      {
        name: "General"
      }
    ],
    blueprints: [
      {
        name: "TJX FASTLANE",
        category: "general",
        description: "Fastlane onboarding"
      },
      {
        name: "TJX SCDS",
        category: "general",
        description: "Migration Pipeline"
      }
    ]
  };

  componentDidMount() {
    axios
      .get("/api/blueprints/")
      .then(response => {
        let copy = [...this.state.blueprints];
        copy = response.data;
        this.setState({ blueprints: copy });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { blueprints } = this.state;
    return (
      <div>
        {/* <SideBar width="300" backgroundColor="#eee" lists={this.state.lists} /> */}
        <Container>
          <div>
            <br></br>
            <h4 style={{ float: "left" }}>Select a blueprint</h4>
            <br></br>
            <br></br>
            {/* <div style={{ float: "right", marginTop: "5px" }}>
              <Button>New Blueprint</Button>
            </div> */}
          </div>

          <div style={{ clear: "both" }}>
            <Row>
              {blueprints.map((blueprint, index) => {
                return (
                  <Col sm={4} key={index}>
                    <CustomCard
                      width="100%"
                      showFooter
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
        </Container>
      </div>
    );
  }
}
export default Blueprint;
