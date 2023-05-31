import {CategoriesAction} from "./categories.types";

export const INITIAL_STATE = {
  categoriesMap : {}
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CategoriesAction.setCategoriesMap:
      return {
        ...state,
        categoriesMap: payload
      }
    default:
      return state;
  }
}