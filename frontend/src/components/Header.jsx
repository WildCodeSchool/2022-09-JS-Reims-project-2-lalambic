import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="header">
      <button type="button">Lang</button>
      <img src="#" alt="logo" />
      <SearchBar />
      <ul className="filter">
        <li>Filter</li>
        <li>Filter</li>
      </ul>
    </div>
  );
}

export default Header;
