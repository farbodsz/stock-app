import React from "react";
import styles from "./BuyStockPane.module.scss";
import Card from "../common/Card";
import { TextField } from "@material-ui/core";

export default class BuyStockPane extends React.Component {
  constructor(props) {
    super(props);

    this.tickerInputField = React.createRef();
    this.onTickerChange = this.onTickerChange.bind(this);
    this.inputRef = React.createRef();
  }

  /**
   * Changes the ticker that is shown in this pane.
   *
   * @param {string} newTicker the user input from the ticker input field.
   */
  onTickerChange(newTicker) {
    console.log(newTicker);
  }

  render() {
    return (
      <div>
        <h1>Buy a stock</h1>
        <div className={styles.tickerInputCard}>
          <Card title="Enter ticker">
            <TextField
              ref={this.tickerInputField}
              inputRef={ref => {
                this.inputRef = ref;
              }}
              className={styles.tickerInputField}
              InputProps={{ style: { fontSize: 40 } }}
              inputProps={{ maxLength: 5 }}
              placeholder="GOOGL"
              onChange={event => this.onTickerChange(event.target.value)}
            />
          </Card>
        </div>
      </div>
    );
  }
}
