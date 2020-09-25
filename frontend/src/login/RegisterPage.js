import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import { Button, TextField } from "@material-ui/core";

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Register</h1>
        <form noValidate autoComplete="off">
          <TextField id="username" label="Username" />
          <TextField id="password" label="Password" />
          <TextField id="password-confirm" label="Confirm Password" />
          <Button id="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}
