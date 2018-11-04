import React from "react";
import "./Cards.scss";
import Card from "./Card";

const Cards = ({ characters }) => {
  return (
    <div className="cards-container">
      {characters.map(character => {
        {
          return (
            <Card
              key={character.id}
              name={character.name}
              comics={character.biography.publisher}
              image={character.image.url}
            />
          );
        }
      })}
    </div>
  );
};

export default Cards;
