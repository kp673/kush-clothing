import {CategoriesAction} from "./categories.types";

export const INITIAL_STATE = {
  categories: []
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CategoriesAction.setCategories:
      return {
        ...state,
        categories: payload
      }
    default:
      return state;
  }
}