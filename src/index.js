import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// Routeable components
import { Splash } from "./splash/splash";
import { Ingredients } from "./ingredients/ingredients";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={({ children = null }) => children}>
      <Route path="/splash" component={Splash} />
      <Route path="/ingedients" component={Ingredients} />
    </Route>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
