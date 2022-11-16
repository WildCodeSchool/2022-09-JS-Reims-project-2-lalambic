import PropTypes from "prop-types";

const CocktailType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  glass: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measures: PropTypes.arrayOf(PropTypes.string).isRequired,
});

export default CocktailType;
