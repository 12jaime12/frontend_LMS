import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./CatalogoMarca.css";
import { getMarcaBase } from "../../service/API_proyect/catalogo.service";
import CarruselPersonalizar from "../CarruselPersonalizar/CarruselPersonalizar";
const CatalogoMarca = () => {
  const { marca } = useParams();
  const navigate = useNavigate();
  const [coches, setCoches] = useState({ data: {} });
  const [cocheCurrent, setCocheCurrent] = useState();
  useEffect(() => {
    (async () => {
      setCoches(await getMarcaBase(marca));
    })();
  }, []);
  useEffect(() => {
    setCocheCurrent(coches?.data[0]?._id);
  }, [coches]);
  useEffect(() => {
    console.log(cocheCurrent);
  });

  return (
    <div className="CatalogoMarca">
      <h2>Coches {marca}</h2>
      <CarruselPersonalizar data={coches?.data} setCoche={setCocheCurrent} />
      <button onClick={() => navigate(`/catalogo/${marca}/${cocheCurrent}`)}>
        Personalizalo
      </button>
    </div>
  );
};

export default CatalogoMarca;
