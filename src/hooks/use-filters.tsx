import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { Product } from "../interfaces/products.interface";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products: Product[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" ||
          product.category.includes(filters.category))
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
