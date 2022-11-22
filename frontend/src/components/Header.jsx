import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import "./Header.css";
import "./Filters.css";

function Header({ userSearch, onSubmit, onChange, placeholder }) {
  return (
    <header className="header">
      <div className="logosearchbar">
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
      </div>
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
