// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./mainStyles/Card.css";

function Card({ image, header, paragraph, theRoute, link_opening }) {
  return (
    <div className="display-card">
      <div className="card-image">
        {image && <img src={image} alt={header} />}
        <div className="card-text">
          <h1>{header}</h1>
          <hr />
          <div className="card-paragraph">
            {typeof paragraph === "string" ? <p>{paragraph}</p> : paragraph}
          </div>
          <br />
          {theRoute && link_opening && (
            <Link to={`/${theRoute}`} className="links">
              {link_opening}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
