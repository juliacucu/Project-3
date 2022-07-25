import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipesService } from "../services/recipe.services";

function LunchRecipes() {
  const [lunchRecipes, setLunchRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wordToSearch, setWordToSearch] = useState('');

  const filteredlunchRecipes = lunchRecipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(wordToSearch.toLowerCase())
    );
  });

  const getAllRecipes = async () => {
    // Send the token through the request "Authorization" Headers
    try {
      const response = await getAllRecipesService();
      const lunchRecipes = response.data.filter((recipe) => {
        return (
          recipe.dishType.includes('Lunch')
        );
      });
      setLunchRecipes(lunchRecipes);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllRecipes();
  }, []);

  const handleChange = (e) => {
    setWordToSearch(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Lunch recipes</h1>
        <div className="search-input">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}></input>
        </div>
        {loading ? <div>Loading...</div> : filteredlunchRecipes?.map((recipe) => <RecipeCard key={recipe._id} {...recipe} />)}
      </div>
    </div>
  );
}

export default LunchRecipes;
