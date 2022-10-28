import CocktailType from "../prop-types/CocktailType";

function Card({ cocktailName, image }) {
  return (
    <figure className="card">
      <img className="cardstyle" src={image} alt={cocktailName} />
      <figcaption className="titlecocktail"> {cocktailName}</figcaption>
    </figure>
  );
}

Card.propTypes = CocktailType.isRequired;

export default Card;
