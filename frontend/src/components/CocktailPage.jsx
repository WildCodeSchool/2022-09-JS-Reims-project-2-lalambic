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
        <img
          className="imagecocktail"
          src="../src/assets/close.png"
          alt="cross"
        />
      </button>
      <div className="content">
        <div>
          <img className="cocktailpage" src={image} alt={cocktailName} />
        </div>
        <div className="list">
          <h1 className="cocktail-name"> {cocktailName} </h1>
          <div className="container">
            <ul className="ingredients">
              {ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <ul className="measurements">
              {measurements.map((measure) => (
                <li key={measure}>{measure}</li>
              ))}
            </ul>
          </div>
          <div className="instructionspage">
            <p className="instructions"> {instructions} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

CocktailPage.propTypes = CocktailType.isRequired;

export default CocktailPage;
