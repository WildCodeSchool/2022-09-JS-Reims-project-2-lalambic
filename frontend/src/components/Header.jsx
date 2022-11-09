import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import "./Header.css";
import "./Filters.css";

function Header({ userSearch, onSubmit, onChange }) {
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
      />
      <nav className="navbarfilters">
        <ul className="filters">
          <li className="filter"> Name </li>
          <li className="filter"> Ingredients </li>
          <li className="filter"> Type of Glasses </li>
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
