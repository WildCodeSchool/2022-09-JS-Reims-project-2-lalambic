import axios from "axios";
import { useState, useEffect } from "react";

const downloadedCocktails = [];

const alphabet = "abcdefghijklmnopqrstvwyz".split("");

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  function fetchApi() {
    const promises = [];
    /* fetch the api for each alphabet letter(excepted for u and x) to download all cocktails data */
    alphabet.forEach((letter) => {
      const fetch = axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        )
        .then((res) => res);
      promises.push(fetch);
      if (promises.length === 24) {
        /* if all promises are inserted into an array, set new keys for values of all cocktails */
        Promise.all([...promises]).then((res) => {
          res.forEach((data) =>
            data.data.drinks.forEach((cocktail) => {
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
              /* insert ingredients and measures in their arrays */
              for (const [key, value] of Object.entries(cocktail)) {
                if (key.includes("strIngredient") && value != null) {
                  newCocktail.ingredients.push(value);
                }
                if (key.includes("strMeasure") && value != null) {
                  newCocktail.measures.push(value);
                }
              }
              /* insert cocktail object in an array if all cocktails are not downloaded and stop the loader */
              if (downloadedCocktails.length < 425) {
                downloadedCocktails.push(newCocktail);
              } else {
                setIsLoading(false);
                setCocktails(downloadedCocktails);
              }
            })
          );
        });
      }
    });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { cocktails, isLoading };
};

export default useFetch;
