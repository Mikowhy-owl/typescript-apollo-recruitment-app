import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Continent from "./views/ContinentDetailsPage";
import Continents from "./views/ContinentsPage";
import NoPage from "./views/NoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/continents" />
        </Route>
        <Route exact path="/continents">
          <Continents />
        </Route>
        <Route exact path="/continents/:code">
          <Continent />
        </Route>
        <Redirect to="/404" />
        <Route exact path="/404">
          <NoPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
