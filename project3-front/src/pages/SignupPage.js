import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupService } from "../services/auth.services";
import logoSignUp from "../assets/logoSignUp.png"


function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };
    try {
		console.log('try')
      await signupService(requestBody);
      navigate("/login");
    } catch (err) {
		console.log('try')
      if (err.response?.status=== 400) {
        setErrorMessage(err.response.data.errorMessage);
        console.log(errorMessage);
      }
    }
  };

  return (
    <div className="SignupPage form-login w-100 m-auto">
    <img className="logoHeader" src={logoSignUp} />
      <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
      <div className="form-floating">
        <label for="floatingInput">Email:</label>
        <input className="form-control" type="text" name="email" id="floatingInput" value={email} onChange={handleEmail} />
      </div>

      <div className="form-floating">
        <label for="floatingInput">Password:</label>
        <input
          className="form-control"
          type="password"
          name="password"
          id="floatingInput"
          value={password}
          onChange={handlePassword}/>
      </div>

      <div className="form-floating">
        <label for="floatingInput">Name:</label>
        <input className="form-control" type="text" name="name" id="floatingInput" value={name} onChange={handleName} />
      </div>

      <button className="w-100 btn btn-lg btn-success button-myApp" type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}
export default SignupPage;
