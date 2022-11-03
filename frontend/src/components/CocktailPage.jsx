import CocktailType from "../prop-types/CocktailType";

function CocktailPage({ cocktailName, image, instructions, ingredients }) {
  return (
    <div className="page">
      <img src={image} alt={cocktailName} />
      <p className="cocktail-name"> {cocktailName} </p>
      <p className="instructions"> {instructions} </p>
      <ul className="ingredients"> {ingredients} </ul>
    </div>
  );
}

CocktailPage.propTypes = CocktailType.isRequired;

export default CocktailPage;
