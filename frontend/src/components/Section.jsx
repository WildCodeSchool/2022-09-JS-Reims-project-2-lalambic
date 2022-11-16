import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import CocktailPage from "./CocktailPage";
import CocktailType from "../prop-types/CocktailType";
import "./Section.css";

function Section({ searchValue, cocktails, IsSearchActive }) {
  const [currentCocktail, setCurrentCocktail] = useState();

  return (
    <div className="section">
      {currentCocktail != null ? (
        <div className="display-cocktail">
          <CocktailPage
            cocktailName={currentCocktail.name}
            image={currentCocktail.image}
            ingredients={currentCocktail.ingredients}
            measurements={currentCocktail.measures}
            instructions={currentCocktail.instructions}
            handlePage={() => {
              setCurrentCocktail(null);
            }}
          />
        </div>
      ) : (
        <>
          {!IsSearchActive && (
            <section className="carousel">
              <h1 className="title">OUR COCKTAIL SELECTION</h1>
              <div className="carousel-container">
                <div className="display-main">
                  {cocktails
                    .filter(
                      (cocktail) =>
                        cocktail.id === "11000" ||
                        cocktail.id === "13971" ||
                        cocktail.id === "13621" ||
                        cocktail.id === "17196" ||
                        cocktail.id === "11007"
                    )
                    .map((cocktail) => (
                      <Card
                        key={cocktail.id}
                        cocktailName={cocktail.name}
                        image={cocktail.image}
                        handlePage={() => {
                          setCurrentCocktail(cocktail);
                        }}
                      />
                    ))}
                </div>
              </div>
            </section>
          )}
          <div className="display-main rand">
            {cocktails
              .filter((cocktail) =>
                cocktail.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((cocktail) => (
                <Card
                  key={cocktail.id}
                  cocktailName={cocktail.name}
                  image={cocktail.image}
                  handlePage={() => {
                    setCurrentCocktail(cocktail);
                  }}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
Section.propTypes = {
  cocktails: PropTypes.arrayOf(CocktailType).isRequired,
  searchValue: PropTypes.string.isRequired,
  IsSearchActive: PropTypes.bool.isRequired,
};
export default Section;
