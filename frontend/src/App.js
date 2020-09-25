import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import Login from "./login/LoginPage";
import Register from "./login/RegisterPage";
import Dashboard from "./dashboard/DashboardPage";

function App() {
  // TODO: add Error page for Route
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </main>
  );
}

export default App;
