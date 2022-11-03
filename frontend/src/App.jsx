import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import cocktails from "./data/cocktails";
import "./App.css";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [cocktailsList, setCocktailsList] = useState([...cocktails]);
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
  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
      />
      <body>
        <Section cocktailsList={cocktailsList} />
      </body>
    </div>
  );
}

export default App;
