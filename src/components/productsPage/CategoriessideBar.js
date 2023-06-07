import React from "react";
import { NavLink } from "react-router-dom";

export const CategoriessideBar = () => {
  return (
    <div>
      <p className="categoryListTitle">Categories</p>
      <div className="categoryList">
        <NavLink to="/electronics/ElectronicsProducts">Electronics</NavLink>
        <NavLink to="/men's clothing/mensClothing">Men's Clothing</NavLink>
        <NavLink to="/women's clothing/womensClothing">
          Women's Clothing
        </NavLink>
      </div>
    </div>
  );
};
