import PropTypes from "prop-types";
import "./Filters.css";
import "./Header.css";

function ButtonFilters({ setIsShow }) {
  return (
    <ul className="filters">
      <li className="filter">
        <button type="button" onClick={() => setIsShow("name")}>
          Name
        </button>
      </li>
      <li className="filter">
        <button type="button" onClick={() => setIsShow("Ingredients")}>
          Ingredients
        </button>
      </li>
      <li className="filter">
        <button type="button" onClick={() => setIsShow("Glasses")}>
          Glasses
        </button>
      </li>
    </ul>
  );
}
ButtonFilters.propTypes = {
  setIsShow: PropTypes.func.isRequired,
};

export default ButtonFilters;