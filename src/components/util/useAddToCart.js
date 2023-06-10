import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [summaryItemName, setSummaryItemName] = useState([]);
  const [subtotal, setSubTotal] = useState([]);

  // increases the number of items added to the cart
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Adds item name and an id to an array
  const addSummaryProductDetails = (itemName) => {
    setSummaryItemName((prevSummaryItemName) => [
      ...prevSummaryItemName,
      { id: summaryItemName.length + 1, name: itemName },
    ]);
  };

  const calculateSubTotal = (count, price) => {
    const subTotal = count * price;
    setSubTotal((prevSubTotal) => [...prevSubTotal, +subTotal]);
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
          calculateSubTotal,
          subtotal,
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
