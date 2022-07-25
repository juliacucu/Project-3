import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { useContext } from "react";
import logoSignUp from "../assets/logoSignUp.png"
import Table from 'react-bootstrap/Table';



const UserPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className='container'>
      <img className="logoHeader" src={logoSignUp} />
      <div className='container'>Welcome, {user.name} !</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>My favorite recipes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dgdf</td>
          </tr>
        </tbody>
      </Table>
      <Link to="/addrecipe">Add new one</Link>
    </div>
  )
}

export default UserPage