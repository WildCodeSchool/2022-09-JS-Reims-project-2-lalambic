import PropTypes from "prop-types";

const CocktailType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default CocktailType;
