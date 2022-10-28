import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  const [userSearch, setUserSearch] = useState("");
  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
      />
      <Section />
    </div>
  );
}

export default App;
