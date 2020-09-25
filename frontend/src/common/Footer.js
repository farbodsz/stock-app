import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const GITHUB_FARBOD = "https://github.com/farbodsz/";
  const GITHUB_SHINTARO = "https://github.com/shintaroonuma/";

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Created by{" "}
        <a href={GITHUB_FARBOD} className={styles.person}>
          Farbod Salamat-Zadeh
        </a>{" "}
        and{" "}
        <a href={GITHUB_SHINTARO} className={styles.person}>
          Shintaro Onuma
        </a>
        .
      </p>
      <p className={styles.text}>Built using React and Django.</p>
    </footer>
  );
}
