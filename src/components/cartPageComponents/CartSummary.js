import React from "react";
import { useAddToCart } from "../util/useAddToCart";
import { useGetProducts } from "../hooks/useGetProducts";

export const CartSummary = () => {
  const summaryHook = useAddToCart();
  const { data } = useGetProducts();
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
    <table className="summaryTable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(itemCounts).map(([itemName, count]) => (
          <tr key={itemName}>
            {data?.data
              .filter((item) => item.title === itemName)
              .map((filteredItem) => (
                <td key={filteredItem.id} className="summaryItemImage">
                  <img
                    src={filteredItem.image}
                    alt={filteredItem.title}
                    style={{ width: "10vw", height: "10vw" }}
                  />
                </td>
              ))}
            <td className="summaryItemName">{itemName}</td>
            {data?.data
              .filter((item) => item.title === itemName)
              .map((filteredItem) => (
                <td className="summaryItemPrice">{filteredItem.price}</td>
              ))}

            <td className="summaryItemCount">{count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
