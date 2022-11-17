import PropTypes from "prop-types";
import "./SearchBar.css";
import loupe from "../assets/loupe.png";

function SearchBar({ userSearch, onSubmit, onChange, placeholder }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <button type="submit">
        <img src={loupe} alt="search" />
      </button>
      <input
        className="input-search-bar"
        value={userSearch}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
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
