import React from "react";
import styles from "./Ingredient.css";

export const Ingredient = ({ name }) => (
  <li className={styles.ingredient}>
    {name} <input type="checkbox" />
  </li>
);
