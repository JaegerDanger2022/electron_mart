import React from "react";
import { useAddToCart } from "../util/useAddToCart";
import { IconButton } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

export const ProductItem = ({ productImage, productTitle, productPrice }) => {
  const addToCartHook = useAddToCart();
  const handleAddToCart = () => {
    addToCartHook.addToCart();
  };
  const backgroundStyle = {
    backgroundImage: `url(${productImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    width: "20vw",
  };
  return (
    <div className="productItemCard">
      <div className="productItemImage" style={backgroundStyle}></div>
      <div className="addToCart" onClick={handleAddToCart}>
        <IconButton>
          <AddShoppingCartOutlinedIcon color="warning" />
        </IconButton>
      </div>
      <div className="productItemTitle">{productTitle}</div>
      <div className="productItemPrice">${productPrice}</div>
    </div>
  );
};
