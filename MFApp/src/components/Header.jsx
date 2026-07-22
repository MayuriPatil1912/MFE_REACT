import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props.cart);
  const [showCart, setShowCart] = useState(false);

  const clickHandler = () => {
    setShowCart(!showCart);
  };
  return (
    <>
      <span className="cart" onClick={clickHandler}>
        🛒 ({props.cart.length})
      </span>
      <div>
        {showCart && (
          <ul className="cart-items">
            {props.cart.map((cartItem) => {
              return (
                <li key={cartItem.id}>
                  {cartItem.name} ({cartItem.quantity})
                </li>
              );
            })}
          </ul>
        )}
      </div>
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
