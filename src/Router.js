import React from "react";
import { Switch, Route } from "react-router-dom";

import "./reset.css";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/home" component={Home} />
  </Switch>
);
