import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Nav/Nav";
import Landing from "./Landing/Landing";
import Blueprint from "./Blueprints/Blueprint";
import setAuthHeader from "../utils/setAuthHeader";
import AddEngine from "./AddEngine/AddEngine";
import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Users from "./Users/Users";
import Tools from "./Tools/Tools";
import Footer from "../components/Footer/Footer";
import { connect } from "react-redux";
import { setCurrentUser } from "../redux/auth/auth.actions";
import ViewBlueprint from "./Blueprints/ViewBlueprint";
import Axios from "axios";

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
        this.props.setCurrentUser(response.data);
        this.props.history.push(`/home`);
      })
      .catch(err => {
        this.props.history.push("/");
        console.log(err);
      });
  }

  redirectTo = page => {
    this.props.history.push("/".concat(page).toLowerCase());
  };

  render() {
    return (
      <>
        <Navbar brand="DevOps Accelerator" />

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
              <Route exact path="/home" component={Home} />
              <Route exact path="/engine/create/:id" component={AddEngine} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/blueprints" component={Blueprint} />
              <Route exact path="/tools" component={Tools} />
              <Route exact path="/blueprint/:id" component={ViewBlueprint} />
            </Col>
          </Row>
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(App));
