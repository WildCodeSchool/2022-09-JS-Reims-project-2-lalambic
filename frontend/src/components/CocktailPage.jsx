import CocktailType from "../prop-types/CocktailType";

function CocktailPage({
  cocktailName,
  image,
  ingredients,
  measurements,
  instructions,
  handlePage,
}) {
  return (
    <div>
      <button className="cross" type="button" onClick={handlePage}>
        <img src="../src/assets/close.png" alt="cross" />
      </button>
      <div className="content">
        <img src={image} alt={cocktailName} />
        <h1 className="cocktail-name"> {cocktailName} </h1>
        <ul className="ingredients"> {ingredients} </ul>
        <ul className="measurements"> {measurements} </ul>
        <p className="instructions"> {instructions} </p>
      </div>
    </div>
  );
}

CocktailPage.propTypes = CocktailType.isRequired;

export default CocktailPage;
