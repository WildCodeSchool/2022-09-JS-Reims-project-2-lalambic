import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import FilterPage from "./components/FilterPage";
import "./App.css";
import useFetch from "./data/allCocktails";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [isShow, setIsShow] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const { cocktails, isLoading } = useFetch();

  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(e.target.children[0].value);
  }

  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {!isLoading && cocktails && isShow === "" ? (
        <Section searchValue={searchValue} cocktailsList={cocktails} />
      ) : (
        <p className="search-not-found">
          {isLoading ? "Loading cocktails..." : "No matching result"}
        </p>
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
        <Section userSearch={userSearch} cocktailsList={allCocktails} />
      )}
    </div>
  );
}

export default App;
