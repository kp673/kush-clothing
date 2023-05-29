import { createContext, useEffect, useMemo, useState } from "react";


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

export const CartProvider = ({children}) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalPrice(newTotalPrice)
  },[cartItems]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addItemToCart = (product) => {
    setTotal(total+1)
    setCartItems(addCartItem(cartItems, product))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeItemFromCart = (cartItem) => {
    setTotal(total-1)
    setCartItems(removeCartItem(cartItems, cartItem))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  const removeProductFromCart = (product) => {
    setTotal(total - product.quantity)
    setCartItems(removeProduct(cartItems,product))
  }

  const value = useMemo(() => ({ cartDropdown, setCartDropdown, cartItems, addItemToCart, removeItemFromCart,removeProductFromCart,total, totalPrice}), [cartDropdown, setCartDropdown, cartItems, addItemToCart, removeItemFromCart, removeProductFromCart,total, totalPrice]);
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}
