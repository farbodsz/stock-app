import React from "react";
import styles from "./DashboardPage.module.scss";
import NavigationPane from "./NavigationPane";
import TickerTapeWidget from "../tradingview/TickerTapeWidget";

export default class DashboardPage extends React.Component {
  getUsername() {
    // TODO: Dummy
    return "bingbong";
  }

  getTickerTapeSymbols() {
    // TODO: Dummy
    return [
      {
        proName: "NASDAQ:GOOGL",
        title: "Google"
      },
      {
        proName: "NASDAQ:TSLA",
        title: "Tesla"
      },
      {
        proName: "NASDAQ:AMZN",
        title: "Amazon"
      }
    ];
  }

  render() {
    return (
      <div className={styles.containerParent}>
        <div className={styles.containerNav}>
          <NavigationPane className={styles.containerNav} />
        </div>
        <main className={styles.containerMain}>
          <h1>Welcome, {this.getUsername()}!</h1>
          <TickerTapeWidget symbols={this.getTickerTapeSymbols()} />
        </main>
      </div>
    );
  }
}
