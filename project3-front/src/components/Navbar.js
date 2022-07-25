import { Link } from "react-router-dom";
import { useContext } from "react"; // <== IMPORT
import { AuthContext } from "./../context/auth.context"; // <== IMPORT
import logoHome from "../assets/logoHome.png";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" to={"/"}></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                <img className="imgLogoHome" src={logoHome} />
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <NavDropdown title='Recipes' id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to='/recipes'>All recipes</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/recipes/breakfast'>Breakfast</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/recipes/lunch'>Lunch</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/recipes/dinner'>Dinner</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/recipes/drinks'>Drinks</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/recipes/desserts'>Desserts</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/recipes/other'>Other</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to='/user'>My Profile</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/faqs'>FAQs</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOutUser}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Log in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
