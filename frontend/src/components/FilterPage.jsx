import PropTypes from "prop-types";
import "./FilterPage.css";

function FilterPage({ setIsShow }) {
  return (
    <div className="display-filter">
      <form className="formfilter">
        <div className="inputfilter">
          <label htmlFor="scales">LEMON</label>
          <input className="input" type="checkbox" id="scales" name="scales" />
        </div>
        <div className="inputfilter">
          <label htmlFor="scales">STRAWBERRY</label>
          <input className="input" type="checkbox" id="scales" name="scales" />
        </div>
        <div className="inputfilter">
          <label htmlFor="scales">VODKA</label>
          <input className="input" type="checkbox" id="scales" name="scales" />
        </div>
        <div className="inputfilter">
          <label htmlFor="scales">WHISKY</label>
          <input className="input" type="checkbox" id="scales" name="scales" />
        </div>
        <div className="inputfilter">
          <label htmlFor="scales">APPLEJACK</label>
          <input className="input" type="checkbox" id="scales" name="scales" />
        </div>
        <div className="inputfilter">
          <label htmlFor="scales">KIWI</label>
          <input className="input" type="checkbox" id="scales" name="scales" />
        </div>
      </form>
      <button
        className="validatefilter"
        type="button"
        onClick={() => setIsShow("home")}
      >
        VALIDER
      </button>
    </div>
  );
}
FilterPage.propTypes = {
  setIsShow: PropTypes.func.isRequired,
};
export default FilterPage;
