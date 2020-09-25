import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import { Button, TextField } from "@material-ui/core";

export default function LoginPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Login</h1>
        <form noValidate autoComplete="off">
          <TextField id="username" label="Username" />
          <TextField id="password" label="Password" />
          <Button id="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
