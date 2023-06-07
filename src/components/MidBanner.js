import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

export const MidBanner = () => {
  return (
    <div className="midBanner">
      <NavLink to="/">
        <div className="logo">electronmart</div>
      </NavLink>
      <div className="searchDiv">
        <div className="searchBar">
          <input type="text" placeholder="Search Products" />
        </div>

        <button className="searchBtn">search</button>
      </div>
    </div>
  );
};
