import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Nav/Nav";
import Landing from "./Landing/Landing";
import Blueprint from "./Blueprints/Blueprint";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import setAuthHeader from "../utils/setAuthHeader";
import Axios from "axios";
import AddEngine from "./Home/AddEngine";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar/SideBar";
import Users from "./Users/Users";
import Tools from "./Tools/Tools";

// import Footer from "../components/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    if (localStorage.getItem("jwt-token")) {
      setAuthHeader(localStorage.getItem("jwt-token"));
    } else {
      setAuthHeader(null);
    }
  }

  componentDidMount() {
    Axios.get("/api/auth/isAuthenticated")
      .then(response => {
        console.log(response.data);
        if (response.data === "authenticated") {
          this.setState({ authenticated: true });
        } else {
          this.setState({ authenticated: false });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authenticated: false });
      });
  }

  redirectTo = page => {
    this.props.history.push("/".concat(page));
  };

  render() {
    return (
      <>
        <Navbar
          brand="DevOps Accelerator"
          isAuthenticated={this.state.isAuthenticated}
        />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Row>
            <Col md={2} style={{ height: "95vh" }}>
              <Sidebar
                onRedirect={this.redirectTo}
                lists={[
                  { name: "Home" },
                  { name: "Users" },
                  { name: "Blueprints" },
                  { name: "Tools" }
                  // { name: "Credentials" }
                ]}
              ></Sidebar>
            </Col>

            <Col
              md={10}
              style={{
                maxHeight: "90vh",
                overflowY: "scroll"
              }}
            >
              <ProtectedRoute exact path="/home" component={Home} />
              <ProtectedRoute exact path="/addengine" component={AddEngine} />
              <ProtectedRoute exact path="/users" component={Users} />
              <ProtectedRoute exact path="/blueprints" component={Blueprint} />
              <ProtectedRoute exact path="/tools" component={Tools} />
            </Col>
          </Row>
        </Switch>
        {/* <Footer /> */}
      </>
    );
  }
}

export default withRouter(App);
