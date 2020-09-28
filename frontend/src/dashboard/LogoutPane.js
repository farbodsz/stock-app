import React from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import FormLayout from "../login/FormLayout";
import Cookies from "js-cookie";

export default class LogoutPane extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  /**
   * Function invoked when the user chooses to log out.
   */
  logout() {
    alert("You have successfully logged out.");
    Cookies.set("token", null);
    // TODO: Redirect to landing page
  }

  render() {
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
