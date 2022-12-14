import { useEffect, useState } from "react";
import axios from "axios";
import { FiltersContextProvider } from "./FiltersContext";
import Section from "./components/Section";
import Header from "./components/Header";
import Popups from "./components/Popups";
import useFetch from "./data/allCocktails";
import "./App.css";

const filters = {};
let allIngredients = [];

function App() {
  const [userSearch, setUserSearch] = useState("");
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
          filters.alcoholic = response.data.drinks.map(
            ({ strAlcoholic: label }) => ({ label })
          );
        }
      });
    });
  }, []);

  cocktails.forEach((cocktail) => {
    allIngredients = allIngredients.concat(cocktail.ingredients);
    allIngredients = allIngredients.filter(
      (ingredient, index) => allIngredients.indexOf(ingredient) === index
    );
  });

  filters.ingredients = allIngredients.map((ingredient) => ({
    label: ingredient,
  }));

  return (
    <div className="App">
      <FiltersContextProvider>
        <Header
          userSearch={userSearch}
          onSubmit={(e) => handleSubmit(e)}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          isLoading={isLoading}
          filters={filters}
          setCurrentCocktail={setCurrentCocktail}
          setIsSearchActive={setIsSearchActive}
        />
        {isLoading && <p className="search-not-found">Loading cocktails...</p>}
        {!currentCocktail && <Popups />}
        {!isLoading && (
          <Section
            searchValue={searchValue}
            cocktails={cocktails}
            IsSearchActive={IsSearchActive}
            currentCocktail={currentCocktail}
            setCurrentCocktail={setCurrentCocktail}
          />
        )}
      </FiltersContextProvider>
    </div>
  );
}

export default App;
