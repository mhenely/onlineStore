import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CrwnLogo from '../../assets/CrwnLogo'

import './navigation.styles.scss'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";

const Navigation = () => {

  const {currentUser } = useContext(UserContext);

  // tracking authentication state of the user and resetting context back to the state of no user logged in
  const signOutHandler = async() => {
    const result = await signOutUser();
  }

  return (
    <>
      <div className="navigation" >
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop" >
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>Sign Out</span>
            ) : (
              <Link className="nav-link" to="/auth" >
              Sign In
              </Link>
            )
          }
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  )
}


export default Navigation;