import React from "react";
import { IngredientsList } from "../containers/IngredientsList";
import styles from "./Category.css";

export const Category = ({ name, id }) => (
  <div className={styles["category"]}>
    <h2 className={styles["category-title"]}>{name}</h2>
    <IngredientsList categoryId={id} />
  </div>
);
