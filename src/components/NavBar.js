import React from "react";
import { TopBanner } from "./TopBanner";
import { MidBanner } from "./MidBanner";
import { LowerMenuBanner } from "./LowerMenuBanner";

export const NavBar = () => {
  return (
    <div className="navBar">
      <TopBanner />
      <MidBanner />
      <LowerMenuBanner />
    </div>
  );
};
