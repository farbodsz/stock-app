import React from "react";
import TradingViewWidget from "react-tradingview-widget";

/**
 * React component encapsulating the Advanced Real-Time Chart Widget from
 * Trading View.
 *
 * This component takes `symbol` as props, a string indicating the stock to
 * display. For example "NASDAQ:AAPL" is a valid symbol.
 *
 * See: https://uk.tradingview.com/widget/advanced-chart/
 */
export default function AdvancedTradingViewChartWidget(props) {
  return <TradingViewWidget symbol={props.symbol} />;
}
