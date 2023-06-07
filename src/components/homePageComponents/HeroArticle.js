import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export const HeroArticle = () => {
  return (
    <div className="heroArticleContainer">
      <div className="heroArticleTitle">
        THE BEST HOME ENTERTAINMENT SYSTEM IS HERE
      </div>
      <div className="heroArticleParagraph">
        Enter a new <span>Dimenssion</span> of total immersiveness
      </div>
      <div className="heroArticleCallToAction">
        <NavLink to="/electronics/ElectronicsProducts">
          <Button variant="contained">Shop Now</Button>
        </NavLink>
      </div>
    </div>
  );
};
