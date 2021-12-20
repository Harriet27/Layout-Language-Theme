import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  Language,
  Theme,
  BothLT,
} from "./pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route 
          exact
          path="/"
          render={() => {
            return (
              <Redirect to="/language" />
            );
          }}
        />
        <Route path="/language" component={Language} />
        <Route path="/theme" component={Theme} />
        <Route path="/both-lang-theme" component={BothLT} />
      </Switch>
    </div>
  );
};

export default App;
