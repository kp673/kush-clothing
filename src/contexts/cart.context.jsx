import { createContext, useMemo, useState } from "react";

export const CartContext = createContext({
  cartDropdown: false,
  setCartDropdown: () => null,
  cartItems: [],
  setCartItems: () => null
})

export const CartProvider = ({children}) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const value = useMemo(() => ({ cartDropdown, setCartDropdown, cartItems, setCartItems }), [cartDropdown, setCartDropdown, cartItems, setCartItems]);
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>



}
