import React from "react";

export default class SymbolOverviewWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.addScript();
  }

  componentDidUpdate() {
    this.clearWidgetChildren();
    this.addScript();
  }

  clearWidgetChildren() {
    while (document.getElementById("tradingview-widget").firstChild) {
      document
        .getElementById("tradingview-widget")
        .removeChild(document.getElementById("tradingview-widget").firstChild);
    }
  }

  addScript() {
    let script = document.createElement("script");
    let symb = this.props.symbols;
    console.log(symb);
    let symbolText = '["TSLA" , "TSLA"],';
    for (let index = 0; index < symb.length; ++index) {
      symbolText +=
        '["' +
        this.props.symbols[index].stock_id +
        '","' +
        this.props.symbols[index].stock_id +
        '"],';
    }
    let scriptText =
      'new TradingView.MediumWidget({"symbols":[' +
      symbolText +
      '],"chartOnly": false,"width": 1000,"height": 400,"locale": "uk","colorTheme": "light","gridLineColor": "#F0F3FA","trendLineColor": "#2196F3","fontColor": "#787B86","underLineColor": "#E3F2FD","isTransparent": false,"autosize": true,"container_id": "tradingview_993c6"});';
    let originalText =
      'new TradingView.MediumWidget({"symbols": [["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"]],"chartOnly": false,"width": 1000,"height": 400,"locale": "uk","colorTheme": "light","gridLineColor": "#F0F3FA","trendLineColor": "#2196F3","fontColor": "#787B86","underLineColor": "#E3F2FD","isTransparent": false,"autosize": true,"container_id": "tradingview_993c6"});';
    console.log(scriptText);
    script.setAttribute("id", "symbolOverviewEmbed");
    script.onload = function () {
      let newScript = document.createElement("script");
      let inlineScript = document.createTextNode(scriptText);
      newScript.setAttribute("id", "symbolOverviewMain");
      newScript.appendChild(inlineScript);
      document.getElementById("tradingview-widget").appendChild(newScript);
    };
    script.src = "https://s3.tradingview.com/tv.js";
    document.getElementById("tradingview-widget").appendChild(script);
  }

  render() {
    return (
      <div id="tradingview-widget-container">
        <div id="tradingview_993c6"></div>
        <div id="tradingview-widget" className="tradingview-widget" />
      </div>
    );
  }
}
