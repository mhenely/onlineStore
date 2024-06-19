import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx'
import { selectCartItems } from '../../store/cart/cart.selector.js';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';


const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
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