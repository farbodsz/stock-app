import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

/**
 * Header used on the landing page.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        Stocks Trading Game
      </Link>
      <Link to="/login" className={styles.button}>
        Login
      </Link>
      <Link to="/register" className={styles.button}>
        Register
      </Link>
    </header>
  );
}
