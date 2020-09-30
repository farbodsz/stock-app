import React from "react";
import styles from "./LandingSection.module.scss";

/**
 * A section of the landing page.
 *
 * This component takes the following props;
 *  - title: the heading of the section
 *  - alt: if True, then a lighter background will be used for this section, to
 *    help distinguish from sections with the regular background color.
 *  - children: children
 */
export default function LandingSection(props) {
  return (
    <div className={props.alt ? styles.containerAlt : styles.container}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
}
