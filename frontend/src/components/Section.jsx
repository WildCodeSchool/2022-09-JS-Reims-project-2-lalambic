import "./section.css";

function Section() {
  return (
    <div className="section">
      <div className="display-main">
        <div className="card">
          <img
            className="cardstyle"
            src="https://www.thecocktaildb.com/images/media/drink/59splc1504882899.jpg"
            alt="Havana Cocktail"
          />
          <h2 className="titlecocktail"> Its a cocktail 1</h2>
        </div>
        <div className="card">
          <img
            className="cardstyle"
            src="https://www.thecocktaildb.com/images/media/drink/0bkwca1492975553.jpg"
            alt="Highland Fling Cocktail"
          />
          <h2 className="titlecocktail"> Its a cocktail 2</h2>
        </div>
      </div>
      <div className="display-main">
        <div className="card">
          <img
            className="cardstyle"
            src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
            alt="it's a cocktail"
          />
          <h2 className="titlecocktail"> Its a cocktail 3</h2>
        </div>
        <div className="card">
          <img
            className="cardstyle"
            src="https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg"
            alt="it's a cocktail"
          />
          <h2 className="titlecocktail"> Its a cocktail 4</h2>
        </div>
      </div>
    </div>
  );
}

export default Section;
