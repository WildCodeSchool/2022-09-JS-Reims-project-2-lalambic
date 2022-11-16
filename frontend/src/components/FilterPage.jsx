import PropTypes from "prop-types";
import "./FilterPage.css";

function FilterPage({ setIsShow }) {
  return (
    <div>
      <form>
        <div>
          <input type="checkbox" id="scales" name="scales" />
          <label htmlFor="scales">CITRON</label>
        </div>
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label htmlFor="horns">Horns</label>
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
