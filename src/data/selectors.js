export const getCategories = state =>
  state.entities.categories.allIds.map(
    id => state.entities.categories.byId[id]
  );

export const getIngredients = (state, categoryId) =>
  state.entities.categories.byId[categoryId].ingredients.map(id => ({
    ...state.entities.ingredients.byId[id],
    ...{ active: !!state.ui.availability[id] }
  }));
