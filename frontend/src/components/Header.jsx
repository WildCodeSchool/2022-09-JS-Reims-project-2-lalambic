import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import "./Header.css";

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
    </header>
  );
}
Header.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Header;
