import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import TextField from "../common/TextField";
import Card from "../common/Card";
import FormLayout from "./FormLayout";
import axios from "../api/axios";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

const headers = {
  "content-type": "application/json",
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
      token: "",
    };

    this.onLogin = this.onLogin.bind(this);
  }

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
      .then((res) => {
        const data = res.data;
        this.onTokenChange(data.token);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Callback function invoked when the login token has changed.
   */
  onTokenChange(newToken) {
    Cookies.set("token", newToken);
    this.setState({ token: newToken });
  }

  render() {
    if (this.state.token) {
      return <Redirect to="/dashboard" />;
    }

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
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <TextField
                id="password"
                className={styles.formElement}
                label="Password"
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
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
        </div>
      </div>
    );
  }
}
