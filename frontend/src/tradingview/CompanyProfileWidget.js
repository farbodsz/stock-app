import React from "react";

/**
 * React component encapsulating the Company Profile Widget from Trading View.
 *
 * This component takes `symbol` as props, a string indicating the stock to
 * display. For example "NASDAQ:AAPL" is a valid symbol.
 *
 * See: https://uk.tradingview.com/widget/symbol-profile/
 */
export default class CompanyProfileWidget extends React.Component {
  constructor(props) {
    super(props);

    this.WIDGET_CONTAINER_ID = "tradingview-widget-container";
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
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
      symbol: this.props.symbol,
      width: 480,
      height: 650,
      colorTheme: "light",
      isTransparent: false,
      locale: "uk"
    });
  }

  render() {
    return (
      <div
        id={this.WIDGET_CONTAINER_ID}
        className="tradingview-widget-container"
      />
    );
  }
}
