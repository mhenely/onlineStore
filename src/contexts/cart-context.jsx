import { createContext, useReducer } from "react";

import createAction from "../utils/reducer/reducer.utils";

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
  isCartOpen: true,
  setIsCartOpen: () => {}, 
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
})

const CART_ACTION_TYPES = {
  'SET_CART_ITEMS': 'SET_CART_ITEMS',
  'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
  isCartOpen: false, 
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state, 
        isCartOpen: payload
      }
    default: 
      throw new Error(`unhandled type of ${type} in cartReducer`)
  }
}
 
export const CartProvider = ({children}) => {
  const [ { cartItems, cartCount, cartTotal, isCartOpen }, dispatch ] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems, 
        cartTotal: newCartTotal, 
        cartCount: newCartCount
      })
    )
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  }

  const setIsCartOpen = (bool) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
    )
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
