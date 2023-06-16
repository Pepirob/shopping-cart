/* eslint-disable react/prop-types */
import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilteredId = useId();
  const CategoryFilteredId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilteredId}>Precio a partir de:</label>
        <input
          onChange={handleChangeMinPrice}
          type="range"
          id={minPriceFilteredId}
          min="0"
          max="1000"
          value={filters.minPrice}
        />
        <span>{filters.minPrice}€ </span>
      </div>
      <div>
        <label htmlFor={CategoryFilteredId}>Categoría</label>
        <select id={CategoryFilteredId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
