import { useContext } from 'react'

import ShoppingIcon from '../../assets/shopping-bag.jsx'
import { CartContext } from '../../contexts/cart-context.jsx'

import './cart-icon.styles.scss'
import { set } from 'firebase/database'

const CartIcon = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon;