import PropTypes from "prop-types";

function Card({ cocktailName, image, handlePage }) {
  return (
    <figure className="card" onClick={handlePage} aria-hidden="true">
      <img className="cardstyle" src={image} alt={cocktailName} />
      <figcaption className="titlecocktail"> {cocktailName}</figcaption>
    </figure>
  );
}

Card.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handlePage: PropTypes.func.isRequired,
};

export default Card;
