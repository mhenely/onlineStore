import { CART_ACTION_TYPES } from "./cart.types";
import createAction from "../../utils/reducer/reducer.utils";


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


export const setIsCartOpen = (bool) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);


export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
