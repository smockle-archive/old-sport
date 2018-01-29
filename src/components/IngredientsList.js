import React from "react";
import { Ingredient } from "./Ingredient";
import { Divider } from "./Divider";
import styles from "./IngredientsList.css";

export const IngredientsList = ({ ingredients }) => (
  <ul className={styles["ingredients-list"]}>
    {ingredients.map(({ name, id }, index) => (
      <div key={id}>
        <Ingredient name={name} />
        {index !== ingredients.length - 1 && <Divider />}
      </div>
    ))}
  </ul>
);
