import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import TextField from "../common/TextField";
import FormLayout from "./FormLayout";
import Card from "../common/Card";
import Cookies from "js-cookie";
import axios from "../api/axios";
import { Redirect } from "react-router-dom";

const headers = {
  "content-type": "application/json"
};

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      token: ""
    };

    this.onRegister = this.onRegister.bind(this);
  }

  /**
   * Registers the user, using the username and password from the text fields.
   * @param {Event} e
   */
  onRegister(e) {
    console.log("Registering user...");
    this.postRegister();
    e.preventDefault();
  }

  /**
   * Posts the user's details to the server.
   *
   * If the user was able to register correctly, this component's `token` state
   * will be updated.
   */
  postRegister() {
    console.log(this.state.username);
    console.log(this.state.password);
    axios
      .post(
        `/auth/register/`,
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
        <FormLayout>
          <Card title="Register">
            <TextField
              className={styles.formElement}
              name="username"
              label="Username"
              onChange={e => this.setState({ username: e.target.value })}
            />
            <TextField
              className={styles.formElement}
              name="password"
              label="Password"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button
              id="submit"
              className={styles.button}
              onClick={this.onRegister}
            >
              Sign In
            </Button>
          </Card>
        </FormLayout>
      </div>
    );
  }
}
