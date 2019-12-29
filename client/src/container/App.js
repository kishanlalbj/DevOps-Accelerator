import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Nav/Nav";
import Landing from "./Landing/Landing";
import Blueprint from "./Blueprints/Blueprint";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import setAuthHeader from "../utils/setAuthHeader";
import Axios from "axios";
import AddEngine from "./Home/AddEngine";

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

  render() {
    return (
      <div>
        <Navbar
          brand="DevOps Accelerator"
          isAuthenticated={this.state.isAuthenticated}
        />

        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <ProtectedRoute exact path="/home" component={Home} />
            <ProtectedRoute exact path="/addengine" component={AddEngine} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
