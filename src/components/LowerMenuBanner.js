import React from "react";
import { NavLink } from "react-router-dom";

export const LowerMenuBanner = () => {
  return (
    <div className="lowerBanner">
      <div className="categories_and_cart">
        <div className="categoryLinks">
          <NavLink to="/electronics/ElectronicsProducts">Electronics</NavLink>
          <NavLink to="/men's clothing/mensClothing">Men's Clothing</NavLink>
          <NavLink to="/women's clothing/womensClothing">
            Women's Clothing
          </NavLink>
        </div>
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
