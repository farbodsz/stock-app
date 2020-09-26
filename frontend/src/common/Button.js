import React from "react";
import styles from "./Button.module.scss";

/**
 * A styled Button component.
 *
 * For convenience, this component can be used to keep styling across the
 * website consistent.
 */
export default function Button(props) {
  const allStyles = `${styles.button} ${props.className}`;
  return <button className={allStyles}>{props.children}</button>;
}
