import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount, ShoppingLogo } from './cart-icon.styles';


const CartIcon = () => {
  const {cartDropdown, setCartDropdown, total} = useContext(CartContext)

  const toggleCartDropdown = ()=> setCartDropdown(!cartDropdown)
  return (
    <CartIconContainer onClick={toggleCartDropdown}>
      <ShoppingLogo/>
      <ItemCount>{ total }</ItemCount>
    </CartIconContainer>
  );

}

export default CartIcon;