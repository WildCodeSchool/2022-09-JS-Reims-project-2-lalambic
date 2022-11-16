import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import "./Header.css";
import "./Filters.css";

function Header({ userSearch, onSubmit, onChange, placeholder }) {
  return (
    <header className="header">
      <img
        src="../src/assets/logo-texte.png"
        alt="logo"
        className="logo-header"
      />
      <SearchBar
        userSearch={userSearch}
        onSubmit={onSubmit}
        onChange={onChange}
        placeholder={placeholder}
      />
      <nav className="navbarfilters">
        <ul className="filters">
          <li className="filter">
            <button type="button" onClick={() => ""}>
              Name{" "}
            </button>
          </li>
          <li className="filter">
            <button type="button" onClick={() => ""}>
              {" "}
              Ingredients{" "}
            </button>
          </li>
          <li className="filter">
            <button type="button" onClick={() => ""}>
              Glasses
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default Header;
