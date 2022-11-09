import axios from "axios";

const allCocktails = [];

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";

const alphabet = "abcdefghijklmnopqrstvwyz".split("");

const fetchApi = (letter) => {
  axios.get(`${url}${letter}`).then((res) => {
    allCocktails.push(...res.data.drinks);
  });
};

alphabet.forEach((letter) => fetchApi(letter));

export default allCocktails;
