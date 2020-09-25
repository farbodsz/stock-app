import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Register</h1>
        <p>Test</p>
      </div>
      <Footer />
    </div>
  );
}
