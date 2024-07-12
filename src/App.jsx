import "./App.css";
import omeletteImg from "./assets/image-omelette.jpeg";
import Attribution from "./components/Attribution";
import Nutrition from "./components/Nutrition";
import Preparation from "./components/Preparation";

function App() {
  return (
    <main>
      <div className="main-div">
        <img src={omeletteImg} alt="recipe image" />
        <h1>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <Preparation />
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
        <Nutrition />
      </div>
      <Attribution />
    </main>
  );
}

export default App;
