import PropTypes from "prop-types";
import "./SearchBar.css";

function SearchBar({ userSearch, onSubmit, onChange }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        className="input-search-bar"
        value={userSearch}
        type="text"
        placeholder="Search for anything..."
        onChange={onChange}
      />
    </form>
  );
}

SearchBar.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBar;
