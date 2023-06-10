import React from "react";
import { CartTotal } from "../components/cartPageComponents/CartTotal";
import { CartSummary } from "../components/cartPageComponents/CartSummary";

export const Cart = () => {
  return (
    <div className="cartPage">
      <p className="cartPageTitle">Cart</p>
      <div className="cartPageDisplay">
        <CartSummary />
        <CartTotal className="total" />
      </div>
    </div>
  );
};
