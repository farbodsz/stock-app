import React from "react";

/**
 * React component for displaying any type of widget from Trading View.
 *
 * This abstracts the logic of appending the script to the DOM.
 *
 * Props:
 *  - `src`: the widget's script source. For example:
 *    "https://s3.tradingview.com/.../embed-widget-symbol-profile.js"
 *  - `settings`: a JSON object containing the settings for the widget.
 *  - `dynamic`: if true, then the TradingView script will be updated in each
 *               `componentDidUpdate` call. Otherwise the script is created only
 *               once.
 *
 * An example of `settings` is below:
 * ```
 * {
 *   symbol: "NASDAQ:AAPL",
 *   width: 480,
 *   height: 650,
 *   colorTheme: "light",
 *   isTransparent: false,
 *   locale: "uk"
 * }
 * ```
 * Of course, attributes in `settings` will depend on the widget being
 * displayed.
 */
export default class TradingViewWidget extends React.Component {
  constructor(props) {
    super(props);

    this.widgetContainer = React.createRef();
  }

  componentDidMount() {
    if (!this.props.dynamic) {
      this.addScript();
    }
  }

  componentDidUpdate() {
    if (this.props.dynamic) {
      this.clearWidgetChildren();
      this.addScript();
    }
  }

  clearWidgetChildren() {
    while (this.widgetContainer.current.firstChild) {
      this.widgetContainer.current.removeChild(
        this.widgetContainer.current.firstChild
      );
    }
  }

  addScript() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = this.props.src;
    script.async = true;
    script.innerHTML = JSON.stringify(this.props.settings);
    this.widgetContainer.current.appendChild(script);
  }

  render() {
    return (
      <div
        id="tradingview-widget-container"
        ref={this.widgetContainer}
        className="tradingview-widget-container"
      />
    );
  }
}
