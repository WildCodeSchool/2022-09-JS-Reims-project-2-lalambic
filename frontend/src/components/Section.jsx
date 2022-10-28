import PropTypes from "prop-types";
import Card from "./Card";
import cocktails from "../data/cocktails";
import "./section.css";

function Section({ cocktailsList }) {
  return (
    <div className="section">
      <div className="display-main">
        {cocktails.slice(0, 2).map((cocktail) => (
          <Card
            key={cocktail.name}
            cocktailName={cocktail.name}
            image={cocktail.image}
          />
        ))}
      </div>
      <div className="display-main">
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
  cocktailsList: PropTypes.string.isRequired,
};
export default Section;
