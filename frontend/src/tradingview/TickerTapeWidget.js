import React from "react";
import TradingViewWidget from "./TradingViewWidget";

/**
 * React component encapsulating the Ticker Tape Widget from Trading View.
 *
 * This component takes `symbols` as props. This is a list of objects each
 * containing two attributes: `proName` and `title`.
 *
 * `proName` is essentially the stock identifier, and `title` is the displayed
 * name of the stock.
 *
 * Here is an example of `symbols`:
 * ```
 * [
 *   {
 *     proName: "NASDAQ:GOOGL",
 *     title: "Google"
 *   },
 *   {
 *     proName: "NASDAQ:TSLA",
 *     title: "Tesla"
 *   },
 *   {
 *     proName: "NASDAQ:AMZN",
 *     title: "Amazon"
 *   }
 * ]
 * ```
 *
 * See: https://uk.tradingview.com/widget/ticker-tape/
 */
export default function TickerTapeWidget(props) {
  const settings = {
    symbols: props.symbols,
    colorTheme: "light",
    isTransparent: false,
    displayMode: "adaptive",
    locale: "uk"
  };

  return (
    <TradingViewWidget
      src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
      settings={settings}
    />
  );
}
