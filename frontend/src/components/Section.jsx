import PropTypes from "prop-types";
import { useRef } from "react";
import Card from "./Card";
import CocktailPage from "./CocktailPage";
import CocktailType from "../prop-types/CocktailType";
import cocktails from "../data/cocktails";
import "./Section.css";

function Section({ userSearch, cocktailsList }) {
  const page = useRef();
  const section = useRef();
  const section2 = useRef();
  function handlePage() {
    page.current.classList.toggle("open");
    section.current.classList.toggle("hidden");
    section2.current.classList.toggle("hidden");
  }
  return (
    <div className="section">
      <div className="caroussel">
        <div ref={section} className="display-main">
          {cocktails.slice(0, 10).map((cocktail) => (
            <Card
              key={cocktail.name}
              cocktailName={cocktail.name}
              image={cocktail.image}
              handlePage={() => handlePage()}
            />
          ))}
        </div>
      </div>
      <div ref={section2} className="display-main rand">
        {cocktailsList
          .filter((cocktail) =>
            cocktail.strDrink.toLowerCase().includes(userSearch.toLowerCase())
          )
          .map((cocktail) => (
            <Card
              key={cocktail.strDrink}
              cocktailName={cocktail.strDrink}
              image={cocktail.strDrinkThumb}
              handlePage={() => handlePage()}
            />
          ))}
      </div>
      <div ref={page} className="display-cocktail">
        {cocktails.slice(0, 1).map((cocktail) => (
          <CocktailPage
            key={cocktail.name}
            cocktailName={cocktail.name}
            image={cocktail.image}
            ingredients={cocktail.ingredients}
            instructions={cocktail.instructions}
            handlePage={() => handlePage()}
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
