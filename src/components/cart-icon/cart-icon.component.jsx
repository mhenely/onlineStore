import { useDispatch, useSelector } from 'react-redux';

// import ShoppingIcon from '../../assets/shopping-bag.jsx'

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import {ShopIcon, CartIconContainter, ItemCount} from './cart-icon.styles.jsx'
import ShoppingCartIcon from '../../assets/ShoppingCartIcon.jsx';

const CartIcon = () => {

const dispatch = useDispatch();

const cartCount = useSelector(selectCartCount);
const isCartOpen = useSelector(selectIsCartOpen);

  const toggleCartOpen = () => {

    return dispatch(setIsCartOpen(!isCartOpen));
  }

  // sum quantity of all carItems 

  return (
    <CartIconContainter onClick={toggleCartOpen}>
      <ShoppingCartIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainter>
  )
}

export default CartIcon;