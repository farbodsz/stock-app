import React from "react";
import styles from "./NavigationPane.module.scss";
import NavItem from "./NavItem";

/**
 * Navigation pane component.
 *
 * Takes `items` as props: a list of strings for each navigation item to show.
 *
 * Stores `activeIndex` as state: 0-indexed integer determining which navigation
 * item to mark as "active".
 */
export default class NavigationPane extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
  }

  /**
   * Changes which navigation item is active.
   */
  select(i) {
    this.setState({ activeIndex: i });
  }

  render() {
    const navItems = this.props.items.map((item, idx) => (
      <NavItem
        key={idx}
        text={item}
        active={idx === this.state.activeIndex}
        onClick={() => this.select(idx)}
      />
    ));
    return <nav className={styles.container}>{navItems}</nav>;
  }
}
