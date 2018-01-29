import React from "react";
import { Ingredient } from "./Ingredient";
import { Divider } from "./Divider";
import styles from "./IngredientsList.css";

export const IngredientsList = ({ ingredients, onIngredientClick }) => (
  <ul className={styles["ingredients-list"]}>
    {ingredients.map(({ name, id, active }, index) => (
      <div key={id}>
        <Ingredient
          active={active}
          name={name}
          onClick={x => onIngredientClick(id)}
        />
        {index !== ingredients.length - 1 && <Divider />}
      </div>
    ))}
  </ul>
);
