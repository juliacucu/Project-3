const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Recipe = require("../models/Recipe");
const { isAuthenticated } = require("./../middleware/jwt.middleware.js");

//  POST /api/recipes  -  Creates a new recipe
router.post("/recipes/create", isAuthenticated, (req, res, next) => {
  const {
    title,
    level,
    dishType,
    primaryIngredient,
    duration,
    creator,
    image,
    ingredients,
    steps,
  } = req.body;

  Recipe.create({
    title,
    level,
    dishType,
    primaryIngredient,
    duration,
    creator,
    image,
    ingredients,
    steps,
  }).then((recipeCreated) => {
    console.log(recipeCreated, "Recepta creada");
    const user = req.payload;
    console.log(user);
    User.findByIdAndUpdate(user._id, {
      $push: { userRecipes: recipeCreated._id },
    })
    .then((createdRecipe) => res.redirect(301, '/recipes'))
    // .then((response) => res.json(response))
    .catch((err) => res.json(err));
  });
});

//  GET /api/recipes -  Retrieves all of the recipes
router.get("/recipes", isAuthenticated, (req, res, next) => {
  Recipe.find()
    .then((allRecipes) => {
      console.log(allRecipes);
      res.json(allRecipes);
    })
    .catch((err) => res.json(err));
});

//  GET /api/recipes/:recipeID -  Retrieves a specific recipe by id
router.get("/recipes/:recipeId", isAuthenticated, (req, res, next) => {
  const { recipeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Recipe.findById(recipeId)
    .then((recipe) => res.status(200).json(recipe))
    .catch((error) => res.json(error));
});

// PUT  /api/recipes/:recipeId  -  Updates a specific recipe by id
router.put("/recipes/:recipeId/update", isAuthenticated, (req, res, next) => {
  const { recipeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Recipe.findByIdAndUpdate(recipeId, req.body, { new: true })
    .then((updatedRecipe) => res.json(updatedRecipe))
    .catch((error) => res.json(error));
});

//Add favorites
router.post("/recipes/add-favorite/:id", isAuthenticated, (req, res) => {
  const idRecipe = req.params.id;
  const user = req.payload;
  User.findById(user._id)
    .then((userFound) => {
      if (!userFound.favorites.includes(idRecipe)) {
        User.findByIdAndUpdate(user._id, {
          $push: { favorites: idRecipe },
        }).then(() => {
          res.json();
        });
      } else {
        User.findByIdAndUpdate(user._id, {
          $pull: { favorites: { $in: [idRecipe] } },
        }).then((response) => {
          console.log(response);
          res.redirect("/recipes");
        });
      }
    })
    .catch((error) => next(error));
});

// DELETE  /api/recipes/:recipetId  -  Deletes a specific recipe by id
router.delete("/recipes/:recipeId", isAuthenticated, (req, res, next) => {
  const { recipeId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(recipeId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Recipe.findByIdAndRemove(recipeId)
    .then(
      () => res.redirect("/recipes")
      // res.json({
      //   message: `Recipe with ${recipeId} is removed successfully.`,
      // }),
    )
    .catch((error) => res.json(error));
});

module.exports = router;
