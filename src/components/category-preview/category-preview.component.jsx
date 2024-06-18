import { Link } from 'react-router-dom';

import {CategoryPreveiewContainer, Preview} from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products}) => {
  return (
    <CategoryPreveiewContainer>
      <h2>
        <Link to={title} className='title'>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {
          // only grab first 4 items in the category
          products
          .filter((_, idx) => idx < 4)
          .map((product) =>
          <ProductCard key={product.id} product={product}/>)
        }
      </Preview>
    </CategoryPreveiewContainer>
  )
}

export default CategoryPreview;