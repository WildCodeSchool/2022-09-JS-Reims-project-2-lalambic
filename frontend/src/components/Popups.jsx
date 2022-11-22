import { useContext } from "react";
import crossIcon from "../assets/cross_icon.png";
import FiltersContext from "../FiltersContext";

function Popups() {
  const {
    categoryFilter,
    alcoholicFilter,
    ingredientsFilters,
    setCategoryFilter,
    setAlcoholicFilter,
    setIngredientsFilters,
  } = useContext(FiltersContext);

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
  return (
    <ul className="active-filters">
      {categoryFilter.length !== 0 && (
        <li className="popup">
          <button
            type="button"
            className="active-filter"
            onClick={() => handleClick("category")}
          >
            {categoryFilter}{" "}
            <img className="cross-icon" src={crossIcon} alt="cross" />
          </button>
        </li>
      )}
      {alcoholicFilter.length !== 0 && (
        <li className="popup">
          <button
            type="button"
            className="active-filter"
            onClick={() => handleClick("alcoholic")}
          >
            {alcoholicFilter}{" "}
            <img className="cross-icon" src={crossIcon} alt="cross" />
          </button>
        </li>
      )}
      {ingredientsFilters.map((ingredient) => (
        <li key={ingredient} className="popup">
          <button
            type="button"
            key={ingredient}
            className="active-filter"
            onClick={() => handleClick("ingredients", ingredient)}
          >
            {ingredient}{" "}
            <img className="cross-icon" src={crossIcon} alt="cross" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Popups;
