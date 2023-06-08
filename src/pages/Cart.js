import React from "react";
import { CartSummary } from "../components/cartPageComponents/CartSummary";
import { CartTotal } from "../components/cartPageComponents/CartTotal";

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
