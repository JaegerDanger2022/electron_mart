import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const MidBanner = () => {
  return (
    <div className="midBanner">
      <div className="logo">electron</div>
      <div className="searchDiv">
        <div className="searchBar">
          <input type="text" placeholder="Search Products" />
        </div>

        <button className="searchBtn">search</button>
      </div>
    </div>
  );
};
