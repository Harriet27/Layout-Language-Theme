import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Lang,
  LightDark,
} from "./pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Lang} />
        <Route path="/light-dark" component={LightDark} />
      </Switch>
    </div>
  );
};

export default App;
