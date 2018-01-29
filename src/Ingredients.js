import React from "react";
import { SearchBar } from "./components/SearchBar";
import { CategoriesList } from "./containers/CategoriesList";

export const Ingredients = () => (
  <React.Fragment>
    <SearchBar />
    <CategoriesList />
  </React.Fragment>
);
