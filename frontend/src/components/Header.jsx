import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <button type="button" className="lang">
        Lang
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
          <li>Catégories</li>
          <li>Avec ou sans alcool</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
