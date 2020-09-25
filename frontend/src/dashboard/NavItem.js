import React from "react";
import styles from "./NavItem.module.scss";

/**
 * Represents an item in the navigation pane.
 *
 * It takes the following as props:
 *  - `text`: string, the title of the navigation item.
 *  - `active`: boolean. True if the navigation item is selected.
 *
 * It stores the following as state:
 *  - `active`: boolean. True if the navigation item is selected.
 */
export default class NavItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: this.props.active };
  }

  render() {
    var itemStyle = styles.item;
    if (this.state.active) {
      itemStyle += " " + styles.active;
    }

    return (
      <div>
        <p className={itemStyle}>{this.props.text}</p>
      </div>
    );
  }
}
