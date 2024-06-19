import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import CrwnLogo from '../../assets/CrwnLogo'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector.js";

// import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart-context";

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useSelector((state) => state.)
  const { isCartOpen } = useContext(CartContext);

  // tracking authentication state of the user and resetting context back to the state of no user logged in
  const signOutHandler = async() => {
    const result = await signOutUser();
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" >
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutHandler}>Sign Out</NavLink>
            ) : (
              <NavLink to="/auth" >
              Sign In
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {/* douple ampersand returns last truthy value (so returns the component if both are truthy) */}
        { isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}


export default Navigation;