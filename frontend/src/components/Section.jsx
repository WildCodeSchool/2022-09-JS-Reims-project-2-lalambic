import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import CocktailPage from "./CocktailPage";
import CocktailType from "../prop-types/CocktailType";
import "./Section.css";

function Section({ userSearch, cocktailsList }) {
  const [currentCocktail, setCurrentCocktail] = useState();

  return (
    <div className="section">
      {currentCocktail != null ? (
        <div className="display-cocktail">
          <CocktailPage
            cocktailName={currentCocktail.strDrink}
            image={currentCocktail.strDrinkThumb}
            ingredients={currentCocktail.strIngredient1}
            measurements={currentCocktail.strMeasure1}
            instructions={currentCocktail.strInstructions}
            handlePage={() => {
              setCurrentCocktail(null);
            }}
          />
        </div>
      ) : (
        <>
          <section className="caroussel">
            <h1 className="title">OUR COCKTAIL SELECTION</h1>
            <div className="display-main">
              {cocktailsList
                .filter(
                  (cocktail) =>
                    cocktail.idDrink === "11000" ||
                    cocktail.idDrink === "13971" ||
                    cocktail.idDrink === "13621" ||
                    cocktail.idDrink === "17196" ||
                    cocktail.idDrink === "11007"
                )
                .map((cocktail) => (
                  <Card
                    key={cocktail.namestrDrink}
                    cocktailName={cocktail.strDrink}
                    image={cocktail.strDrinkThumb}
                    handlePage={() => {
                      setCurrentCocktail(cocktail);
                    }}
                  />
                ))}
            </div>
          </section>
          <div className="display-main rand">
            {cocktailsList
              .filter((cocktail) =>
                cocktail.strDrink
                  .toLowerCase()
                  .includes(userSearch.toLowerCase())
              )
              .map((cocktail) => (
                <Card
                  key={cocktail.strDrink}
                  cocktailName={cocktail.strDrink}
                  image={cocktail.strDrinkThumb}
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
  cocktailsList: PropTypes.arrayOf(CocktailType).isRequired,
  userSearch: PropTypes.string.isRequired,
};
export default Section;
