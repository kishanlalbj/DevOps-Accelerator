import React, { Component } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";

class Tools extends Component {
  render() {
    return (
      <div>
        <br></br>
        <Row>
          <Col md={6}>
            <div style={{ float: "left" }}>
              <h5> Github </h5>
            </div>
            <div style={{ float: "right" }}></div>
            <Table
              bordered
              style={{
                clear: "both"
              }}
            >
              <thead
                style={{
                  backgroundColor: "dimgray",
                  borderColor: "dimgray",
                  color: "white"
                }}
              >
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th colSpan="2">URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Github</td>
                  <td>
                    <a
                      target="_blank"
                      href="https://github.com"
                      rel="noopener noreferrer"
                    >
                      https://github.com
                    </a>
                  </td>
                  <td>configure</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6}>
            <div style={{ float: "left" }}>
              <h5> Jenkins </h5>
            </div>
            <div style={{ float: "right" }}>
              <Button>New</Button>
            </div>

            <Table bordered res>
              <thead
                style={{
                  backgroundColor: "dimgray",
                  borderColor: "dimgray",
                  color: "white"
                }}
              >
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Production</td>
                  <td>https://jenkins.kl.com</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Dev</td>
                  <td>https://dev.jenkins.kl.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6}>
            <div style={{ float: "left" }}>
              <h5>Sonar</h5>
            </div>
            <div style={{ float: "right" }}>
              <Button>New</Button>
            </div>
            <Table bordered>
              <thead
                style={{
                  backgroundColor: "dimgray",
                  borderColor: "dimgray",
                  color: "white"
                }}
              >
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Production</td>
                  <td>https://sonarqube.kl.com</td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Dev</td>
                  <td>https://dev.sonarqube.kl.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tools;
