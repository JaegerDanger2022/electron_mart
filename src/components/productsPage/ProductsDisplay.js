import React from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { ProductItem } from "./ProductItem";
import { useParams } from "react-router-dom";

export const ProductsDisplay = () => {
  const { data, isLoading, isFetching, isError, error } = useGetProducts();

  const { category } = useParams();

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="productDisplay">
      {data?.data
        .filter((item) => item.category === `${category}`)
        .map((item) => (
          <ProductItem
            key={item.id}
            productImage={item.image}
            productTitle={item.title}
            productPrice={item.price}
          ></ProductItem>
        ))}
    </div>
  );
};
