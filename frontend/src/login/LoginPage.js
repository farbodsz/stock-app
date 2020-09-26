import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import { TextField } from "@material-ui/core";
import axios from "../api/axios";

const headers = {
  "content-type": "application/json",
};
const config = {
  headers: {
    "content-type": "application/json",
    authorization: "",
  },
  responseType: "json",
};

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      token: "",
    };

    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  testAction = (e) => {
    console.log("hello");
    this.postLogin();
    e.preventDefault();
  };

  testAction2 = (e) => {
    console.log("hello");
    this.getBalance();
    e.preventDefault();
  };

  onSubmit2() {
    console.log("Submit 2 clicked");
    this.getStocks();
    // TODO
  }

  getBalance() {
    let userId = 2;
    let url = "/balances/" + userId;
    axios
      .get(url, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getStocks() {
    config.headers.authorization = "Token " + this.state.token;
    axios
      .get("/stocks/", config)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  postLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
    axios
      .post(
        `/auth/login/`,
        { username: this.state.username, password: this.state.password },
        { headers: headers }
      )
      .then((res) => {
        const data = res.data;
        this.setState({ token: data.token });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.container} onSubmit={this.testAction}>
          <h1>Login</h1>
          <form noValidate autoComplete="off">
            <TextField
              id="username"
              label="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <TextField
              id="password"
              label="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <Button id="submit" type="submit">
              Submit
            </Button>
          </form>
          <Button id="submit2" onClick={this.onSubmit2}>
            Test Submit
          </Button>
        </div>
      </div>
    );
  }
}
