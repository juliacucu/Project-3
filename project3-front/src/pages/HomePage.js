import logoHeader from "../assets/logoHeader.png";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

function HomePage() {
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
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* <div className="container">
      <RecipeCard key={recipe._id} {...recipe} />
      </div> */}

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
