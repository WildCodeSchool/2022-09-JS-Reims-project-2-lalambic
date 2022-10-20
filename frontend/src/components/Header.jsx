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
      <form>
        <input type="text" placeholder="Search for anything..." />
        <button type="submit">search</button>
      </form>
      <ul className="filter">
        <li>Filter</li>
        <li>Filter</li>
      </ul>
    </div>
  );
}

export default Header;
