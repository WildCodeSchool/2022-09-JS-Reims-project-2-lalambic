import SearchBar from "./SearchBar";
import "./Lang.css";

function Header() {
  return (
    <div className="header">
      <button type="button" className="lang">
        UK
      </button>
      <img
        src="../src/assets/logo-texte.png"
        alt="logo"
        className="logo-header"
      />
      <SearchBar />
      <nav>
        <ul className="filter">
          <li>Nom</li>
          <li>Ingrédients</li>
          <li>Type de verre</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
