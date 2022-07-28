import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import BreakfastRecipes from "./pages/BreakfastRecipes";
import LunchRecipes from "./pages/LunchRecipes";
import DinnerRecipes from "./pages/DinnerRecipes";
import DrinksRecipes from "./pages/DrinksRecipes";
import DessertRecipes from "./pages/DessertRecipes";
import OtherRecipes from "./pages/OtherRecipes";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import AddRecipe from "./pages/AddRecipe";
import UpdateFormRecipe from "./pages/UpdateFormRecipe";
import FAQsPage from "./pages/FAQsPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/recipes"
          element={
            <PrivateRoute>
              <RecipeListPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/breakfast"
          element={
            <PrivateRoute>
              <BreakfastRecipes />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/lunch"
          element={
            <PrivateRoute>
              <LunchRecipes />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/dinner"
          element={
            <PrivateRoute>
              <DinnerRecipes />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/drinks"
          element={
            <PrivateRoute>
              <DrinksRecipes />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/desserts"
          element={
            <PrivateRoute>
              <DessertRecipes />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/other"
          element={
            <PrivateRoute>
              <OtherRecipes />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/recipes/:id"
          element={
            <PrivateRoute>
              <RecipeDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/recipes/create"
          element={
            <PrivateRoute>
              <AddRecipe />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/recipes/:id/update"
          element={
            <PrivateRoute>
              <UpdateFormRecipe />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/faqs"
          element={
            <PrivateRoute>
              <FAQsPage />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/signup"
          element={
            <AnonRoute>
              <SignupPage />
            </AnonRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AnonRoute>
              <LoginPage />
            </AnonRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
    