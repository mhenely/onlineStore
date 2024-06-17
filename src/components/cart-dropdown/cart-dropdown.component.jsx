import { useContext } from 'react';
import { useNavigate } from 'react-router';

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { CartContext } from '../../contexts/cart-context';

const CartDropdown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' >
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item}/>
        })}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>    
    </div>
  )
}

export default CartDropdown;