import { getIngredients } from "../data/selectors";
import { connect } from "react-redux";
import { IngredientsList as IngredientsListPresentation } from "../components/IngredientsList";

export const IngredientsList = connect((state, { categoryId }) => ({
  ingredients: getIngredients(state, categoryId)
}))(IngredientsListPresentation);
