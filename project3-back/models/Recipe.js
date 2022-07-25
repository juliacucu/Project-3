const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  title: String,
  level: {
    type: String,
    enum: ['Easy', 'Medium', 'Pro Chef']
  },
  dishType: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Dessert', 'Other']
  },
  primaryIngredient: {
    type: String,
    enum: ['Fish and seafood', 'Vegetarian', 'Meat', 'Pasta and Rice', 'Dessert', 'Other']
  },

  duration: Number,
  creator: String,
  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },
  ingredients: [ String ],
  steps: [String]
});

module.exports = model("Recipe", recipeSchema);
