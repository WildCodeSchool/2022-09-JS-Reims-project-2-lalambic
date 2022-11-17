import PropTypes from "prop-types";
import "./FilterPage.css";

function FilterPage({ setIsShow, filters }) {
  return (
    <div className="display-filter">
      <form className="formfilter">
        {filters
          .sort((a, b) => {
            if (a.label > b.label) {
              return 1;
            }
            if (a.label < b.label) {
              return -1;
            }
            return 0;
          })
          .map((filter) => (
            <div key={filter.label} className="inputfilter">
              <label htmlFor="scales">{filter.label}</label>
              <input
                className="input"
                type="checkbox"
                id={filter.label}
                name={filter.label}
              />
            </div>
          ))}
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
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default FilterPage;
