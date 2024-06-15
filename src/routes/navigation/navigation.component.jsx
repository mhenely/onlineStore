import { Outlet, Link } from "react-router-dom";
import CrwnLogo from '../../assets/CrwnLogo'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <>
      <div className="navigation" >
        <Link className="logo-container" to='/'>
          <CrwnLogo />
        </Link>
        <div className="links-container">
          <Link className="nav-links-container" to="/shop" >
            SHOP
          </Link>
          <Link className="nav-links-container" to="/auth" >
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}


export default Navigation;