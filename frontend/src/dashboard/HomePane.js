import React from "react";
import styles from "./HomePane.module.scss";
import Card from "../common/Card";
import AdvancedRealTimeChartWidget from "../tradingview/AdvancedRealTimeChartWidget";
import axios from "../api/axios";

const config = {
  headers: {
    "content-type": "application/json",
    authorization: ""
  },
  responseType: "json"
};

/**
 * The overview pane of the dashboard.
 *
 * Takes `token` as props.
 */
export default class HomePane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      balance: "",
      stocks: {}
    };

    this.setUsername();
    this.setBalance();
    this.setStocks();
  }

  setUsername() {
    config.headers.authorization = "Token " + this.props.token;
    axios
      .get("/auth/user", config)
      .then((res) => {
        const data = res.data;
        this.setState({ username: data.username });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setStocks() {
    config.headers.authorization = "Token " + this.props.token;
    axios
      .get("/stocks/", config)
      .then((res) => {
        const data = res.data;
        this.setState({ stocks: data });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setBalance() {
    config.headers.authorization = "Token " + this.props.token;
    axios
      .get("/balances/", config)
      .then((res) => {
        const data = res.data;
        this.setState({ balance: data[0].balance });
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Formats `balance` from this component's state and returns it.
   *
   * Note: `balance` is expected to be the number of cents, not dollars, the
   * user owns.
   */
  getFormattedBalance() {
    const balance = this.state.balance.toString();
    const n = balance.length;
    var formatted = `. ${balance[n - 2] + balance[n - 1]}`;

    const dollars = balance.slice(0, n - 2);
    if (dollars.length <= 4) {
      return `$ ${dollars} ${formatted}`;
    }

    // Space out groups of 3
    for (var i = dollars.length - 1; i >= 0; i -= 3) {
      formatted = dollars.slice(i - 2, i + 1) + " " + formatted;
    }
    return `$ ${dollars.slice(0, dollars.length % 3)} ${formatted}`;
  }

  render() {
    // TODO: Replace AdvancedRealTimeChartWidget with a symbol overview widget
    // instead?
    return (
      <div>
        <h1>Welcome, {this.state.username}!</h1>
        <div className={styles.balanceContainer}>
          <Card title="Balance">
            <p className={styles.balanceText}>{this.getFormattedBalance()}</p>
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
