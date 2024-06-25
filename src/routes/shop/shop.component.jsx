import {Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';
// import { setCategories } from '../../store/categories/category.action.js';
// import {ProductsContainer} from './shop.styles.jsx'
import { fetchCategoriesStart } from '../../store/categories/category.action.js';
// import SHOP_DATA from '../../shop-data.js';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
    // addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])

  // non redux thunk code
  // useEffect(() => {
  //   const getCategoriesMap = async() => {
  //     const categoriesArray = await getCategoriesAndDocuments();

  //     dispatch(setCategories(categoriesArray));
  //     }
  //     getCategoriesMap();
  //     }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop;