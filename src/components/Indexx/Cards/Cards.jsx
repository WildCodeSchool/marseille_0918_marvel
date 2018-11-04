import React from "react";
import "./Cards.scss";
import Card from "./Card";

const Cards = ({ characters }) => {
  console.log(characters);
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
              identification={character.id}
            />
          );
        }
      })}
    </div>
  );
};

export default Cards;
