import { useContext } from 'react'

// import ShoppingIcon from '../../assets/shopping-bag.jsx'
import { CartContext } from '../../contexts/cart-context.jsx'

import {ShopIcon, CartIconContainter, ItemCount} from './cart-icon.styles.jsx'

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  // sum quantity of all carItems 

  return (
    <CartIconContainter onClick={toggleCartOpen}>
      <ShopIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainter>
  )
}

export default CartIcon;