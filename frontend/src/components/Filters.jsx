import PropTypes from "prop-types";
// import { useState } from "react";
import "./Filters.css";

function Filters({ filters /* setValidatedFilters */ }) {
  return (
    <div>
      <form className="filter-form">
        <select id="category">
          <option value="">select category</option>
          {filters.categories.map((category) => (
            <option key={category.label} value={category.label}>
              {category.label}
            </option>
          ))}
        </select>
        <select id="alcoholic">
          <option value="">select alcoholic</option>
          {filters.alcoholic.map((type) => (
            <option key={type.label} value={type.label}>
              {type.label}
            </option>
          ))}
        </select>
        <select id="ingredients">
          <option value="">select ingredients</option>
          {filters.ingredients.map((ingredient) => (
            <option key={ingredient.label} value={ingredient.label}>
              {ingredient.label}
            </option>
          ))}
        </select>
        <button type="submit">Validate</button>
      </form>
    </div>
  );
}

Filters.propTypes = {
  filters: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
    alcoholic: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  /*   setValidatedFilters: PropTypes.func.isRequired, */
};

export default Filters;
