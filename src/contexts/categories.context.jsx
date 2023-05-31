import { createContext, useEffect, useReducer } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesAction = {
  setCategoriesMap: "SET_CATEGORIES_MAP"
}
const INITIAL_STATE = {
  categoriesMap : []
}

const categoriesReducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case CategoriesAction.setCategoriesMap:
      return {
        ...state,
        categoriesMap: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in categoriesReducer`)
  }
}

export const CategoriesProvider = ({children}) => {
  const [{ categoriesMap }, dispatch] = useReducer(categoriesReducer, INITIAL_STATE)
  
  const setCategoriesMap = (categoryMap) => {
    dispatch({type: CategoriesAction.setCategoriesMap, payload: categoryMap})
  }

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  },[])

  const value = {categoriesMap}
  

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}