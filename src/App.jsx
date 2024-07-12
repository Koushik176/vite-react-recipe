import "./App.css";
import omlegeImg from "./assets/image-omelette.jpeg";

function App() {
  return (
    <main>
      <div className="main-div">
        <img src={omlegeImg} alt="recipe image" />
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <section className="main-section-1">
          <h3>Preparation time</h3>
          <ul>
            <li>
              <span>Total:</span> Approximately 10 minutes
            </li>
            <li>
              <span>Preparation:</span> 5 minutes
            </li>
            <li>
              <span>Cooking:</span> 5 minutes
            </li>
          </ul>
        </section>
        <section className="main-section-2">
          <h2>Ingredients</h2>
          <ul>
            <li>
              <span>2-3 large eggs</span>
            </li>
            <li>
              <span>Salt, to taste</span>
            </li>
            <li>
              <span>Pepper, to taste</span>
            </li>
            <li>
              <span>1 tablespoon of butter or oil</span>
            </li>
            <li>
              <span>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
        </section>
        <hr />
        <section className="main-section-3">
          <h2>Instructions</h2>
          <ul>
            <li>
              <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan:</span> Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Add fillings (optional):</span> When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve:</span>As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <span>Enjoy:</span> Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ul>
        </section>
        <hr />
        <section className="main-section-4">
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
        </section>
        <table className="table">
          <tr>
            <td>Calories</td>
            <td>277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>22g</td>
          </tr>
        </table>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/Koushik176"
          target="_blank"
        >
          Koushik
        </a>
        .
      </div>
    </main>
  );
}

export default App;
