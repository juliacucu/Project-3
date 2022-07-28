import { useState } from "react";
import { addNewRecipeService } from "../services/recipe.services.js";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function UpdateRecipe(props) {
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
      <h3>Update Recipe</h3>
      <div className="row">
              <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <label>Title</label><br/>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> <br/>

        <label>
          Level
          <select
            className="form-control"
            name="select"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          ><br/>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Pro Chef">Pro Chef</option>
          </select>
        </label><br/>

        <label>
          Dish Type
          <select
            className="form-control"
            name="select"
            value={dishType}
            onChange={(e) => setDishType(e.target.value)}
          ><br/>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Drinks">Drinks</option>
            <option value="Dessert">Dessert</option>
            <option value="Other">Other</option>
          </select>
        </label><br/>

        <label>
          Primary Ingredient
          <select
            className="form-control"
            name="select"
            value={primaryIngredient}
            onChange={(e) => setPrimaryIngredient(e.target.value)}
          ><br/>
            <option value="Fish and seafood">Fish and seafood</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Meat">Meat</option>
            <option value="Pasta and Rice">Pasta and Rice</option>
            <option value="Dessert">Dessert</option>
            <option value="Other">Other</option>
          </select>
        </label><br/>

        <label>Duration</label><br/>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        /><br/>

        <label>Image</label><br/>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        /><br/>

        <label>Ingredients</label><br/>
        <textarea
          type="text"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        /><br/>

        <label>Steps</label><br/>
        <textarea
          type="text"
          name="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
            </div>
  );
}

export default UpdateRecipe;
