import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import TextField from "../common/TextField";
import Card from "../common/Card";
import FormLayout from "./FormLayout";
import axios from "../api/axios";
import Cookies from "js-cookie";

const headers = {
  "content-type": "application/json"
};

const config = {
  headers: {
    "content-type": "application/json",
    authorization: ""
  },
  responseType: "json"
};

/**
 * Page where the user can log in.
 */
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      token: ""
    };

    // TODO: Temporary bindings:
    this.onSubmit2 = this.onSubmit2.bind(this);

    this.onLogin = this.onLogin.bind(this);
  }

  // TODO These functions are temporarily used for debugging purposes: ---------
  testAction2 = e => {
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
      .then(res => {
        const data = res.data;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  getStocks() {
    config.headers.authorization = "Token " + this.state.token;
    axios
      .get("/stocks/", config)
      .then(res => {
        const data = res.data;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // ---------------------------------------------------------------------------

  /**
   * Logs in the user, using the username and password in the text fields.
   * @param {Event} e
   */
  onLogin(e) {
    console.log("Logging in...");
    this.postLogin();
    e.preventDefault();
  }

  /**
   * Posts the user's details to the server.
   *
   * If the user was able to log in correctly, this component's `token` state
   * will be updated.
   */
  postLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
    axios
      .post(
        `/auth/login/`,
        { username: this.state.username, password: this.state.password },
        { headers: headers }
      )
      .then(res => {
        const data = res.data;
        this.onTokenChange(data.token);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * Callback function invoked when the login token has changed.
   */
  onTokenChange(newToken) {
    this.setState({ token: newToken });
    Cookies.set("token", newToken);
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <FormLayout>
            <Card title="Login">
              <TextField
                id="username"
                className={styles.formElement}
                label="Username"
                onChange={e => this.setState({ username: e.target.value })}
              />
              <TextField
                id="password"
                className={styles.formElement}
                label="Password"
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <Button
                id="submit"
                className={styles.button}
                onClick={this.onLogin}
              >
                Submit
              </Button>
            </Card>
          </FormLayout>

          <Button id="submit2" onClick={this.onSubmit2}>
            Test Submit
          </Button>
        </div>
      </div>
    );
  }
}
