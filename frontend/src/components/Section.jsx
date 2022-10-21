import "./section.css";

function Section() {
  return (
    <div className="section">
      <div className="display-selection">section1</div>
      <div className="display-main">
        <div className="card">
          <img
            className="cardstyle"
            src="https://media.istockphoto.com/photos/cocktail-splash-picture-id1283952381"
            alt="it's a cocktail"
          />
          <h2 className="titlecocktail"> Its a cocktail</h2>
        </div>

        <div className="card">
          <img
            className="cardstyle"
            src="https://media.istockphoto.com/photos/preparation-of-a-cocktail-picture-id1340608319"
            alt="it's a cocktail"
          />
          <h2 className="titlecocktail"> Its a cocktail</h2>
        </div>
      </div>
    </div>
  );
}

export default Section;
