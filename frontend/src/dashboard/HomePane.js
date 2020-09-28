import React from "react";
import styles from "./HomePane.module.scss";
import Card from "../common/Card";
import AdvancedRealTimeChartWidget from "../tradingview/AdvancedRealTimeChartWidget";
import axios from "../api/axios";
/**
 * The overview pane of the dashboard.
 *
 * Takes `token` as props.
 */
const config = {
  headers: {
    "content-type": "application/json",
    authorization: "",
  },
  responseType: "json",
};

export default class HomePane extends React.Component {
  state = {
    username: "",
    balance: "",
    stocks: {},
  };

  getUsername() {
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

  getStocks() {
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

  getBalance() {
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

  componentDidMount() {
    this.getBalance();
    this.getUsername();
    this.getStocks();
  }

  render() {
    // TODO: Replace AdvancedRealTimeChartWidget with a symbol overview widget
    // instead?
    return (
      <div>
        <h1>Welcome, {this.state.username}!</h1>
        <div className={styles.balanceContainer}>
          <Card title="Balance">
            <p className={styles.balanceText}>{this.state.balance}</p>
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
