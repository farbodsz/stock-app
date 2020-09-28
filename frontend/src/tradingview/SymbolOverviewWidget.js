import React from "react";

export default class SymbolOverviewWidget extends React.Component {
  componentDidMount() {
    let script = document.createElement("script");
    script.setAttribute("id", "symbolOverviewEmbed");
    script.onload = function () {
      let newScript = document.createElement("script");
      let inlineScript = document.createTextNode(
        'new TradingView.MediumWidget({"symbols": [["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"]],"chartOnly": false,"width": 1000,"height": 400,"locale": "uk","colorTheme": "light","gridLineColor": "#F0F3FA","trendLineColor": "#2196F3","fontColor": "#787B86","underLineColor": "#E3F2FD","isTransparent": false,"autosize": false,"container_id": "tradingview_993c6"});'
      );
      newScript.setAttribute("id", "symbolOverviewMain");
      newScript.appendChild(inlineScript);
      document.getElementById("tradingview-widget").appendChild(newScript);
    };
    script.src = "https://s3.tradingview.com/tv.js";
    document.getElementById("tradingview-widget").appendChild(script);
  }

  render() {
    return (
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container"
      >
        <div id="tradingview-widget" className="tradingview-widget" />
      </div>
    );
  }
}
