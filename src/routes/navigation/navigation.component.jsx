import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HomeLogo from '../../assets/HomeLogo.jsx'

import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles.jsx'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutStart } from "../../store/user/user.action.js";


const Navigation = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  // with saga
  const signOutUser = async() => {
    dispatch(signOutStart());
  }

  // with no saga
  // tracking authentication state of the user and resetting context back to the state of no user logged in
  // const signOutHandler = async() => {
  //   const result = await signOutUser();
  // }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <HomeLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" >
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
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