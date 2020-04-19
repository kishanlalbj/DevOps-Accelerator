import React from "react";
import { Route, Redirect } from "react-router-dom";
import Axios from "axios";

const isAuthenticated = true;
export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      );
    }}
  />
);
