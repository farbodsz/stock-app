import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";
import Dashboard from "./dashboard/Dashboard";

function App() {
  // TODO: add Error page for Route
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </main>
  );
}

export default App;
