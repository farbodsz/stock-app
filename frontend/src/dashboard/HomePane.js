import React from "react";

export default class HomePane extends React.Component {
  getUsername() {
    // TODO: Dummy
    return "bingbong";
  }

  render() {
    return <h1>Welcome, {this.getUsername()}!</h1>;
  }
}
