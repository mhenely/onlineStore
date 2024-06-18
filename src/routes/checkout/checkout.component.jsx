import { useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {CheckoutContainer, HeaderBlock, CheckoutHeader, Total} from './checkout.styles.jsx'
import { CartContext } from '../../contexts/cart-context';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout;