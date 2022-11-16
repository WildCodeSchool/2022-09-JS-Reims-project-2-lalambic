import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import FilterPage from "./components/FilterPage";
import "./App.css";
import useFetch from "./data/allCocktails";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [isShow, setIsShow] = useState("");
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

  useEffect(() => {
    const urls = [
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",
    ];

    Promise.all(urls.map((url) => axios.get(url))).then((allResponses) => {
      const filters = {};

      allResponses.forEach((response, index) => {
        if (index === 0) {
          filters.categories = response.data.drinks;
        }
        if (index === 1) {
          filters.ingredients = response.data.drinks;
        }
        if (index === 2) {
          filters.alcoholic = response.data.drinks;
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {!isLoading && cocktails && isShow === "" ? (
        <Section
          searchValue={searchValue}
          cocktails={cocktails}
          IsSearchActive={IsSearchActive}
        />
      ) : (
        <p className="search-not-found">Loading cocktails...</p>
      )}
      {isShow === "name" && (
        <FilterPage setIsShow={setIsShow} isShow={isShow} />
      )}
      {isShow === "Ingredients" && (
        <FilterPage setIsShow={setIsShow} isShow={isShow} />
      )}
      {isShow === "Glasses" && (
        <FilterPage setIsShow={setIsShow} isShow={isShow} />
      )}
      {isShow === "home" && (
        <Section searchValue={searchValue} cocktails={cocktails} />
      )}
    </div>
  );
}

export default App;
