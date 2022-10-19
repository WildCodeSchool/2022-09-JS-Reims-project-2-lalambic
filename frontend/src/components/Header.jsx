function Header() {
  return (
    <div className="header">
      <button type="button">Lang</button>
      <img src="#" alt="logo" />
      <form className="search-bar">
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
