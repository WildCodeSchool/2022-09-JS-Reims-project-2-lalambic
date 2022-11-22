import PropTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const FiltersContext = createContext();

export default FiltersContext;

export function FiltersContextProvider({ children }) {
  const [validatedFilters, setValidatedFilters] = useState({
    category: "",
    alcoholic: "",
    ingredients: [],
  });
  const [categoryFilter, setCategoryFilter] = useState(
    validatedFilters.category
  );
  const [alcoholicFilter, setAlcoholicFilter] = useState(
    validatedFilters.alcoholic
  );
  const [ingredientsFilters, setIngredientsFilters] = useState(
    validatedFilters.ingredients
  );

  const filtersContext = useMemo(
    () => ({
      categoryFilter,
      setCategoryFilter,
      alcoholicFilter,
      setAlcoholicFilter,
      ingredientsFilters,
      setIngredientsFilters,
      validatedFilters,
      setValidatedFilters,
    }),
    []
  );
  return (
    <FiltersContext.Provider value={filtersContext}>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
