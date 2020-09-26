import React from "react";
import styles from "./Login.module.scss";
import Header from "../common/Header";
import Button from "../common/Button";
import TextField from "../common/TextField";
import { Container, Grid, Link } from "@material-ui/core";

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container component="main" maxWidth="xs">
          <TextField
            className={styles.formElement}
            name="username"
            label="Username"
          />
          <TextField
            className={styles.formElement}
            name="password"
            label="Password"
            type="password"
          />
          <Button className={styles.button}>Sign In</Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
