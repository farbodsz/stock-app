import React from "react";
import { Route } from "react-router";

// Importing all page components:
import App from "./App";
import LandingPage from "./landing/LandingPage";
import LoginPage from "./login/LoginPage";

/**
 * Routes
 */
export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={LandingPage} />
    <Route path="/login" component={LoginPage} />
  </Route>
);
