import PropTypes from "prop-types";
import { useContext } from "react";
import FiltersContext from "../FiltersContext";
import "./Filters.css";

function Filters({ filters, setIsSearchActive }) {
  const {
    categoryFilter,
    setCategoryFilter,
    alcoholicFilter,
    setAlcoholicFilter,
    ingredientsFilters,
    setIngredientsFilters,
    setValidatedFilters,
  } = useContext(FiltersContext);

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

  function FirstLetterUppercase(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
  return (
    <div>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="filter-only">
          <select id="category" onChange={(e) => handleFilters(e, "category")}>
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
            {filters.ingredients
              .sort((a, b) => {
                if (a.label < b.label) return -1;
                if (a.label > b.label) return 1;
                return 0;
              })
              .map((ingredient) => (
                <option
                  key={ingredient.label}
                  value={FirstLetterUppercase(ingredient.label)}
                >
                  {FirstLetterUppercase(ingredient.label)}
                </option>
              ))}
          </select>
        </div>
        <button className="validate-button" type="submit">
          Validate
        </button>
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
  setIsSearchActive: PropTypes.func.isRequired,
};

export default Filters;
