import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NavLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { LogoContainer, NavLinks, NavigationContainer, NavLink } from"./navBar.styles";

const NavBar = () => {
  const { currentUser } = useContext(UserContext)
   const {cartDropdown} = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <NavLogo className='logo'/>
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