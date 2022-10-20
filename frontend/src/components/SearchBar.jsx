import { useState } from "react";

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
        type={userSearch}
        placeholder="Search for anything..."
        onChange={handleChange}
      />
      <button type="submit">search</button>
    </form>
  );
}

export default SearchBar;
