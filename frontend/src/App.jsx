import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [cocktailsList, setCocktailsList] = useState([]);
  const [loading, setLoading] = useState(true);
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
      />
      {!loading && cocktailsList ? (
        <Section userSearch={userSearch} cocktailsList={cocktailsList} />
      ) : (
        <p className="search-not-found">
          {loading ? "Loading cocktails..." : "No matching result"}
        </p>
      )}
    </div>
  );
}

export default App;
