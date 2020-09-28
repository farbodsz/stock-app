import React from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import FormLayout from "../login/FormLayout";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";

export default class LogoutPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: true };
    this.logout = this.logout.bind(this);
  }

  /**
   * Function invoked when the user chooses to log out.
   */
  logout() {
    Cookies.remove("token");
    this.setState({ isLoggedIn: false });
  }

  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <FormLayout>
        <Card title="Logout?">
          <p style={{ paddingBottom: "20px" }}>
            Are you sure you want to log out?
          </p>
          <Button onClick={this.logout}>Yes, log out</Button>
        </Card>
      </FormLayout>
    );
  }
}
