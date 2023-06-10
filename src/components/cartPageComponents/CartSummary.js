import React, { useEffect } from "react";
import { useAddToCart } from "../util/useAddToCart";
import { useGetProducts } from "../hooks/useGetProducts";

export const CartSummary = () => {
  const summaryHook = useAddToCart();
  const { data } = useGetProducts();
  const summaryArray = summaryHook.summaryItemName;
  const subTotalArray = summaryHook.subtotal;
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

  useEffect(() => {
    // Calculate subtotals and update the array
    Object.entries(itemCounts).forEach(([itemName, count]) => {
      const filteredItem = data?.data.find((item) => item.title === itemName);
      if (filteredItem) {
        const subtotal = count * filteredItem.price;
        summaryHook.calculateSubTotal(subtotal);
      }
    });
  }, [summaryArray, data?.data, summaryHook]);

  const totalSubtotal = subTotalArray.reduce(
    (total, subtotal) => total + subtotal,
    0
  );
  console.log(totalSubtotal);

  return (
    <table className="summaryTable">
      <thead>
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(itemCounts).map(([itemName, count]) => {
          const filteredItem = data?.data.filter(
            (item) => item.title === itemName
          )[0];
          const subtotal = count * filteredItem.price;
          return (
            <tr key={itemName}>
              <td className="summaryItemImage">
                <img
                  src={filteredItem.image}
                  alt={filteredItem.title}
                  style={{ width: "10vw", height: "10vw" }}
                />
              </td>
              <td className="summaryItemName">{itemName}</td>
              <td className="summaryItemCount">{count}</td>
              <td className="summaryItemPrice">${filteredItem.price}</td>
              <td className="summaryItemSubTotal">${subtotal}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="summaryTotalLabel">
            Total:
          </td>
          <td className="summaryTotalValue">${totalSubtotal}</td>
        </tr>
      </tfoot>
    </table>
  );
};
