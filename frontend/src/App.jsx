import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";
import useFetch from "./data/allCocktails";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [IsSearchActive, setIsSearchActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for anything...");

  const { cocktails, isLoading } = useFetch();

  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (
      cocktails.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(userSearch.toLowerCase())
      ).length !== 0
    ) {
      setSearchValue(userSearch);
      setUserSearch("");
      setPlaceholder("Search for anything...");
      if (userSearch !== "") {
        setIsSearchActive(true);
      } else {
        setIsSearchActive(false);
      }
    } else {
      setUserSearch("");
      setPlaceholder(`"${userSearch}" not found`);
    }
  }

  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      />
      {!isLoading && cocktails ? (
        <Section
          searchValue={searchValue}
          cocktails={cocktails}
          IsSearchActive={IsSearchActive}
        />
      ) : (
        <p className="search-not-found">
          {isLoading ? "Loading cocktails..." : "No matching result"}
        </p>
      )}
    </div>
  );
}

export default App;
