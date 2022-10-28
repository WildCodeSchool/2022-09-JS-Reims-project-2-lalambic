<<<<<<< HEAD
import "./Section.css";
=======
import Card from "./Card";
import cocktails from "../data/cocktails";
import "./section.css";
>>>>>>> 39847239aba40da245ee03b3cf821974c45aba0c

function Section() {
  return (
    <div className="section">
      <div className="display-main">
        {cocktails.slice(0, 2).map((cocktail) => (
          <Card
            key={cocktail.name}
            cocktailName={cocktail.name}
            image={cocktail.image}
          />
        ))}
      </div>
      <div className="display-main">
        {cocktails.slice(2, 4).map((cocktail) => (
          <Card
            key={cocktail.name}
            cocktailName={cocktail.name}
            image={cocktail.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
