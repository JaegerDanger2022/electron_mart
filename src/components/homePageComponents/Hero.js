import React from "react";
import { HeroArticle } from "./HeroArticle";
import { HeroInfoBar } from "./HeroInfoBar";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="heroArticle">
        <HeroArticle />
      </div>
      <div className="heroInfobar">
        <HeroInfoBar />
      </div>
    </div>
  );
};
