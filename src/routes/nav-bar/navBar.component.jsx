import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as NavLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss"

const NavBar = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <NavLogo className='logo'/>
        </Link>
        
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {!currentUser ?
            <Link className='nav-link' to='/authenticate'>
              Sign in
            </Link> :
            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
          }
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default NavBar