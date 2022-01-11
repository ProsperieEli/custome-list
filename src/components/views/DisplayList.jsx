import React from "react";
import { useState } from "react";
import Characters from "../components/Characters";
import { getAll } from "../service/API";
import { useEffect } from "react";

export default function DisplayList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  //state is what is given to the prop in component value

  //what passes as first perameter: this is anonymous function--no intake
  //what goes in the array:
  useEffect(() => {
    getAll().then((res) => {
      setCharacters(res);
      setLoading(false);
    });
  }, []);
  //array is dependency. Only changes when state changes
  return (
    <div>
      {loading ? <h1> Loading...</h1> : <Characters characters={characters} />}
    </div>
  );
}
