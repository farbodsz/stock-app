import React from "react";
import styles from "./HomePane.module.scss";
import Card from "../common/Card";
import SymbolOverviewWidget from "../tradingview/SymbolOverviewWidget";
import axios from "../api/axios";
import { formatBalance } from "./utils";

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
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      balance: "",
      stocks: [],
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
   */
  getFormattedBalance() {
    return formatBalance(this.state.balance);
  }

  /**
   * Fetches a list of stocks the user currently owns.
   *
   * @returns {list} list of objects with attributes `symbol`, `name`, `amount`
   *
   * Example return value:
   *   [
   *     { symbol: "GOOGL", name: "Google", amount: 7 },
   *     { symbol: "AMZN", name: "Amazon", amount: 12 },
   *     { symbol: "TSLA", name: "Tesla", amount: 5 }
   *   ]
   */
  getUserStocks() {
    // TODO: Dummy code below to be replaced with actual fetch code
    const createData = (symbol, name, amount) => {
      return { symbol, name, amount };
    };
    return [
      createData("GOOGL", "Google", 7),
      createData("AMZN", "Amazon", 23),
      createData("TSLA", "Tesla", 40),
      createData("ZM", "Zoom", 3),
    ];
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.state.username}!</h1>
        <div className={styles.balanceContainer}>
          <Card title="Balance">
            <p className={styles.balanceText}>{this.getFormattedBalance()}</p>
          </Card>
        </div>
        <div>
          <Card title="Your Stocks">
            <SymbolOverviewWidget symbols={this.state.stocks} />
          </Card>
          <Card title="Your Stocks: Detail">
            <div className={styles.tableContainer}>
              <table>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Owned</th>
                </tr>
                {this.getUserStocks().map((row) => (
                  <tr>
                    <td style={{ fontWeight: 700 }}>{row.symbol}</td>
                    <td>{row.name}</td>
                    <td>{row.amount}</td>
                  </tr>
                ))}
              </table>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
