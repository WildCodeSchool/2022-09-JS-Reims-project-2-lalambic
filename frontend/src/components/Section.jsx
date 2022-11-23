import PropTypes from "prop-types";
import { useContext /* useState */ } from "react";
import Card from "./Card";
import CocktailPage from "./CocktailPage";
import CocktailType from "../prop-types/CocktailType";
import FiltersContext from "../FiltersContext";
import "./Section.css";

function Section({
  searchValue,
  cocktails,
  IsSearchActive,
  currentCocktail,
  setCurrentCocktail,
}) {
  const { validatedFilters } = useContext(FiltersContext);
  /* const [cocktailsFound, setCoktailsFound] = useState(true); */

  function checkFilters(cocktail, filters) {
    let check = true;
    if (
      filters.category.length !== 0 &&
      cocktail.category !== filters.category
    ) {
      check = false;
    }
    if (
      filters.alcoholic.length !== 0 &&
      cocktail.alcoholic !== filters.alcoholic
    ) {
      check = false;
    }
    if (
      filters.ingredients.length !== 0 &&
      !filters.ingredients.every((ingredient) =>
        cocktail.ingredients.includes(ingredient)
      )
    ) {
      check = false;
    }
    return check;
  }

  const result = cocktails.filter(
    (cocktail) =>
      cocktail.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      checkFilters(cocktail, validatedFilters)
  );

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
              <h1 className="title">OUR SELECTION</h1>
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
              <h1 className="title">VODKA COCKTAILS</h1>
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
              <h1 className="title">HOT COCKTAILS</h1>
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
          {!IsSearchActive && <h1 className="title">ALL COCKTAILS</h1>}
          {result.length === 0 && (
            <h2 className="no-result">No matching result</h2>
          )}
          <div className="display-main rand">
            {result.map((cocktail) => (
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
