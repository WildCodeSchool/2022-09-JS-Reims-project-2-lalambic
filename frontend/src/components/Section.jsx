import PropTypes from "prop-types";
import Card from "./Card";
import CocktailPage from "./CocktailPage";
import CocktailType from "../prop-types/CocktailType";
import "./Section.css";

function Section({
  searchValue,
  cocktails,
  IsSearchActive,
  currentCocktail,
  setCurrentCocktail,
}) {
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
              <h1 className="title">OUR COCKTAILS SELECTION</h1>
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
              <h1 className="title">COCKTAIL VODKA</h1>
              <div className="carousel-container">
                <div className="display-main">
                  {cocktails
                    .filter(
                      (cocktail) =>
                        cocktail.id === "11002" ||
                        cocktail.id === "13377" ||
                        cocktail.id === "15184" ||
                        cocktail.id === "12452" ||
                        cocktail.id === "11872" ||
                        cocktail.id === "17120" ||
                        cocktail.id === "12452" ||
                        cocktail.id === "14730"
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
              <h1 className="title">HOT COCKTAIL</h1>
              <div className="carousel-container">
                <div className="display-main">
                  {cocktails
                    .filter(
                      (cocktail) =>
                        cocktail.id === "15182" ||
                        cocktail.id === "11872" ||
                        cocktail.id === "178357" ||
                        cocktail.id === "15266" ||
                        cocktail.id === "17209" ||
                        cocktail.id === "17122" ||
                        cocktail.id === "13198" ||
                        cocktail.id === "15026" ||
                        cocktail.id === "12738" ||
                        cocktail.id === "178345" ||
                        cocktail.id === "11418" ||
                        cocktail.id === "11375"
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
            <h1 className="title">ALL COCKTAILS</h1>
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
  currentCocktail: CocktailType,
  setCurrentCocktail: PropTypes.func.isRequired,
};
Section.defaultProps = {
  currentCocktail: null,
};
export default Section;
