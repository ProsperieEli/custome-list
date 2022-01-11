import React from "react";
import { Link } from "react-router-dom";

export default function Character({ character }) {
  return (
    <div>
      <img src={character.photoUrl} alt={character.name} />
      <p>{character.name}</p>
      <p>{character.allies}</p>
      <p>{character.enemies}</p>
      <Link to="/">
        <button>Return home</button>
      </Link>
    </div>
  );
}
