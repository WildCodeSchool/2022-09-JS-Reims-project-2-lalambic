import PropTypes from "prop-types";

function SearchBar({ userSearch, onSubmit, onChange }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <input
        value={userSearch}
        type="text"
        placeholder="Search for anything..."
        onChange={onChange}
      />
      <button type="submit">search</button>
    </form>
  );
}

SearchBar.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default SearchBar;
