import { getIngredients } from "../data/selectors";
import { connect } from "react-redux";
import { IngredientsList as IngredientsListPresentation } from "../components/IngredientsList";
import { toggleAvailability } from "../data/actions";

export const IngredientsList = connect(
  (state, { categoryId }) => ({
    ingredients: getIngredients(state, categoryId)
  }),
  dispatch => ({
    onIngredientClick: id => dispatch(toggleAvailability(id))
  })
)(IngredientsListPresentation);
