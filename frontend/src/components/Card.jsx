import PropTypes from "prop-types";

function Card({ cocktailName, image }) {
  return (
    <div className="card">
      <img className="cardstyle" src={image} alt={cocktailName} />
      <h2 className="titlecocktail"> {cocktailName}</h2>
    </div>
  );
}

Card.propTypes = {
  cocktailName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
