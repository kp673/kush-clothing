import { createContext, useReducer } from "react";

const addCartItem = (cartItems, product) => {
  const index = cartItems.find((item) => item.id === product.id)
  if (index) {
    return cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item

    );
  }
  return [...cartItems, {...product, quantity: 1}]
}

const removeCartItem = (cartItems, cartItem) => {
  const index = cartItems.find((item) => item.id === cartItem.id)
  if (index.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItem.id)
  }
  return cartItems.map((item) =>
      item.id === cartItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
}
const removeProduct = (cartItems, product) => {
  return cartItems.filter(item => item.id !== product.id)
}

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => { },
  removeCartItem: () => { },
  removeProductFromCart: () =>{},
  total: 0,
  totalPrice: 0,
})

export const CartActions = {
  setCartDropdown: 'SET_CART_DROPDOWN',
  setCartItems: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
  cartDropdown: false,
  cartItems: [],
  total: 0,
  totalPrice: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CartActions.setCartDropdown:
      return {
        ...state,
        cartDropdown: payload
      }  
    case CartActions.setCartItems:
      return {
        ...state,
        ...payload
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

export const CartProvider = ({children}) => {
  const [{cartItems, cartDropdown, total, totalPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  
  const updatePayloads = (newCartItems) => {
    const newTotalPrice = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const newTotal = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    dispatch({
      type: CartActions.setCartItems,
      payload: {
        totalPrice: newTotalPrice,
        total: newTotal,
        cartItems: newCartItems
      }
    })
  }

  const setCartDropdown = (bool) => {
    dispatch({
      type: CartActions.setCartDropdown, 
      payload: bool
    })
  }
  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updatePayloads(newCartItems);
  }
  const removeItemFromCart = (cartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    updatePayloads(newCartItems);
  }
  const removeProductFromCart = (product) => {
    const newCartItems = removeProduct(cartItems, product);
    updatePayloads(newCartItems);
  }

  const value = { cartDropdown, setCartDropdown, cartItems, addItemToCart, removeItemFromCart,removeProductFromCart,total, totalPrice}
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}
