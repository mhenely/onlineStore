import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import {ProductCardContainer, Footer, Name, Price } from './product-card.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action.js';


const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => {
    return dispatch(addItemToCart(cartItems, product));
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add To Card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;