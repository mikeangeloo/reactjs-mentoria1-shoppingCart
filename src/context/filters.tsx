import { createContext, useState } from "react";
import { ProductsState } from "../interfaces/products-state.interface";

export const FiltersContext = createContext<{
  filters: ProductsState;
  setFilters: React.Dispatch<React.SetStateAction<ProductsState>>;
}>({
  filters: {
    category: "all",
    minPrice: 0,
  },
  setFilters: () => void 0,
});

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState<ProductsState>({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
