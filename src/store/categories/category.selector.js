import { createSelector } from "reselect";

// intitial selector
const selectCategoryReducer = (state) => state.categories;

// memoized selector - only runs if categories updates
export const selectCategories = createSelector(
  [selectCategoryReducer], 
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => 
  categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)