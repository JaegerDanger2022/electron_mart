import React from "react";
import { CategoriessideBar } from "../components/productsPage/CategoriessideBar";
import { ProductsDisplay } from "../components/productsPage/ProductsDisplay";

export const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="categoriesSideBar">
        <CategoriessideBar />
      </div>
      <div className="productDisplay">
        <ProductsDisplay />
      </div>
    </div>
  );
};
