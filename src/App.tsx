import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

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
      </Switch>
    </Router>
  );
}

export default App;
