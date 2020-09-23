import React from "react";
import styles from "./Header.module.scss";

/**
 * Header used on the landing page.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.title}>Stocks Trading Game</p>
    </header>
  );
}
