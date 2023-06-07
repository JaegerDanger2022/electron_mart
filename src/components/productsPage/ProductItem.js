import React, { useState } from "react";
import { useAddToCart } from "../util/useAddToCart";
export const ProductItem = ({ productImage, productTitle, productPrice }) => {
  const [count, setCount] = useState(0);
  const addToCartHook = useAddToCart();
  const handleAddToCart = () => {
    addToCartHook.addToCart(count + 1);
    setCount(count + 1);
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
        +
      </div>
      <div className="productItemTitle">{productTitle}</div>
      <div className="productItemPrice">${productPrice}</div>
    </div>
  );
};
