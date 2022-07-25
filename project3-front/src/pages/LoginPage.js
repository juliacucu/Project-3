import { useState, useContext } from "react";
// import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import { loginService } from "../services/auth.services";
import logoSignUp from "../assets/logoSignUp.png";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    try {
      const response = await loginService(requestBody);

      const token = response.data.authToken;
      logInUser(token);
      navigate("/");
    } catch (err) {
      const errorDescription = err?.response?.data?.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="container">
      <div className="login-container form-login w-100 m-auto">
        <img className="logoHeader" src={logoSignUp} />
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <form onSubmit={handleLoginSubmit}>
          <label for="floatingInput">Email:</label>
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              name="email"
              id="floatingInput"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <label for="floatingInput">Password:</label>
          <div className="form-floating">
            <input
              className="form-control"
              type="password"
              name="password"
              id="floatingInput"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <button
            className="w-100 btn btn-lg btn-success button-myApp"
            type="submit"
          >
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p>Don't have an account yet?</p>
        <Link to={"/signup"}> Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
