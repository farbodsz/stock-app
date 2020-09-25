import React from "react";
import styles from "./DashboardPage.module.scss";
import NavigationPane from "./NavigationPane";

export default class DashboardPage extends React.Component {
  getUsername() {
    // TODO: Dummy
    return "bingbong";
  }

  render() {
    return (
      <div className={styles.containerParent}>
        <div className={styles.containerNav}>
          <NavigationPane />
        </div>
        <main className={styles.containerMain}>
          <h1>Welcome, {this.getUsername()}!</h1>
        </main>
      </div>
    );
  }
}
