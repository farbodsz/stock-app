import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import TextField from "../common/TextField";
import Card from "../common/Card";
import FormLayout from "./FormLayout";
import axios from "../api/axios";

const headers = {
  "content-type": "application/json"
};

const headers2 = {
  authorization: "",
  "content-type": "application/json"
};

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      token: ""
    };

    // TODO: Temporary bindings
    this.testAction = this.testAction.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  testAction = e => {
    console.log("hello");
    this.postLogin();
    e.preventDefault();
  };

  testAction2 = e => {
    console.log("hello");
    this.getBalance();
    e.preventDefault();
  };

  onSubmit2() {
    console.log("Submit 2 clicked");
    // TODO
  }

  getStocks() {
    axios
      .get(`/stocks`, {})
      .then(res => {
        const data = res.data;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBalance() {
    console.log("hello im here");
    headers2.authorization = this.state.token;
    axios
      .get(`/balance`, {}, { headers: headers2 })
      .then(res => {
        const data = res.data;
        console.log(data);
      })
      .catch(error => {
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
      .then(res => {
        const data = res.data;
        this.setState({ token: data.token });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
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
                onClick={this.testAction}
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
