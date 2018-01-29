import React from "react";
import { Category } from "./Category";

export const CategoriesList = ({ categories }) =>
  categories.map(({ name, id }) => <Category name={name} id={id} key={id} />);
