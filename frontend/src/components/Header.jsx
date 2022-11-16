import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import NavBarFilters from "./NavBarFilters";
import "./Header.css";
import "./Filters.css";

function Header({ userSearch, onSubmit, onChange, setIsShow, isShow }) {
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
        />
      </div>
      <NavBarFilters setIsShow={setIsShow} isShow={isShow} />
    </header>
  );
}
Header.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setIsShow: PropTypes.func.isRequired,
  isShow: PropTypes.string.isRequired,
};
export default Header;
