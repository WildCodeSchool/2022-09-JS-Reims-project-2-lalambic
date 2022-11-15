import PropTypes from "prop-types";
import "./Filters.css";
import "./Header.css";
import ButtonFilters from "./ButtonFilters";

function NavBarFilters({ setIsShow, isShow }) {
  return (
    <nav className="navbarfilters">
      <ButtonFilters setIsShow={setIsShow} isShow={isShow} />
    </nav>
  );
}
NavBarFilters.propTypes = {
  setIsShow: PropTypes.func.isRequired,
  isShow: PropTypes.string.isRequired,
};

export default NavBarFilters;
