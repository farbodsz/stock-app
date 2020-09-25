import React from "react";
import styles from "./NavigationPane.module.scss";
import NavItem from "./NavItem";

export default class NavigationPane extends React.Component {
  render() {
    return (
      <nav className={styles.container}>
        <NavItem text="Dashboard" active={true} />
        <NavItem text="Buy a stock" />
        <NavItem text="View stock info" />
        <NavItem text="Log out" />
      </nav>
    );
  }
}
