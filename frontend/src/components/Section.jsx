import PropTypes from "prop-types";
import Card from "./Card";
import CocktailPage from "./CocktailPage";
import CocktailType from "../prop-types/CocktailType";
import cocktails from "../data/cocktails";
import "./Section.css";

function Section({ userSearch, cocktailsList }) {
  return (
    <div className="section">
      <div className="caroussel">
        <div className="display-main">
          {cocktails.slice(0, 10).map((cocktail) => (
            <Card
              key={cocktail.name}
              cocktailName={cocktail.name}
              image={cocktail.image}
            />
          ))}
        </div>
      </div>
      <div className="display-main rand">
        {cocktailsList
          .filter((cocktail) =>
            cocktail.strDrink.toLowerCase().includes(userSearch.toLowerCase())
          )
          .map((cocktail) => (
            <Card
              key={cocktail.strDrink}
              cocktailName={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
            />
          ))}
      </div>
      <div className="display-cocktail page">
        {cocktails.slice(0, 1).map((cocktail) => (
          <CocktailPage
            key={cocktail.name}
            cocktailName={cocktail.name}
            image={cocktail.image}
            ingredients={cocktail.ingredients}
            instructions={cocktail.instructions}
          />
        ))}
      </div>
    </div>
  );
}
Section.propTypes = {
  cocktailsList: PropTypes.arrayOf(CocktailType).isRequired,
  userSearch: PropTypes.string.isRequired,
};
export default Section;
