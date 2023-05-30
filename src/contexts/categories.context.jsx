import { createContext, useEffect, useMemo, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap) 
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  },[])

  const value = useMemo(() => ({ categoriesMap }), [categoriesMap]);
  

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}