import React from "react";
import { NavLink } from "react-router-dom";
import { useAddToCart } from "./util/useAddToCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import { Badge, Icon } from "@mui/material";

export const LowerMenuBanner = () => {
  const cartTotal = useAddToCart();
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
          <Badge badgeContent={cartTotal.cartCount} color="error">
            <div className="cart">
              <NavLink to="/cart">
                <Icon>
                  <LocalMallIcon />
                </Icon>
              </NavLink>
              {/* <span className="cartTotal">{cartTotal.cartCount}</span> */}
            </div>
          </Badge>
          <div className="cart_vertical_line"></div>
          <div className="login">
            <NavLink>Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
