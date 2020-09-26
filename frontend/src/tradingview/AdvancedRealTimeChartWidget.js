import React from "react";
import TradingViewWidget from "react-tradingview-widget";

/**
 * React component encapsulating the Advanced Real-Time Chart Widget from
 * Trading View.
 *
 * This component takes `symbol` as props, a string indicating the stock to
 * display. For example "NASDAQ:AAPL" is a valid symbol.
 *
 * It also takes `width` (default: 980) and `height` (default: 610) as props.
 *
 * See: https://uk.tradingview.com/widget/advanced-chart/
 */
export default function AdvancedRealTimeChartWidget(props) {
  return (
    <TradingViewWidget
      symbol={props.symbol}
      width={props.width}
      height={props.height}
      allow_symbol_change={false}
      hide_top_toolbar={true}
    />
  );
}
