import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import FilterPage from "./components/FilterPage";
import "./App.css";
import useFetch from "./data/allCocktails";

const filters = {};

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [isShow, setIsShow] = useState("home");
  const [searchValue, setSearchValue] = useState("");
  const [IsSearchActive, setIsSearchActive] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for anything...");
  const [currentCocktail, setCurrentCocktail] = useState();

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
      setCurrentCocktail(null);
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
      allResponses.forEach((response, index) => {
        if (index === 0) {
          filters.categories = response.data.drinks.map(
            ({ strCategory: label }) => ({ label })
          );
        }
        if (index === 1) {
          filters.ingredients = response.data.drinks.map(
            ({ strIngredient1: label }) => ({ label })
          );
        }
        if (index === 2) {
          filters.alcoholic = response.data.drinks.map(
            ({ strAlcoholic: label }) => ({ label })
          );
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
      {isLoading && <p className="search-not-found">Loading cocktails...</p>}
      {!isLoading && isShow === "home" && (
        <Section
          searchValue={searchValue}
          cocktails={cocktails}
          IsSearchActive={IsSearchActive}
          currentCocktail={currentCocktail}
          setCurrentCocktail={setCurrentCocktail}
        />
      )}
      {isShow === "name" && (
        <FilterPage
          setIsShow={setIsShow}
          isShow={isShow}
          filters={filters.categories}
        />
      )}
      {isShow === "Ingredients" && (
        <FilterPage
          setIsShow={setIsShow}
          isShow={isShow}
          filters={filters.ingredients}
        />
      )}
      {isShow === "Alcoholic" && (
        <FilterPage
          setIsShow={setIsShow}
          isShow={isShow}
          filters={filters.alcoholic}
        />
      )}
    </div>
  );
}

export default App;
