import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function WineCard({ title, image, _id, price, description, year, url }) {
    
  return (
    <div className="col-12 col-md-12 col-lg-4 card-detail">
      <div className="card shadow-sm">
        <div className="prova">
          <img className="card-img-top mx-auto d-block" src={image} alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-text">
            <b>{title}</b>
          </h5>
          <p className="card-text">
            <b>Wine Type: <br></br>{description}</b>
          </p>
          <p className="card-text">
            <b>Year: {year}</b>
          </p>
          <p className="card-text">
            <b>From: {price}€</b>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a className="btn btn-sm btn-outline-secondary" href={url} target="_blank">Buy now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineCard;
