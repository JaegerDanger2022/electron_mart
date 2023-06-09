import React from "react";
import { useGetProducts } from "../hooks/useGetProducts";
import { ProductItem } from "./ProductItem";
import { useParams } from "react-router-dom";
import { CircularProgress, Skeleton } from "@mui/material";

export const ProductsDisplay = () => {
  const { data, isLoading, isFetching, isError, error } = useGetProducts();

  const { category } = useParams();

  if (isLoading || isFetching) {
    return <CircularProgress className="productDisplayLoading" value={0} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="productDisplay">
      {data?.data
        .filter((item) => item.category === `${category}`)
        .map((item) =>
          item ? (
            <ProductItem
              key={item.id}
              productImage={item.image}
              productTitle={item.title}
              productPrice={item.price}
            ></ProductItem>
          ) : (
            <>
              <Skeleton variant="rectangular" width={200} height={200} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </>
          )
        )}
    </div>
  );
};
