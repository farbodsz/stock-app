import React from "react";
import styles from "./BuyStockPane.module.scss";
import Button from "../common/Button";
import Card from "../common/Card";
import AdvancedRealTimeChartWidget from "../tradingview/AdvancedRealTimeChartWidget";
import { TextField } from "@material-ui/core";
import axios from "../api/axios";
import { formatBalance } from "./utils";

const config = {
  headers: {
    "content-type": "application/json",
    authorization: ""
  },
  responseType: "json"
};

/**
 * Pane where the user can buy stocks.
 *
 * Takes `token` as props.
 */
export default class BuyStockPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticker: "",
      amount: 0,
      balance: 0
    };

    this.setBalance();

    this.onTickerChange = this.onTickerChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onBuy = this.onBuy.bind(this);
  }

  setBalance() {
    config.headers.authorization = "Token " + this.props.token;
    axios
      .get("/balances/", config)
      .then(res => {
        const data = res.data;
        this.setState({ balance: data[0].balance });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
   * Changes the ticker that is shown in this pane.
   *
   * @param {string} newTicker the user input from the ticker input field.
   */
  onTickerChange(newTicker) {
    console.log("Ticker changed: " + newTicker);
    this.setState({ ticker: newTicker });
  }

  /**
   * Changes the amount that is shown in this pane.
   *
   * @param {string} newAmount the user input from the amount input field.
   */
  onAmountChange(newAmount) {
    console.log("Amount changed " + newAmount);
    this.setState({ amount: newAmount });
  }

  onBuy() {
    if (!this.state.ticker || !this.state.amount) {
      alert("You must enter a ticker and a valid amount.");
      return;
    }

    // TODO:
    alert("Bought");
  }

  getFormattedBalance() {
    return formatBalance(this.state.balance, false);
  }

  /**
   * Returns the symbol of the currently selected stock, which can be used with
   * a TradingView chart.
   */
  getSelectedSymbol() {
    return `NASDAQ:${this.state.ticker}`;
  }

  /**
   * Returns the title of the stock chart.
   */
  getStockChartTitle() {
    return this.state.ticker ? `${this.state.ticker}'s Performance` : "";
  }

  render() {
    return (
      <div>
        <h1>Buy a stock</h1>
        <div className={styles.cardContainer}>
          <div className={styles.tickerInputCard}>
            <Card title="Enter ticker">
              <TextField
                className={styles.tickerInputField}
                InputProps={{ style: { fontSize: 40 } }}
                inputProps={{ maxLength: 5 }}
                placeholder="GOOGL"
                onChange={event => this.onTickerChange(event.target.value)}
              />
            </Card>
          </div>
          <div className={styles.amountInputCard}>
            <Card title="Buy stocks">
              <p className={styles.currentBalanceLabel}>
                (Current Balance: {this.getFormattedBalance()})
              </p>
              <TextField
                type="number"
                placeholder="5"
                onChange={event => this.onAmountChange(event.target.value)}
              />
              <p className={styles.amountLabel}>stocks</p>
              <Button className={styles.buttonBuy} onClick={this.onBuy}>
                Buy
              </Button>
            </Card>
          </div>
        </div>
        <div>
          <Card title={this.getStockChartTitle()}>
            <AdvancedRealTimeChartWidget
              symbol={this.getSelectedSymbol()}
              width="100%"
            />
          </Card>
        </div>
      </div>
    );
  }
}
