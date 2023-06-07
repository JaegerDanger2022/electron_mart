import axios from "axios";
import { useQuery } from "react-query";

const fetchClothingProducts = () => {
  return axios.get("https://fakestoreapi.com/products");
};
export const useGetProducts = () => {
  return useQuery("men clothing products", fetchClothingProducts, {
    refetchOnWindowFocus: false,
  });
};
