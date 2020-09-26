import React from "react";
import styles from "./HomePane.module.scss";
import Card from "./Card";
import AdvancedRealTimeChartWidget from "../tradingview/AdvancedRealTimeChartWidget";

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
    // TODO: Replace AdvancedRealTimeChartWidget with a symbol overview widget
    // instead?
    return (
      <div>
        <h1>Welcome, {this.getUsername()}!</h1>
        <div className={styles.balanceContainer}>
          <Card title="Balance">
            <p className={styles.balanceText}>{this.getBalance()}</p>
          </Card>
        </div>
        <div className={styles.chartContainer}>
          <Card title="Your Stocks">
            <AdvancedRealTimeChartWidget symbol="NASDAQ:AAPL" width="100%" />
          </Card>
        </div>
      </div>
    );
  }
}
