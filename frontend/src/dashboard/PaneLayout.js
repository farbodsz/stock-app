import React from "react";
import styles from "./PaneLayout.module.scss";

export default function PaneLayout(props) {
  return <div className={styles.layout}>{props.children}</div>;
}
