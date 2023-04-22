import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../Redux/reducers/login";
import "./Navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="navbar">
      <h3 className="navbar__logo">My App</h3>
      <ul className="navbar__list">
        {currentUser ? (
          <>
            <li className="navbar__item">Hello, {currentUser}!</li>
            <li className="navbar__item">
              <button className="navbar__button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="navbar__item">
              <NavLink className="navbar__link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" to="/register">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
