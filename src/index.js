import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// Routeable components
import { Splash } from "./splash/splash";
import { Ingredients } from "./ingredients/ingredients";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route path="/ingredients" component={Ingredients} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
