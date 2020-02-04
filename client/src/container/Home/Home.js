import React, { Component } from "react";
import { Container, Button, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
// import CustomCard from "../../components/Card/CustomCard";
import moment from "moment";

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
      <>
        <div style={{ marginTop: "1rem" }}>
          <h4 style={{ float: "left" }}>
            Actively running {engines.length} projects
          </h4>
          <div style={{ float: "right", marginTop: "5px" }}>
            <Button onClick={this.navigate}>New</Button>
          </div>
        </div>
        <div style={{ clear: "both" }}>
          <Row>
            <Table responsive hover bordered>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Blueprint</th>
                  <th>Status</th>
                  <th>Created On</th>
                </tr>
              </thead>
              <tbody>
                {engines.map((engine, index) => {
                  return (
                    <tr key={engine._id}>
                      <td scope="1">{index + 1}</td>
                      <td>{engine.name}</td>
                      <td>{engine.blueprint}</td>
                      <td>{engine.status}</td>
                      <td>{moment(engine.createdOn).format("MMM Do YYYY")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
