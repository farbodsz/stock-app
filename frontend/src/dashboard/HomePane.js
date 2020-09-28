import React from "react";
import styles from "./HomePane.module.scss";
import Card from "../common/Card";
import AdvancedRealTimeChartWidget from "../tradingview/AdvancedRealTimeChartWidget";
import SymbolOverviewWidget from "../tradingview/SymbolOverviewWidget";
import axios from "../api/axios";

const config = {
  headers: {
    "content-type": "application/json",
    authorization: "",
  },
  responseType: "json",
};

/**
 * The overview pane of the dashboard.
 *
 * Takes `token` as props.
 */
export default class HomePane extends React.Component {
  state = {
    username: "",
    balance: "",
    stocks: {},
  };

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

  componentDidMount() {
    this.setBalance();
    this.setUsername();
    this.setStocks();
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
            <main className={styles.containerMain}>
              <SymbolOverviewWidget />
            </main>
          </Card>
        </div>
      </div>
    );
  }
}
