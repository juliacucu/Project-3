import { useState } from "react";
import { addNewRecipeService } from "../services/recipe.services.js";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";

function AddRecipe(props) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [dishType, setDishType] = useState("");
  const [primaryIngredient, setPrimaryIngredient] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [creator, setCreator] = useState(user.name);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRecipe = {
      title,
      level,
      dishType,
      primaryIngredient,
      duration,
      creator,
      image,
      ingredients,
      steps,
    };

    // Creem un array d'ingredients
    newRecipe.ingredients = newRecipe.ingredients.split(",");
    newRecipe.steps = newRecipe.steps.split(".");

    // Send the token through the request "Authorization" Headers
    try {
      await addNewRecipeService(newRecipe);
      setTitle("");
      setLevel("");
      setDishType("");
      setPrimaryIngredient("");
      setImage("");
      setIngredients([]);
      setSteps([]);

      props.refreshRecipes();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="AddRecipe">
      <h3>Add Recipe</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>
          Level
          <select
            className="form-control"
            name="select"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Pro Chef">Pro Chef</option>
          </select>
        </label>

        <label>
          Dish Type
          <select
            className="form-control"
            name="select"
            value={dishType}
            onChange={(e) => setDishType(e.target.value)}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Drinks">Drinks</option>
            <option value="Dessert">Dessert</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Primary Ingredient
          <select
            className="form-control"
            name="select"
            value={primaryIngredient}
            onChange={(e) => setPrimaryIngredient(e.target.value)}
          >
            <option value="Fish and seafood">Fish and seafood</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Meat">Meat</option>
            <option value="Pasta and Rice">Pasta and Rice</option>
            <option value="Dessert">Dessert</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>Duration</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <label>Image</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <label>Ingredients</label>
        <textarea
          type="text"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <label>Steps</label>
        <textarea
          type="text"
          name="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;
