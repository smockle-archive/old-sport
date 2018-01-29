import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// Routeable components
import { Layout } from "./layout/layout";
import { Splash } from "./splash/splash";
import { Recipes } from "./recipes/recipes";
import { Ingredients } from "./ingredients/ingredients";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Layout>
        <Route path="/recipes" component={Recipes} />
        <Route path="/ingredients" component={Ingredients} />
      </Layout>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
