import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [userSearch, setUserSearch] = useState("");
  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="input-search-bar"
        value={userSearch}
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchBar;
