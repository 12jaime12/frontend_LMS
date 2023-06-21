import React from "react";
import { useParams } from "react-router";
import "./CochePersonalizar.css";
const CochePersonalizar = () => {
  const { marca } = useParams();
  return (
    <div className="personalizarCoche">
      <h2>Coches {marca}</h2>
    </div>
  );
};

export default CochePersonalizar;
