import React from "react";
import styles from "./ingredients.css";

// prettier-ignore
/*
const ingredients = {
  produce: [
    "Blackberries", "Cherry (Luxardo)", "Ginger", "Lemon", "Lime", "Mint Leaves", "Orange", "Raspberries", "Rosemary", "Salt", "Sugar Cube"
  ],
  spirits: [
    "Absinthe", "Bourbon", "Gin", "Mezcal", "Rum", "Rum (Dark)", "Rum (Gold)", "Rye Whiskey", "Scotch (Blended)", "Tequila", "Vodka", "Vodka Citron"
  ],
  liqueur: [
    "Allspice Dram", "Amaretto", "Campari", "Cognac", "Cointreau", "Curacao", "Kahlua", "Maraschino", "Maraschino Liqueur", "St. Germain", "Vermouth (Dry)", "Vermouth (Sweet)"
  ],
  mixers: [
    "Club Soda", "Coca-Cola", "Cranberry Juice", "Dry Champagne","Egg White", "Ginger Ale", "Ginger Beer", "Grapefruit Juice", "Grenadine", "Lemon Juice", "Lemonade", "Lime Juice", "Olive Brine", "Orange Juice", "Simple Syrup", "Tonic Water", "Whole Milk"
  ],
  bitters: [
    "Angostura Bitters", "Orange Bitters", "Peychaud’s Bitters"
  ],
  syrups: [
    "Honey Syrup", "Maple Syrup"
  ]
};
*/
const ingredients = {
  spirits: ["Bourbon"],
  mixers: ["Club Soda"]
};
const categories = Object.keys(ingredients);

export class Ingredients extends React.Component {
  render() {
    return (
      <div className={styles.ingredients}>
        <input
          className={styles["ingredients-search"]}
          placeholder="Search ingredients"
          aria-label="Search ingredients"
          type="search"
        />
        {categories.map(category => (
          <div className={styles["ingredients-category"]} key={category}>
            <h2 className={styles["ingredients-category-title"]}>{category}</h2>
            <ul className={styles["ingredients-list"]}>
              {ingredients[category].map((ingredient, index) => (
                <React.Fragment>
                  <li
                    className={styles["ingredients-list-item"]}
                    key={ingredient}
                  >
                    {ingredient} <input type="checkbox" />
                  </li>
                  {index !== ingredients[category].length - 1 && (
                    <hr className={styles["ingredients-divider"]} />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
