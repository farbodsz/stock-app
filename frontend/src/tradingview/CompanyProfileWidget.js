import React from "react";
import TradingViewWidget from "./TradingViewWidget";

/**
 * React component encapsulating the Company Profile Widget from Trading View.
 *
 * This component takes `symbol` as props, a string indicating the stock to
 * display. For example "NASDAQ:AAPL" is a valid symbol.
 *
 * See: https://uk.tradingview.com/widget/symbol-profile/
 */
export default function CompanyProfileWidget(props) {
  const settings = {
    symbol: props.symbol,
    width: 480,
    height: 650,
    colorTheme: "light",
    isTransparent: false,
    locale: "uk"
  };

  console.log(settings);

  console.log("Render");
  return (
    <TradingViewWidget
      src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"
      settings={settings}
      dynamic={true}
    />
  );
}
