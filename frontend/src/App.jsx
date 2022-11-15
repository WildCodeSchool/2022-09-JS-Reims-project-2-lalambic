import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";
import allCocktails from "./data/allCocktails";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [cocktailsList, setCocktailsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShow, setIsShow] = useState("");

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch}`;

  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const cocktailsListUpdated = cocktailsList.filter((cocktail) =>
      cocktail.strDrink.includes(userSearch)
    );
    setCocktailsList(cocktailsListUpdated);
  }

  const fetchApi = () => {
    axios.get(url).then((res) => {
      setCocktailsList(res.data.drinks);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {/*  <NavBar setIsShow={setIsShow} isShow={isShow} />   */}
      {!loading && cocktailsList && isShow === "" && (
        <Section userSearch={userSearch} cocktailsList={allCocktails} />
      )}
      {loading && !cocktailsList && (
        <p className="search-not-found">
          {loading ? "Loading cocktails..." : "No matching result"}
        </p>
      )}
      {isShow === "name" && "MY PAGES OF FILTERS NAME"}
      {isShow === "Ingredients" && "MY PAGES OF FILTERS INGREDIENTS"}
      {isShow === "Glasses" && "MY PAGES OF FILTERS GLASSES"}
    </div>
  );
}

export default App;
