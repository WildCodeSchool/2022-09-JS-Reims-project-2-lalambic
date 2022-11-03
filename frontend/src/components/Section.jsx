import PropTypes from "prop-types";
import Card from "./Card";
import CocktailType from "../prop-types/CocktailType";
import cocktails from "../data/cocktails";
import "./Section.css";

function Section({ cocktailsList }) {
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
      <div className="display-main-rand">
        {cocktailsList.map((cocktail) => (
          <Card
            key={cocktail.name}
            cocktailName={cocktail.name}
            image={cocktail.image}
          />
        ))}
      </div>
    </div>
  );
}
Section.propTypes = {
  cocktailsList: PropTypes.arrayOf(CocktailType).isRequired,
};
export default Section;
