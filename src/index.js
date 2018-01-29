import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter, Switch } from "react-router-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// Routeable components
import { Layout } from "./Layout";
import { Splash } from "./Splash";
import { Recipes } from "./Recipes";
import { Ingredients } from "./Ingredients";

import { rootReducer } from "./data/reducers";
import { initialState } from "./data/initialState";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Layout>
          <Route path="/recipes" component={Recipes} />
          <Route path="/ingredients" component={Ingredients} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
