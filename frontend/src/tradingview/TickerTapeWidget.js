import React from "react";

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
export default class TickerTapeWidget extends React.Component {
  constructor(props) {
    super(props);

    this.WIDGET_CONTAINER_ID = "tradingview-widget-container";
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = this.getWidgetSettings();
    document.getElementById(this.WIDGET_CONTAINER_ID).appendChild(script);
  }

  /**
   * Returns a stringified JSON object - the widget settings including the
   * stocks to be displayed.
   */
  getWidgetSettings() {
    return JSON.stringify({
      symbols: this.props.symbols,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "uk"
    });
  }

  render() {
    return (
      <div id={this.WIDGET_CONTAINER_ID} class="tradingview-widget-container" />
    );
  }
}
