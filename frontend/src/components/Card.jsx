import PropTypes from "prop-types";

function Card({ cocktailName, image }) {
  return (
    <figure className="card">
      <img className="cardstyle" src={image} alt={cocktailName} />
      <figcaption className="titlecocktail"> {cocktailName}</figcaption>
    </figure>
  );
}

Card.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
