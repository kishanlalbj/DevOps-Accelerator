import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios
      .get("/api/users/all")
      .then(response => {
        console.log(response.data);
        let copy = [...this.state.user];
        copy = response.data;
        this.setState({
          users: copy
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h4>Users</h4>
        {this.state.users.length}
      </div>
    );
  }
}

export default Users;
