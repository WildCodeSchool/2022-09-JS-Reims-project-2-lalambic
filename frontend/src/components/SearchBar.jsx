import PropTypes from "prop-types";
import { useContext } from "react";
import FiltersContext from "../FiltersContext";
import useFetch from "../data/allCocktails";
import "./SearchBar.css";
import loupe from "../assets/loupe.png";

function SearchBar({ userSearch, onSubmit, onChange, placeholder }) {
  const { cocktails } = useFetch();
  const { validatedFilters } = useContext(FiltersContext);

  function checkFilters(cocktail, filters) {
    let check = true;
    if (
      filters.category.length !== 0 &&
      cocktail.category !== filters.category
    ) {
      check = false;
    }
    if (
      filters.alcoholic.length !== 0 &&
      cocktail.alcoholic !== filters.alcoholic
    ) {
      check = false;
    }
    if (
      filters.ingredients.length !== 0 &&
      !filters.ingredients.every((ingredient) =>
        cocktail.ingredients.includes(ingredient)
      )
    ) {
      check = false;
    }
    return check;
  }

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <button type="submit">
        <img src={loupe} alt="search" />
      </button>
      <input
        list="suggestions"
        className="input-search-bar"
        value={userSearch}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <datalist id="suggestions">
        {cocktails
          .filter((cocktail) => checkFilters(cocktail, validatedFilters))
          .map((cocktail) => (
            <option
              key={cocktail.id}
              value={cocktail.name}
              label={cocktail.name}
            />
          ))}
      </datalist>
    </form>
  );
}

SearchBar.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default SearchBar;
