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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}, 
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
})

export const CartProvider = ({children}) => {
  const [ isCartOpen, setIsCartOpen ] = useState(false);
  const [ cartItems, setCartItems ] = useState([])
  const [ cartCount, setCartCount ] = useState(0)

  // to increment cartCount when a new item is added
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


// product {
//   id, 
//   name, 
//   price, 
//   imageUrl
// }

// Cart Item {
//   id, 
//   name, 
//   price, 
//   imageUrl,
//   quantity
// }

// const testObj = {
//   id: '124089812',
//   name: 'Test',
//   price: 55,
//   imageUrl: 'thisisatest.com',
//   quantity: 5
// }