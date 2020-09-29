import React from "react";
import styles from "./EnterTickerCard.module.scss";
import Card from "../common/Card";
import { TextField } from "@material-ui/core";

/**
 * Card allowing the user to enter a ticker.
 *
 * Props:
 *  - `onChange`, function which takes `event`, invoked when the input in
 *     the text field has changed.
 *
 * Example of `onChange`:
 * >>> onChange={event => this.onTickerChange(event.target.value)}
 */
export default function EnterTickerCard(props) {
  return (
    <Card title="Enter ticker">
      <TextField
        className={styles.tickerInputField}
        InputProps={{ style: { fontSize: 40 } }}
        inputProps={{ maxLength: 5 }}
        placeholder="GOOGL"
        onChange={props.onChange}
      />
    </Card>
  );
}
