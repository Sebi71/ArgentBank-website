import { NavLink } from "react-router-dom"
import logo from "../../assets/images/argentBankLogo.webp"
import { FaSignOutAlt } from "react-icons/fa";

import "./index.scss"

export default function NavBar() {
  return (
    <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="link">
        {/*afficher en fonction token récup */}
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
        <NavLink className="main-nav-item" to="/profile">
          <i className="fa fa-user-circle"></i>
          <span className="name-user">à remplacer</span>
        </NavLink>
        <NavLink className="main-nav-item" to="/">
          <FaSignOutAlt className="icon-sign-in" />
          Sign Out
        </NavLink>
      </div>
    </nav>
  )
}