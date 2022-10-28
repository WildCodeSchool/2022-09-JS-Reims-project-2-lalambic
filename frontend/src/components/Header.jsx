import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import "./Lang.css";

function Header({ userSearch, onSubmit, onChange }) {
  return (
    <header className="header">
      <button type="button" className="lang">
        UK
      </button>
      <img
        src="../src/assets/logo-texte.png"
        alt="logo"
        className="logo-header"
      />
      <SearchBar
        userSearch={userSearch}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <nav>
        <ul className="filter">
          <li>Nom</li>
          <li>Ingrédients</li>
          <li>Type de verre</li>
        </ul>
      </nav>
    </header>
  );
}
Header.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Header;
