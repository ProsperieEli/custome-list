import React from "react";
import Character from "../components/Character";
import { getById } from "../service/API";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [person, setPerson] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then((res) => setPerson(res));
  }, [id]);

  return (
    <div>
      <Character character={person} />
    </div>
  );
}
