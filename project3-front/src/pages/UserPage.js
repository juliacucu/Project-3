import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import logoSignUp from "../assets/logoSignUp.png";
import Table from "react-bootstrap/Table";
import { getMyUser } from "../services/auth.services";

const UserPage = () => {
  const [myUser, setMyUser] = useState();
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    let response;
    try {
      response = await getMyUser(user._id);
    } catch (err) {
      console.log(err);
    } finally {
      setMyUser(response.data);
      setLoading(false);
    }
  };

  const { user } = useContext(AuthContext);

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <img className="logoHeader" src={logoSignUp} />
      <div className="container">
        <h1>Welcome, {user.name}!</h1>
      </div>
      <Table hover>
        <thead>
          <tr className="table-header">
            <th colSpan={2}>My recipes</th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? myUser.userRecipes.map((recipe) => (
                <tr className="table-row justify-content-between">
                  <td className="justify-content-between row-recipe">
                    <div>
                      <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                    </div>
                    <div>
                      <Link to={`/recipes/${recipe._id}/update`}>Update ✏️</Link>
                    </div>
                  </td>
                </tr>
              ))
            : "Loading"}
        </tbody>
      </Table>
      <Table hover>
        <thead>
          <tr className="table-header">
            <th>
              <b>Favorite recipes</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading
            ? myUser.favorites.map((recipe) => (
                <tr className="table-row">
                  <td>
                    <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                  </td>
                </tr>
              ))
            : "Loading"}
        </tbody>
      </Table>
      <button className="button-app">
        <Link to="/recipes/create">Add new one</Link>
      </button>
    </div>
  );
};

export default UserPage;
