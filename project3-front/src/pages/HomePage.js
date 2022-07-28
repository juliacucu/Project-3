import logoHeader from "../assets/logoHeader.png";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import { useState, useEffect } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import RecipeCard from "../components/RecipeCard";
import { getAllRecipesService } from "../services/recipe.services";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

  const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  const getAllRecipes = async () => {
    // Send the token through the request "Authorization" Headers
    try {
      const response = await getAllRecipesService();
      const threeRecipes = getMultipleRandom(response.data, 3)
      setRecipes(threeRecipes);
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

  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 column-title">
          <h1 className="headerHomePage">Home Made Chef</h1>
        </div>
        <div className="col-12 col-sm-12 col-md-6 logo-image">
          <img className="logoHeader" src={logoHeader} />
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row">
            <h1>Featured recipes!</h1>
            {recipes?.map((recipe) => (
              <RecipeCard key={recipe._id} {...recipe} />
            ))}
          </div>
        )}

      </div>
      {/* <RecipeCard key={recipe._id} {...recipe} /> */}

      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top" />
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use />
            </svg>
          </a>
          <p className="text-muted">&copy; Home Made Chef 2022</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
