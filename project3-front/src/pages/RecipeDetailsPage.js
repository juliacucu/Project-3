import { useState, useEffect } from "react";
import { getRecipeDetailsService, getAddFavoriteService } from "../services/recipe.services";
import { Link, useParams, useNavigate } from "react-router-dom";
import WineCard from "../components/WineCard";
import axios from "axios";


const RecipeDetailsPage = () => {
  const [recipe, setRecipe] = useState();
  const [wines, setWines] = useState();
  const [filteredWines, setFilteredWines] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const recipeId = id;
  const navigate = useNavigate();

  // Get the recipe
  const getRecipe = async () => {
    try {
      const response = await getRecipeDetailsService(recipeId);
      setRecipe(response.data);
    } catch (err) {
      console.log(err);
    } 
  };

  // Get all wines from API
  const getWines = async () => {
    try {
      const wines = await axios.get(`https://wine-server-homemadechef.herokuapp.com/wines`)
      setWines(wines.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Filter all wines from WINE state
  const filterWines = async () => {
    const recommendedWines = wines.filter((wine) => {
      return wine.wine_primaryIngredient.includes(recipe.primaryIngredient)
    })
    const threeWines = getMultipleRandom(recommendedWines, 3)
    setFilteredWines(threeWines)
  }

  // Render the Wine Cards
  const showWineCards = () => {
    return (
      filteredWines?.map((wine) => (
        <WineCard
        key={wine.wine_name}
        title={wine.wine_name}
        image={wine.wine_image} 
        price={wine.wine_price}
        description={wine.wine_description}
        do={wine.wine_do}
        year={wine.wine_year}
        url={wine.wine_url}
        />
      ))
    )
  }

  // Select three random wines
  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  useEffect(() => {
    try {
      getRecipe()
      getWines()
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    filterWines()
  }, [wines])
  

  const addToFavorites = async () => {
    try{
     await getAddFavoriteService(recipeId)
      navigate("/recipes")
    }catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      {isLoading ? <h1>Loading...</h1>
      : <div className="row">
        {recipe && (
          <div>
            <h1>{recipe.title}</h1>
            <div className="detail-recipe">
              <p>
                <b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    ></path>
                  </svg>
                  Level: 
                </b>
                {recipe.level}
              </p>

              <p>
                <b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-receipt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"></path>
                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  Type: 
                </b>
                {recipe.dishType}
              </p>

              <p>
                <b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                  </svg>
                  Duration: 
                </b>
                {recipe.duration}
              </p>

              <p>
                <b>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"></path>
                  </svg>
                  Creator: 
                </b>
                {recipe.creator}
              </p>
            </div>

            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-recipe-detail"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>

              <div className="col-md-6">
                <div>
                <h2>Ingredients</h2>
                <hr />
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                </div>
                <div>

                <h2>Steps</h2>
                <hr />
                <ol>
                  {recipe.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <h2>Our wine suggestion</h2>
          <hr></hr>
         {showWineCards()}
        </div>

      <div className="action-buttons">
        <Link to="/recipes">
          <button className="button-app">Back to recipes</button>
        </Link>

        <button className="button-app" onClick={() => addToFavorites()}>Add/Delete to favorites</button>
      </div>
      </div> }
    </div>
  );
}

export default RecipeDetailsPage;
