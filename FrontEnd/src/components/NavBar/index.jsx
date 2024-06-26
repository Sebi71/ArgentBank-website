import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "../../redux/Slice/connectSlice";
import logo from "../../assets/images/argentBankLogo.webp";
import "./index.scss";

export default function NavBar() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.signIn.token);
  const user = useSelector((state) => state.profile.user);

   const handleSignOut = () => {
    dispatch(signOut());
  };

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
        {!token ? (
          <NavLink className="nav-sign-in" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        ) : (
          <div className="sign-out-container">
            <NavLink className="nav-sign-out" to="/profile">
              <i className="fa fa-user-circle"></i>
              <span className="name-user">{`${user?.userName}`}</span>
            </NavLink>
            <NavLink className="nav-sign-out" to="/" onClick={handleSignOut}>
              <FaSignOutAlt className="icon-sign-in" />
              Sign Out
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
