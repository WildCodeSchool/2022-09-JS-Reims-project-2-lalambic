import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [cocktailsList, setCocktailsList] = useState(null);
  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const cocktailsListUpdated = cocktailsList.filter((cocktail) =>
      cocktail.name.slice(0, userSearch.length).includes(userSearch)
    );
    setCocktailsList(cocktailsListUpdated);
  }

  const fetchApi = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((res) => setCocktailsList(res.data.drinks));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
      />
      {cocktailsList ? (
        <Section userSearch={userSearch} cocktailsList={cocktailsList} />
      ) : (
        <p>Chargement des cocktails...</p>
      )}
    </div>
  );
}

export default App;
