import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import App from "./App";

function Navigation() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<MovieDetails />} />
        <Route path="/" children={<App />} />
      </Switch>
    </Router>
  );
}

export default Navigation;
