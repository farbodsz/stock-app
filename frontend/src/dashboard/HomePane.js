import React from "react";
import styles from "./HomePane.module.scss";
import Card from "./Card";

export default class HomePane extends React.Component {
  getUsername() {
    // TODO: Dummy
    return "bingbong";
  }

  getBalance() {
    // TODO: Dummy
    return "$1 000 000";
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.getUsername()}!</h1>
        <div className={styles.balanceContainer}>
          <Card title="Balance">
            <p className={styles.balanceText}>{this.getBalance()}</p>
          </Card>
        </div>
      </div>
    );
  }
}
