import React from "react";
import styles from "./NavItem.module.scss";

/**
 * Represents an item in the navigation pane.
 *
 * It takes the following as props:
 *  - `text`: string, the title of the navigation item.
 *  - `active`: boolean. True if the navigation item is selected.
 */
export default class NavItem extends React.Component {
  render() {
    var itemStyle = styles.item;
    if (this.props.active) {
      itemStyle += " " + styles.active;
    }

    return (
      <div>
        <p className={itemStyle} onClick={this.props.onClick}>
          {this.props.text}
        </p>
      </div>
    );
  }
}
