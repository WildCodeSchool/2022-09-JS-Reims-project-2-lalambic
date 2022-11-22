import PropTypes from "prop-types";
import { useState } from "react";
import "./Filters.css";

function Filters({
  filters,
  setValidatedFilters,
  validatedFilters,
  setIsSearchActive,
}) {
  const [categoryFilter, setCategoryFilter] = useState(
    validatedFilters.category
  );
  const [alcoholicFilter, setAlcoholicFilter] = useState(
    validatedFilters.alcoholic
  );
  const [ingredientsFilters, setIngredientsFilters] = useState(
    validatedFilters.ingredients
  );

  function handleFilters(e, filter) {
    if (filter === "category" && categoryFilter !== e.target.value) {
      setCategoryFilter(e.target.value);
    }
    if (filter === "alcoholic" && alcoholicFilter !== e.target.value) {
      setAlcoholicFilter(e.target.value);
    }
    if (
      filter === "ingredients" &&
      !ingredientsFilters.includes(e.target.value)
    ) {
      const ingredientsFiltersCopy = [...ingredientsFilters];
      ingredientsFiltersCopy.push(e.target.value);
      setIngredientsFilters(ingredientsFiltersCopy);
    }
  }

  function handleClick(filter, oldIngredient) {
    if (filter === "category") {
      setCategoryFilter("");
    }
    if (filter === "alcoholic") {
      setAlcoholicFilter("");
    }
    if (filter === "ingredients") {
      const ingredientsFiltersCopy = [...ingredientsFilters];
      setIngredientsFilters(
        ingredientsFiltersCopy.filter(
          (ingredient) => ingredient !== oldIngredient
        )
      );
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setValidatedFilters({
      category: categoryFilter,
      alcoholic: alcoholicFilter,
      ingredients: ingredientsFilters,
    });
    if (
      categoryFilter.length !== 0 ||
      alcoholicFilter.length !== 0 ||
      ingredientsFilters.length !== 0
    ) {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
  }

  return (
    <>
      <ul className="active-filters">
        {categoryFilter.length !== 0 && (
          <li>
            <button
              type="button"
              className="active-filter"
              onClick={() => handleClick("category")}
            >
              {categoryFilter}
            </button>
          </li>
        )}
        {alcoholicFilter.length !== 0 && (
          <li>
            <button
              type="button"
              className="active-filter"
              onClick={() => handleClick("alcoholic")}
            >
              {alcoholicFilter}
            </button>
          </li>
        )}
        {ingredientsFilters.map((ingredient) => (
          <li key={ingredient}>
            <button
              type="button"
              key={ingredient}
              className="active-filter"
              onClick={() => handleClick("ingredients", ingredient)}
            >
              {ingredient}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <form className="filter-form" onSubmit={handleSubmit}>
          <div className="filter-only">
            <select
              id="category"
              onChange={(e) => handleFilters(e, "category")}
            >
              <option value="">Category</option>
              {filters.categories.map((category) => (
                <option key={category.label} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
            <select
              id="alcoholic"
              onChange={(e) => handleFilters(e, "alcoholic")}
            >
              <option value="">Alcoholic</option>
              {filters.alcoholic.map((type) => (
                <option key={type.label} value={type.label}>
                  {type.label}
                </option>
              ))}
            </select>
            <select
              id="ingredients"
              onChange={(e) => handleFilters(e, "ingredients")}
            >
              <option value="">Ingredients</option>
              {filters.ingredients.map((ingredient) => (
                <option key={ingredient.label} value={ingredient.label}>
                  {ingredient.label}
                </option>
              ))}
            </select>
          </div>
          <button className="validate-button" type="submit">
            Validate
          </button>
        </form>
      </div>
    </>
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
  validatedFilters: PropTypes.shape({
    category: PropTypes.string.isRequired,
    alcoholic: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  setValidatedFilters: PropTypes.func.isRequired,
  setIsSearchActive: PropTypes.func.isRequired,
};

export default Filters;
