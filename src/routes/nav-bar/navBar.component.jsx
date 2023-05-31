import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Logo, LogoContainer, NavLink, NavLinks, NavigationContainer } from "./navBar.styles";
import { selectCurrentUser } from "../../store/user/user.selector";

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const {cartDropdown} = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo/>
        </LogoContainer>
        
        <NavLinks>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {!currentUser ?
            <NavLink  to='/authenticate'>
              Sign in
            </NavLink> :
            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
          }
          <CartIcon on/>
        </NavLinks>
        {cartDropdown && <CartDropdown />}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  );
}

export default NavBar