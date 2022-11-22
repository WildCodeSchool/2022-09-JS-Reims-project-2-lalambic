import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import NavBarFilters from "./NavBarFilters";
import "./Header.css";
import "./Filters.css";

function Header({
  userSearch,
  onSubmit,
  onChange,
  setIsShow,
  isShow,
  placeholder,
  setIsSearchActive,
  setCurrentCocktail,
}) {
  return (
    <header className="header">
      <div className="logosearchbar">
        <button
          className="logo"
          type="button"
          onClick={() => {
            setCurrentCocktail();
            setIsSearchActive(false);
            setIsShow("home");
          }}
        >
          <img
            src="../src/assets/logo-texte.png"
            alt="logo"
            className="logo-header"
          />
        </button>
        <SearchBar
          userSearch={userSearch}
          onSubmit={onSubmit}
          onChange={onChange}
          placeholder={placeholder}
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
  placeholder: PropTypes.string.isRequired,
  setIsShow: PropTypes.func.isRequired,
  isShow: PropTypes.string.isRequired,
  setIsSearchActive: PropTypes.func.isRequired,
  setCurrentCocktail: PropTypes.func.isRequired,
};
export default Header;
