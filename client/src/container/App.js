import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Nav from "../components/Nav/Nav";
import Landing from "./Landing/Landing";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false
    };

    if (localStorage.getItem("jwt-token")) {
    } else {
    }
  }

  render() {
    return (
      <div>
        <Nav brand="DevOps Accelerator" />

        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <ProtectedRoute exact path="/home" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
