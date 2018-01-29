import { getCategories } from "../data/selectors";
import { connect } from "react-redux";
import { CategoriesList as CategoriesListPresentation } from "../components/CategoriesList";

export const CategoriesList = connect(state => ({
  categories: getCategories(state)
}))(CategoriesListPresentation);
