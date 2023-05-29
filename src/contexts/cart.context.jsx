import { createContext, useMemo, useState } from "react";


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

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => { },
  total: 0,
  setTotal: () => {},
})

export const CartProvider = ({children}) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addItemToCart = (product) => {
    setTotal(total+1)
    setCartItems(addCartItem(cartItems, product))
  }

  const value = useMemo(() => ({ cartDropdown, setCartDropdown, cartItems, addItemToCart, total}), [cartDropdown, setCartDropdown, cartItems, addItemToCart, total]);
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}
