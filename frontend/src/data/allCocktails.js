import axios from "axios";

const allCocktails = [];

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const alphabet = "abcdefghijklmnopqrstvwyz".split("");

const fetchApi = (letter) => {
  axios.get(`${url}${letter}`).then((res) => {
    res.data.drinks.forEach((cocktail) => {
      const newCocktail = {
        id: cocktail.idDrink,
        name: cocktail.strDrink,
        category: cocktail.strCategory,
        alcoholic: cocktail.strAlcoholic,
        glass: cocktail.strGlass,
        instructions: cocktail.strInstructions,
        image: cocktail.strDrinkThumb,
        ingredients: [],
        measures: [],
      };
      for (const [key, value] of Object.entries(cocktail)) {
        if (key.includes("strIngredient") && value != null) {
          newCocktail.ingredients.push(value);
        }
        if (key.includes("strMeasure") && value != null) {
          newCocktail.measures.push(value);
        }
      }
      allCocktails.push(newCocktail);
    });
  });
};

alphabet.forEach((letter) => fetchApi(letter));

export default allCocktails;
