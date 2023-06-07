import React from "react";
import { HeroArticle } from "./HeroArticle";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="heroArticle">
        <HeroArticle />
      </div>
      <div className="heroInfobar"></div>
    </div>
  );
};
