import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const UpdateRecipe = () => {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [dishType, setDishType] = useState("");
  const [primaryIngredient, setPrimaryIngredient] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const params = useParams();
  const recipeId = params.id;
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${API_URL}/recipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const recipe = response.data;
        setTitle(recipe.title);
        setLevel(recipe.level);
        setDishType(recipe.dishType);
        setPrimaryIngredient(recipe.primaryIngredient);
        setDuration(recipe.duration);
        setImage(recipe.image);
        setIngredients(recipe.ingredients);
        setSteps(recipe.steps);
      })
      .catch((error) => console.log(error));
  }, [recipeId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      level,
      dishType,
      primaryIngredient,
      duration,
      image,
      ingredients,
      steps,
    };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .put(`${API_URL}/recipes/${recipeId}/update`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/user")
      })
      // .then((response) => {
      //   props.history.push(`/recipes/${recipeId}`);
      // });
  };

  const deleteRecipe = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // // Send the token through the request "Authorization" Headers
    axios
      .delete(`${API_URL}/recipes/${recipeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      // .then(() => props.history.push("/recipes"))
      .then(() => {
        navigate("/user")
      })


  };

  return (
    <div className="container">
      <h3>Edit recipe</h3>
      
<div className="row">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={title}
              placeholder="Enter the title of your recipe"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Level</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Select the level</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Pro Chef">Pro Chef</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dish Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="dishType"
              value={dishType}
              onChange={(e) => setDishType(e.target.value)}
            >
              <option>Select dish type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Drinks">Drinks</option>
              <option value="Dessert">Dessert</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Primary Ingredient</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="dishType"
              value={primaryIngredient}
              onChange={(e) => setPrimaryIngredient(e.target.value)}
            >
              <option>Select the primary ingredient</option>
              <option value="Fish and seafood">Fish and seafood</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Meat">Meat</option>
              <option value="Pasta and Rice">Pasta and Rice</option>
              <option value="Dessert">Dessert</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              value={duration}
              placeholder="Time of cooking in minutes"
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={image}
              placeholder="Write an URL of the picture of your recipe"
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control as="textarea" rows={3}
              type="text"
              name="ingredients"
              value={ingredients}
              placeholder="Enter the ingredients of your recipe"
              onChange={(e) => setIngredients(e.target.value)}
            />
            <Form.Text className="text-muted">
              Write each ingredient separated by coma " , "
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Steps</Form.Label>
            <Form.Control as="textarea" rows={3}
              type="text"
              name="steps"
              value={steps}
              placeholder="Enter the steps of your recipe"
              onChange={(e) => setSteps(e.target.value)}
            />
            <Form.Text className="text-muted">
              Write each ingredient separated by dot " . "
            </Form.Text>
          </Form.Group>
          <Button variant="orange-800" type="submit">
            Save changes
          </Button>
          <Button variant="danger" onClick={deleteRecipe}>
            Delete recipe
          </Button>
        </Form>
      </div>

      {/* <button onClick={deleteRecipe}>Delete recipe</button> */}
    </div>
  );
}

export default UpdateRecipe;
