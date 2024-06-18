import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'

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
    <CartDropdownContainer>
      <CartItems >
        {
          cartItems.length ? (cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item}/>
          })) 
          : <EmptyMessage>Your cart is empty</EmptyMessage>
        }
        
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>    
    </CartDropdownContainer>
  )
}

export default CartDropdown;