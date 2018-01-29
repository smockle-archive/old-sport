export const initialState = {
  ui: {
    availability: {}
  },
  entities: {
    ingredients: {
      byId: {
        ingredient1: {
          id: "ingredient1",
          name: "Blackberries"
        },
        ingredient2: {
          id: "ingredient2",
          name: "Cherry (Luxardo)"
        },
        ingredient3: {
          id: "ingredient3",
          name: "Ginger"
        },
        ingredient4: {
          id: "ingredient4",
          name: "Lemon"
        },
        ingredient5: { id: "ingredient5", name: "Lime" },
        ingredient6: {
          id: "ingredient6",
          name: "Mint Leaves"
        },
        ingredient7: {
          id: "ingredient7",
          name: "Orange"
        },
        ingredient8: {
          id: "ingredient8",
          name: "Raspberries"
        },
        ingredient9: {
          id: "ingredient9",
          name: "Rosemary"
        },
        ingredient10: {
          id: "ingredient10",
          name: "Salt"
        },
        ingredient11: {
          id: "ingredient11",
          name: "Sugar Cube"
        },
        ingredient12: {
          id: "ingredient12",
          name: "Absinthe"
        },
        ingredient13: {
          id: "ingredient13",
          name: "Bourbon"
        },
        ingredient14: {
          id: "ingredient14",
          name: "Gin"
        },
        ingredient15: {
          id: "ingredient15",
          name: "Mezcal"
        },
        ingredient16: {
          id: "ingredient16",
          name: "Rum"
        },
        ingredient17: {
          id: "ingredient17",
          name: "Rum (Dark)"
        },
        ingredient18: {
          id: "ingredient18",
          name: "Rum (Gold)"
        },
        ingredient19: {
          id: "ingredient19",
          name: "Rye Whiskey"
        },
        ingredient20: {
          id: "ingredient20",
          name: "Scotch (Blended)"
        },
        ingredient21: {
          id: "ingredient21",
          name: "Tequila"
        },
        ingredient22: {
          id: "ingredient22",
          name: "Vodka"
        },
        ingredient23: {
          id: "ingredient23",
          name: "Vodka Citron"
        },
        ingredient24: {
          id: "ingredient24",
          name: "Allspice Dram"
        },
        ingredient25: {
          id: "ingredient25",
          name: "Amaretto"
        },
        ingredient26: {
          id: "ingredient26",
          name: "Campari"
        },
        ingredient27: {
          id: "ingredient27",
          name: "Cognac"
        },
        ingredient28: {
          id: "ingredient28",
          name: "Cointreau"
        },
        ingredient29: {
          id: "ingredient29",
          name: "Curacao"
        },
        ingredient30: {
          id: "ingredient30",
          name: "Kahlua"
        },
        ingredient31: {
          id: "ingredient31",
          name: "Maraschino"
        },
        ingredient32: {
          id: "ingredient32",
          name: "Maraschino Liqueur"
        },
        ingredient33: {
          id: "ingredient33",
          name: "St. Germain"
        },
        ingredient34: {
          id: "ingredient34",
          name: "Vermouth (Dry)"
        },
        ingredient35: {
          id: "ingredient35",
          name: "Vermouth (Sweet)"
        },
        ingredient36: {
          id: "ingredient36",
          name: "Club Soda"
        },
        ingredient37: {
          id: "ingredient37",
          name: "Coca-Cola"
        },
        ingredient38: {
          id: "ingredient38",
          name: "Cranberry Juice"
        },
        ingredient39: {
          id: "ingredient39",
          name: "Dry Champagne"
        },
        ingredient40: {
          id: "ingredient40",
          name: "Egg White"
        },
        ingredient41: {
          id: "ingredient41",
          name: "Ginger Ale"
        },
        ingredient42: {
          id: "ingredient42",
          name: "Ginger Beer"
        },
        ingredient43: {
          id: "ingredient43",
          name: "Grapefruit Juice"
        },
        ingredient44: {
          id: "ingredient44",
          name: "Grenadine"
        },
        ingredient45: {
          id: "ingredient45",
          name: "Lemon Juice"
        },
        ingredient46: {
          id: "ingredient46",
          name: "Lemonade"
        },
        ingredient47: {
          id: "ingredient47",
          name: "Lime Juice"
        },
        ingredient48: {
          id: "ingredient48",
          name: "Olive Brine"
        },
        ingredient49: {
          id: "ingredient49",
          name: "Orange Juice"
        },
        ingredient50: {
          id: "ingredient50",
          name: "Simple Syrup"
        },
        ingredient51: {
          id: "ingredient51",
          name: "Tonic Water"
        },
        ingredient52: {
          id: "ingredient52",
          name: "Whole Milk"
        },
        ingredient53: {
          id: "ingredient53",
          name: "Angostura Bitters"
        },
        ingredient54: {
          id: "ingredient54",
          name: "Orange Bitters"
        },
        ingredient55: {
          id: "ingredient55",
          name: "Peychaud’s Bitters"
        },
        ingredient56: {
          id: "ingredient56",
          name: "Honey Syrup"
        },
        ingredient57: {
          id: "ingredient57",
          name: "Maple Syrup"
        }
      },
      allIds: [
        "ingredient1",
        "ingredient2",
        "ingredient3",
        "ingredient4",
        "ingredient5",
        "ingredient6",
        "ingredient7",
        "ingredient8",
        "ingredient9",
        "ingredient10",
        "ingredient11",
        "ingredient12",
        "ingredient13",
        "ingredient14",
        "ingredient15",
        "ingredient16",
        "ingredient17",
        "ingredient18",
        "ingredient19",
        "ingredient20",
        "ingredient21",
        "ingredient22",
        "ingredient23",
        "ingredient24",
        "ingredient25",
        "ingredient26",
        "ingredient27",
        "ingredient28",
        "ingredient29",
        "ingredient30",
        "ingredient31",
        "ingredient32",
        "ingredient33",
        "ingredient34",
        "ingredient35",
        "ingredient36",
        "ingredient37",
        "ingredient38",
        "ingredient39",
        "ingredient40",
        "ingredient41",
        "ingredient42",
        "ingredient43",
        "ingredient44",
        "ingredient45",
        "ingredient46",
        "ingredient47",
        "ingredient48",
        "ingredient49",
        "ingredient50",
        "ingredient51",
        "ingredient52",
        "ingredient53",
        "ingredient54",
        "ingredient55",
        "ingredient56",
        "ingredient57"
      ]
    },
    categories: {
      byId: {
        category1: {
          id: "category1",
          name: "Produce",
          ingredients: [
            "ingredient1",
            "ingredient2",
            "ingredient3",
            "ingredient4",
            "ingredient5",
            "ingredient6",
            "ingredient7",
            "ingredient8",
            "ingredient9",
            "ingredient10",
            "ingredient11"
          ]
        },
        category2: {
          id: "category2",
          name: "Spirits",
          ingredients: [
            "ingredient12",
            "ingredient13",
            "ingredient14",
            "ingredient15",
            "ingredient16",
            "ingredient17",
            "ingredient18",
            "ingredient19",
            "ingredient20",
            "ingredient21",
            "ingredient22",
            "ingredient23"
          ]
        },
        category3: {
          id: "category3",
          name: "Liqueur",
          ingredients: [
            "ingredient24",
            "ingredient25",
            "ingredient26",
            "ingredient27",
            "ingredient28",
            "ingredient29",
            "ingredient30",
            "ingredient31",
            "ingredient32",
            "ingredient33",
            "ingredient34",
            "ingredient35"
          ]
        },
        category4: {
          id: "category4",
          name: "Mixers",
          ingredients: [
            "ingredient36",
            "ingredient37",
            "ingredient38",
            "ingredient39",
            "ingredient40",
            "ingredient41",
            "ingredient42",
            "ingredient43",
            "ingredient44",
            "ingredient45",
            "ingredient46",
            "ingredient47",
            "ingredient48",
            "ingredient49",
            "ingredient50",
            "ingredient51",
            "ingredient52"
          ]
        },
        category5: {
          id: "category5",
          name: "Bitters",
          ingredients: ["ingredient53", "ingredient54", "ingredient55"]
        },
        category6: {
          id: "category6",
          name: "Syrups",
          ingredients: ["ingredient56", "ingredient57"]
        }
      },
      allIds: [
        "category1",
        "category2",
        "category3",
        "category4",
        "category5",
        "category6"
      ]
    },
    recipes: {
      byId: {
        recipe1: {
          id: "recipe1",
          name: "Highball",
          ingredients: ["ingredient13", "ingredient36"]
        }
      },
      allIds: ["recipe1"]
    }
  }
};
