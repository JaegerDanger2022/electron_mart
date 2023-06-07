import React from "react";
import { CartSummary } from "../components/cartComponents/CartSummary";
import { CartTotal } from "../components/cartComponents/CartTotal";

export const Cart = () => {
  return (
    <div className="cartPage">
      <p className="cartPageTitle">Cart</p>
      <div className="cartPageDisplay">
        <CartSummary className="summary" />
        <CartTotal className="total" />
      </div>
    </div>
  );
};
