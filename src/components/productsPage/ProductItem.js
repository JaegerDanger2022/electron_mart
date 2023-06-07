import React from "react";

export const ProductItem = ({ productImage, productTitle, productPrice }) => {
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
      <div className="productItemTitle">{productTitle}</div>
      <div className="productItemPrice">{productPrice}</div>
    </div>
  );
};
