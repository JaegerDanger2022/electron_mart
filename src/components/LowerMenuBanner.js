import React from "react";
import { NavLink } from "react-router-dom";

export const LowerMenuBanner = () => {
  return (
    <div className="lowerBanner">
      <div className="categories_and_cart">
        <NavLink>All Products</NavLink>
        <NavLink>Home Applieances</NavLink>
        <NavLink to="audio-video">Audio & Video</NavLink>
        <NavLink>New Arivals</NavLink>
        <NavLink>Today's Deal</NavLink>
        <NavLink>Gift Cards</NavLink>
        <div className="cart_and_login">
          <div className="cart">
            <NavLink>Cart</NavLink>
          </div>
          <div className="cart_vertical_line"></div>
          <div className="login">
            <NavLink>Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
