import { useState, createContext, useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: [],
});


export const CategoriesProvider = ({ children }) => {
  const [ categoriesMap, setCategoriesMap ] = useState({});
  
  useEffect(() => {
    const getCategoriesMap = async() => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
      }
      getCategoriesMap();
      }, [])
      
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
}


// to add new documents, check out Firebase Database Storage -addCollectionAndDocuments vid