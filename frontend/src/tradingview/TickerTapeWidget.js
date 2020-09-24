import React from "react";

/**
 * React component encapsulating the Ticker Tape Widget from Trading View.
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

    script.innerHTML = this.getScriptInside();

    document.getElementById(this.WIDGET_CONTAINER_ID).appendChild(script);
  }

  getScriptInside() {
    const SYMBOLS = JSON.stringify({
      symbols: [
        {
          proName: "NASDAQ:GOOGL",
          title: "Google"
        },
        {
          proName: "NASDAQ:TSLA",
          title: "Tesla"
        },
        {
          proName: "NASDAQ:AMZN",
          title: "Amazon"
        }
      ],
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "uk"
    });
    return SYMBOLS;
  }

  render() {
    return (
      <div id={this.WIDGET_CONTAINER_ID} class="tradingview-widget-container" />
    );
  }
}
