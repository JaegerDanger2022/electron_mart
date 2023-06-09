import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  //   count for individual items
  //   const [itemCount, setItemCount] = useState(0);

  const [summaryItemName, setSummaryItemName] = useState([]);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  const removeFromCart = () => {
    setCartCount(cartCount - 1);
  };
  //   Order Summary Page
  const addSummaryProductDetails = (itemName, itemImage) => {
    setSummaryItemName((prevSummaryItemName) => [
      ...prevSummaryItemName,
      { id: summaryItemName.length + 1, name: itemName },
    ]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cartCount,
          summaryItemName,
          setSummaryItemName,
          addToCart,
          addSummaryProductDetails,
          //   setItemCount,
          //   itemCount,
          //   summaryCount,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useAddToCart = () => {
  return useContext(CartContext);
};
