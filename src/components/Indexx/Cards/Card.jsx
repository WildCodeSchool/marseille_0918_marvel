import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ name, comics, image, identification }) => {
  return (
    <div className="card">
      <NavLink
        className="idontknow"
        to={`/character/${identification}`}
        onClick={`/character/${identification}`}
      >
        <div className="front">
          <img src={image} alt={name} />
        </div>
        <div className="back">
          <div className="details">
            <h2>
              {name}
              <br />
              <span>{comics}</span>
            </h2>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
