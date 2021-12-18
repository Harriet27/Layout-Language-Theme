import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Language,
  Theme,
} from "./pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Language} />
        <Route path="/light-dark" component={Theme} />
      </Switch>
    </div>
  );
};

export default App;
