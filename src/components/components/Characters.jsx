import React from "react";
import { Link } from "react-router-dom";

export default function Characters({ characters }) {
  return (
    <div>
      <ul>
        {" "}
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <Link to={`/character/${character.id}`}>
                <img src={character.photoUrl} alt={character.name} />
              </Link>
              <p>{character.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
