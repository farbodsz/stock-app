import React from "react";
import styles from "./DashboardPage.module.scss";
import NavigationPane from "./NavigationPane";
import TickerTapeWidget from "../tradingview/TickerTapeWidget";
import HomePane from "./HomePane";

export default class DashboardPage extends React.Component {
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
          <TickerTapeWidget symbols={this.getTickerTapeSymbols()} />
          <div className={styles.containerPane}>
            <HomePane />
          </div>
        </main>
      </div>
    );
  }
}
