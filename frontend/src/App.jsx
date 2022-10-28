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

    const cocktailsListCopy = [...cocktailsList];
    const cocktailsListCopyUpdated = cocktailsListCopy.filter((cocktail) =>
      cocktail.name.slice(0, userSearch.length).includes(userSearch)
    );
    setCocktailsList(cocktailsListCopyUpdated);
  }
  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
      />
      <Section cocktailsList={cocktailsList} />
    </div>
  );
}

export default App;
