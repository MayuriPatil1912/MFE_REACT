import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <>
     <span className="cart">{props.cart.length}</span>
      <div className="header">Microfrontend Host Application</div>

      <ul className="nav">
        {/* // if we use anchor tag instaed of Link page will reload so using Link */}

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productlist"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Todo List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/foodlist"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Food List
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
