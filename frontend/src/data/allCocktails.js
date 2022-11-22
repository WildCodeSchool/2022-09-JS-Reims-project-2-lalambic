import axios from "axios";
import { useState, useEffect } from "react";

const alphabet = "abcdefghijklmnopqrstvwyz".split("");

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);

  function fetchApi() {
    /* fetch the api for each alphabet letter(excepted for u and x) to download all cocktails data */
    Promise.all(
      alphabet.map((letter) =>
        axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
        )
      )
    ).then((responses) => {
      const allCocktails = responses.reduce(
        (allPreviousCocktails, response) => {
          const cocktailsForThisLetter = response.data.drinks.map(
            ({
              idDrink: id,
              strDrink: name,
              strCategory: category,
              strAlcoholic: alcoholic,
              strGlass: glass,
              strInstructions: instructions,
              strDrinkThumb: image,
              ...cocktail
            }) => ({
              id,
              name,
              category,
              alcoholic,
              glass,
              instructions,
              image,
              ingredients: Object.keys(cocktail)
                .filter(
                  (key) =>
                    key.includes("strIngredient") && cocktail[key] != null
                )
                .map((key) => cocktail[key].toLowerCase()),
              measures: Object.keys(cocktail)
                .filter(
                  (key) => key.includes("strMeasure") && cocktail[key] != null
                )
                .map((key) => cocktail[key].toLowerCase()),
            })
          );

          return [...allPreviousCocktails, ...cocktailsForThisLetter];
        },
        []
      );

      setCocktails(allCocktails);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return { cocktails, isLoading };
};

export default useFetch;
