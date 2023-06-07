import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItemName, setCartItemName] = useState([]);

  const addToCart = (count) => {
    setCartCount(count);
  };

  return (
    <div>
      <CartContext.Provider
        value={{ cartCount, cartItemName, addToCart, setCartItemName }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useAddToCart = () => {
  return useContext(CartContext);
};
