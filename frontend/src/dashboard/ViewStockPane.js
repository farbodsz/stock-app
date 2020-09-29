import React from "react";
import styles from "./ViewStockPane.module.scss";
import Card from "../common/Card";
import EnterTickerCard from "./EnterTickerCard";
import CompanyProfileWidget from "../tradingview/CompanyProfileWidget";
import FundamentalDataWidget from "../tradingview/FundamentalDataWidget";

export default class ViewStockPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ticker: "" };

    this.onTickerChange = this.onTickerChange.bind(this);
    this.getSelectedSymbol = this.getSelectedSymbol.bind(this);
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
   * Returns the symbol of the currently selected stock, which can be used with
   * a TradingView chart.
   */
  getSelectedSymbol() {
    return `NASDAQ:${this.state.ticker}`;
  }

  render() {
    var companyProfileContents = "";
    if (this.state.ticker) {
      companyProfileContents = (
        <div className={styles.widgetsContainer}>
          <CompanyProfileWidget symbol={this.getSelectedSymbol()} />
          <FundamentalDataWidget symbol={this.getSelectedSymbol()} />
        </div>
      );
    } else {
      companyProfileContents = (
        <p>
          Enter a NASDAQ stock symbol above to view company information here.
        </p>
      );
    }

    return (
      <div>
        <h1>View stock</h1>
        <div>
          <EnterTickerCard
            onChange={event => this.onTickerChange(event.target.value)}
          />
        </div>
        <Card title="Company Profile">{companyProfileContents}</Card>
      </div>
    );
  }
}
