import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./login/RegisterPage";
import Dashboard from "./dashboard/Dashboard";
import Cookies from "js-cookie";

/**
 * Returns true if a user is logged in.
 */
function isLoggedIn() {
  const token = Cookies.get("token");
  return token;
}

/**
 * A component based on Route which only allows routing when the user is logged
 * in.
 *
 * If the user is authenticated the `component` prop is rendered, otherwise it
 * redirects the user to "/login".
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </main>
  );
}

export default App;
