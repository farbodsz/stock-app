import React from "react";
import styles from "./FormLayout.module.scss";

export default function FormLayout(props) {
  return <div className={styles.layout}>{props.children}</div>;
}
