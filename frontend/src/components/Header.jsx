import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <button type="button">Lang</button>
      <img src="#" alt="logo" />
      <SearchBar />
      <nav>
        <ul className="filter">
          <li>Nom</li>
          <li>
            Ingrédients <SearchBar />{" "}
          </li>
          <li>Type de verre</li>
          <li>Catégories</li>
          <li>Avec ou sans alcool</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
