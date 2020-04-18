import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./Services/auth";

import Login from "./Layout/Login/Login";
import Home from "./Layout/Home/Home";
import Logout from "./Components/Logout/Logout";
import Layout from "./Layout/Layout";

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <PrivateRoute path="/admin" component={Home} />
        <Route exact path="/logout" component={Logout} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
