import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./CatalogoMarca.css";
import { getMarcaBase } from "../../service/API_proyect/catalogo.service";
const CatalogoMarca = () => {
  const { marca } = useParams();
  const navigate = useNavigate();
  const [coches, setCoches] = useState({});
  useEffect(() => {
    (async () => {
      setCoches(await getMarcaBase(marca));
    })();
  }, []);
  useEffect(() => {
    console.log(coches);
  }, [coches]);
  return (
    <div className="CatalogoMarca">
      <h2>Coches {marca}</h2>
      <button onClick={() => navigate(`/catalogo/${marca}/hola`)}>hola</button>
    </div>
  );
};

export default CatalogoMarca;
