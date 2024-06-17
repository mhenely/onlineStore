import { useContext } from 'react'

import ShoppingIcon from '../../assets/shopping-bag.jsx'
import { CartContext } from '../../contexts/cart-context.jsx'

import './cart-icon.styles.scss'
import { set } from 'firebase/database'

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  // sum quantity of all carItems 

  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon;