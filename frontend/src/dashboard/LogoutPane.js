import React from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import FormLayout from "../login/FormLayout";

export default class LogoutPane extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  /**
   * Function invoked when the user chooses to log out.
   */
  logout() {
    // TODO: Replace with actual log out feature
    alert("User clicked log out");
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
