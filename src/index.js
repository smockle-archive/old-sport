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
    <React.Fragment>
      <Route exact path="/" component={Splash} />
      <Route path="/ingedients" component={Ingredients} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
