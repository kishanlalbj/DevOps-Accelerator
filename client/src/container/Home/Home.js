import React, { Component } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import CustomCard from "../../components/Card/CustomCard";
// import moment from "moment";

class Home extends Component {
  state = {
    engines: [],
    showModal: false,
    errorMessage: ""
  };

  componentDidMount() {
    axios
      .get("/api/engines/all")
      .then(response => {
        console.log("response", response.data);
        let copy = [...this.state.engines];
        copy.push(response.data);
        this.setState({ engines: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  navigate = () => {
    console.log("clicked");
    this.props.history.push("/addengine");
  };

  render() {
    const { engines, showModal } = this.state;
    return (
      <div>
        <Container>
          <div>
            <h2 style={{ float: "left" }}>Engines</h2>
            <div style={{ float: "right", marginTop: "5px" }}>
              <Button onClick={this.navigate}>New Engine</Button>
            </div>
          </div>
          <div style={{ clear: "both" }}>
            <Row>
              {engines.map((engine, index) => {
                return (
                  <Col sm={3}>
                    <CustomCard
                      width={"100"}
                      showFooter={false}
                      key={index}
                      name={engine.name}
                      description={engine.description}
                      user={engine.user}
                    />
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

export default Home;
