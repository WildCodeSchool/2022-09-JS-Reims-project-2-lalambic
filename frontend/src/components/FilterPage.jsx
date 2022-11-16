import PropTypes from "prop-types";
import "./FilterPage.css";

function FilterPage({ setIsShow }) {
  return (
    <div>
      <form>
        <div>
          <input type="checkbox" checked />
          <label htmlFor="scales"> CITRON </label>
        </div>
      </form>
      <button type="button" onClick={() => setIsShow("home")}>
        VALIDER
      </button>
    </div>
  );
}
FilterPage.propTypes = {
  setIsShow: PropTypes.func.isRequired,
};
export default FilterPage;
