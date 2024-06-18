import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

import {CategoryContainer, CategoryTitle} from './category.styles.jsx'


const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [ products, setProducts ] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {
          // safeguard in case products is empty (especially due to async)
          products && 
          products.map((product) => (
          <ProductCard key={product.id} product={product} />
          )
        )}
      </CategoryContainer>
    </>
  )
}

export default Category;