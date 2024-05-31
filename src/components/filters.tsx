import { useId, useState } from "react";
import "./filters.css";
import { useFilters } from "../hooks/use-filters";

export function Filters() {
  const { filters, setFilters } = useFilters();
  // const [minPrice, setMinPrice] = useState(0); // estado local
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event: any) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target?.value,
    }));
  };

  const handleChangeCategory = (event: any) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target?.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
    </section>
  );
}
