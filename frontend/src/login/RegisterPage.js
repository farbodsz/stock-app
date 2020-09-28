import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import TextField from "../common/TextField";
import FormLayout from "./FormLayout";
import Card from "../common/Card";
import axios from "../api/axios";

const headers = {
  "content-type": "application/json",
};

export default class RegisterPage extends React.Component {
  state = {
    username: "",
    password: "",
  };

  testAction = (e) => {
    console.log("hello");
    this.postLogin();
    e.preventDefault();
  };

  postLogin() {
    console.log(this.state.username);
    console.log(this.state.password);
    axios
      .post(
        `/auth/register/`,
        { username: this.state.username, password: this.state.password },
        { headers: headers }
      )
      .then((res) => {
        const data = res.data;
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
        <FormLayout>
          <Card title="Register">
            <TextField
              className={styles.formElement}
              name="username"
              label="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <TextField
              className={styles.formElement}
              name="password"
              label="Password"
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <Button
              id="submit"
              className={styles.button}
              onClick={this.testAction}
            >
              Sign In
            </Button>
          </Card>
        </FormLayout>
      </div>
    );
  }
}
