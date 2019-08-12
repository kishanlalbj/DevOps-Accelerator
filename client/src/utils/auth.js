import axios from "axios";
import setAuthHeader from "./setAuthHeader";

const Auth = {
  isAuthenticated: false,
  authenticate(obj, scb, ecb) {
    axios
      .post("/api/auth/login", obj)
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("jwt-token", `Bearer ${response.data.token}`);
          setAuthHeader(localStorage.getItem("jwt-token"));
          this.isAuthenticated = true;
          scb();
        } else {
          console.log("Login Failed");
        }
      })
      .catch(err => {
        console.log(err);
        ecb(err);
      });
  },
  signout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  }
};
export default Auth;
