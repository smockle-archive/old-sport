import React from "react";

const ingredients = [
  { category: "produce", name: "Blackberries" },
  { category: "produce", name: "Cherry (Luxardo)" },
  { category: "produce", name: "Ginger" },
  { category: "produce", name: "Lemon" },
  { category: "produce", name: "Lime" },
  { category: "produce", name: "Mint Leaves" },
  { category: "produce", name: "Orange" },
  { category: "produce", name: "Raspberries" },
  { category: "produce", name: "Rosemary" },
  { category: "produce", name: "Salt" },
  { category: "produce", name: "Sugar Cube" },
  { category: "spirits", name: "Absinthe" },
  { category: "spirits", name: "Bourbon" },
  { category: "spirits", name: "Gin" },
  { category: "spirits", name: "Mezcal" },
  { category: "spirits", name: "Rum" },
  { category: "spirits", name: "Rum (Dark)" },
  { category: "spirits", name: "Rum (Gold)" },
  { category: "spirits", name: "Rye Whiskey" },
  { category: "spirits", name: "Scotch (Blended)" },
  { category: "spirits", name: "Tequila" },
  { category: "spirits", name: "Vodka" },
  { category: "spirits", name: "Vodka Citron" },
  { category: "liqueur", name: "Allspice Dram" },
  { category: "liqueur", name: "Amaretto" },
  { category: "liqueur", name: "Campari" },
  { category: "liqueur", name: "Cognac" },
  { category: "liqueur", name: "Cointreau" },
  { category: "liqueur", name: "Curacao" },
  { category: "liqueur", name: "Kahlua" },
  { category: "liqueur", name: "Maraschino" },
  { category: "liqueur", name: "Maraschino Liqueur" },
  { category: "liqueur", name: "St. Germain" },
  { category: "liqueur", name: "Vermouth (Dry)" },
  { category: "liqueur", name: "Vermouth (Sweet)" },
  { category: "mixers", name: "Club Soda" },
  { category: "mixers", name: "Coca-Cola" },
  { category: "mixers", name: "Cranberry Juice" },
  { category: "mixers", name: "Dry Champagne" },
  { category: "mixers", name: "Egg White" },
  { category: "mixers", name: "Ginger Ale" },
  { category: "mixers", name: "Ginger Beer" },
  { category: "mixers", name: "Grapefruit Juice" },
  { category: "mixers", name: "Grenadine" },
  { category: "mixers", name: "Lemon Juice" },
  { category: "mixers", name: "Lemonade" },
  { category: "mixers", name: "Lime Juice" },
  { category: "mixers", name: "Olive Brine" },
  { category: "mixers", name: "Orange Juice" },
  { category: "mixers", name: "Simple Syrup" },
  { category: "mixers", name: "Tonic Water" },
  { category: "mixers", name: "Whole Milk" },
  { category: "bitters", name: "Angostura Bitters" },
  { category: "bitters", name: "Orange Bitters" },
  { category: "bitters", name: "Peychaud’s Bitters" },
  { category: "syrups", name: "Honey Syrup" },
  { category: "syrups", name: "Maple Syrup" }
];

export const Ingredients = () => (
  <div className="ingredients">
    <header className="ingredients-header">
      <h1 className="ingredients-title">Ingredients</h1>
    </header>
  </div>
);
