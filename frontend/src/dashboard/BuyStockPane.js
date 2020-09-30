import React from "react";
import styles from "./BuyStockPane.module.scss";
import Button from "../common/Button";
import Card from "../common/Card";
import AdvancedRealTimeChartWidget from "../tradingview/AdvancedRealTimeChartWidget";
import { TextField } from "@material-ui/core";
import axios from "../api/axios";
import iexcloud from "../api/iexcloud";
import { formatBalance } from "./utils";
import EnterTickerCard from "./EnterTickerCard";

const config = {
  headers: {
    "content-type": "application/json",
    authorization: "",
  },
  responseType: "json",
};
const config2 = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    authorization: "",
  },
};
const qs = require("querystring");

//Tpk_2401481048103...
const iexKey = "Tpk_71f";

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
      new_amount: 0,
      balance: 0,
      balance_id: 0,
      new_balance: 0,
      price: 0,
      stocks: [],
      does_stock_exist: false,
      stock_index: 0,
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
      .then((res) => {
        const data = res.data;
        this.setState({ balance: data[0].balance });
        this.setState({ new_balance: data[0].balance });
        this.setState({ balance_id: data[0].id });
        console.log(data);
      })
      .catch((error) => {
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
    this.setState({ new_amount: newAmount });
  }

  onBuy() {
    if (!this.state.ticker || !this.state.amount) {
      alert("You must enter a ticker and a valid amount.");
      return;
    }
    this.startBuyRoutine();
    alert("Bought");
  }

  /**
   * Starts calling the first function in the buy routine
   */
  startBuyRoutine() {
    this.getStockPrice();
  }

  /** 1
   * Gets stock price from iex cloud api and sets price state
   */
  getStockPrice() {
    let iexURL = "/twtr/price?token=" + iexKey;
    iexcloud
      .get(iexURL)
      .then((res) => {
        const data = res.data;
        this.setState({ price: data });
        console.log(data);
        this.setStocks();
      })
      .catch((error) => {
        console.log("getStockprice error");
        console.log(error);
      });
  }

  /** 2
   * Sets stock state with fetched user stocks from api
   */
  setStocks() {
    config.headers.authorization = "Token " + this.props.token;
    axios
      .get("/stocks/", config)
      .then((res) => {
        const data = res.data;
        this.setState({ stocks: data });
        console.log(data);
        this.setDoesStockExist();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /** 3
   * Checks stock state for same ticker value as user input ticker
   */
  setDoesStockExist() {
    let stockExists = false;
    for (let index = 0; index < this.state.stocks.length; ++index) {
      if (this.state.ticker === this.state.stocks[index].stock_id) {
        stockExists = true;
        this.setState({ stock_index: index });
      }
    }
    console.log(stockExists);
    if (stockExists === true) {
      this.adjustBalanceAndStocks();
    } else {
      let balCalculation =
        parseInt(this.state.balance) -
        parseInt(this.state.amount) * parseInt(this.state.price) * 100;
      this.setState({ new_balance: balCalculation });
      this.postBoughtStock();
    }
  }

  /** 4
   * Updates new_balance and new_stocks with regards to the previous amount of stock the user has bought
   */
  adjustBalanceAndStocks() {
    let stockAmount = this.state.stocks[this.state.stock_index].amount;
    let stockCalculation = parseInt(stockAmount) + parseInt(this.state.amount);
    let balCalculation =
      parseInt(this.state.balance) -
      parseInt(this.state.amount) * parseInt(this.state.price) * 100;
    this.setState({ new_balance: balCalculation });
    this.setState({ new_amount: stockCalculation });
    this.deleteStock();
  }

  /** 4.5
   * deletes previous input of stock using the api
   */
  deleteStock() {
    config2.headers.authorization = "Token " + this.props.token;
    let userStocksURL =
      "/stocks/" + this.state.stocks[this.state.stock_index].id + "/";
    axios
      .delete(userStocksURL, config2)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.postBoughtStock();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /** 5
   * Posts a new stock ticker and amount to our rest api
   */
  postBoughtStock() {
    config2.headers.authorization = "Token " + this.props.token;
    console.log("stock adjusted amount" + this.state.new_amount);
    let stk = {
      stock_id: this.state.ticker,
      amount: this.state.new_amount,
    };
    axios
      .post(`/stocks/`, qs.stringify(stk), config2)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.deleteBalance();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteBalance() {
    config2.headers.authorization = "Token " + this.props.token;
    let userBalanceURL = "/balances/" + this.state.balance_id + "/";
    axios
      .delete(userBalanceURL, config2)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.updateBalance();
      })
      .catch((error) => {
        console.log("updateBal error");
        console.log(error);
      });
  }

  /** 6
   * posts new user balance though api
   */
  updateBalance() {
    config2.headers.authorization = "Token " + this.props.token;
    let bal = { balance: this.state.new_balance };
    axios
      .post(`/balances/`, qs.stringify(bal), config2)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <EnterTickerCard
              onChange={(event) => this.onTickerChange(event.target.value)}
            />
          </div>
          <div className={styles.amountInputCard}>
            <Card title="Buy stocks">
              <p className={styles.currentBalanceLabel}>
                (Current Balance: {this.getFormattedBalance()})
              </p>
              <TextField
                type="number"
                placeholder="5"
                onChange={(event) => this.onAmountChange(event.target.value)}
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
