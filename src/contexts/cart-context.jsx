import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)
    // if found, increment quantity

  // if an existing product 
  if (existingCartItem) {
    return cartItems.map((item) => item.id === productToAdd.id ? 
      {...item, quantity: item.quantity + 1} : item)
  }
  // return when new product
  return [...cartItems, {...productToAdd, quantity: 1}]
    // return new array with modified cartItems or new cart item
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove within cartItems array
  const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id)
  // if quantity is 1, remove item from cart
  if(existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  // if quantity greater than 1, decrement proper quantity from cartItems 
  return cartItems.map((item) => 
    item.id === cartItemToRemove.id ?
    { ...item, quantity: item.quantity - 1}
    : item
  )
}

const clearCartItem = (cartItems, cartItemtoClear) => {
  return cartItems.filter((item) => item.id !== cartItemtoClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}, 
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({children}) => {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartCount, setCartCount ] = useState(0);
  const [ cartTotal, setCartTotal ] = useState(0);

  // to increment cartCount when a new item is added
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems])

  // update cartTotal
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(newCartTotal);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
