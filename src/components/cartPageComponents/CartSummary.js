import React from "react";
import { useAddToCart } from "../util/useAddToCart";

export const CartSummary = () => {
  const summaryHook = useAddToCart();
  const summaryArray = summaryHook.summaryItemName;

  // Create an object to store the item counts
  const itemCounts = {};

  // Count the occurrences of each item
  summaryArray.forEach((item) => {
    const itemName = item.name;
    const product = itemCounts[itemName];
    if (product) {
      itemCounts[itemName] += 1;
    } else {
      itemCounts[itemName] = 1;
    }
  });

  return (
    <div>
      SUMMARY:
      {Object.entries(itemCounts).map(([itemName, count]) => (
        <div key={itemName}>
          {itemName}: {count}
        </div>
      ))}
    </div>
  );
};
