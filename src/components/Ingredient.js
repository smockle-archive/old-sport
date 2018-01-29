import React from "react";
import styles from "./Ingredient.css";

export const Ingredient = ({ name, onClick, active }) => {
  const className = [styles.ingredient, active ? styles.active : ""].join(" ");
  return (
    <li className={className} onClick={onClick}>
      {name} <input type="checkbox" checked={active} />
    </li>
  );
};
