import React from "react";
import { useParams } from "react-router-dom";

function Dynamic() {
  const { id } = useParams();

  return <div>Dynamic route with id: {id}</div>;
}

export default Dynamic;
