import React from "react";
import styles from "./NavigationPane.module.scss";
import NavItem from "./NavItem";

/**
 * Navigation pane component.
 *
 * Takes the following props:
 *  - `items`: a list of string names for each navigation item
 *  - `activeIndex`: 0-indexed integer determining which navigation item to mark
 *                   as "active".
 *  - `onSelect`: a function taking the new active index which changes the
 *                selected item and pane.
 */
export default class NavigationPane extends React.Component {
  render() {
    const navItems = this.props.items.map((item, idx) => (
      <NavItem
        key={idx}
        text={item}
        active={idx === this.props.activeIndex}
        onClick={() => this.props.onSelect(idx)}
      />
    ));
    return (
      <nav className={styles.container}>
        <div className={styles.itemsContainer}>{navItems}</div>
      </nav>
    );
  }
}
