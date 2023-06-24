import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./CatalogoMarca.css";
import { getMarcaBase } from "../../service/API_proyect/catalogo.service";
import CarruselPersonalizar from "../CarruselPersonalizar/CarruselPersonalizar";
import { getMarcaCocheBase } from "../../service/API_proyect/cocheBase.service";
import CartasMarca from "../CartasMarca/CartasMarca";
const CatalogoMarca = () => {
  const { marca } = useParams();
  const navigate = useNavigate();
  const [coches, setCoches] = useState({ data: [] });
  const [cocheCurrent, setCocheCurrent] = useState();
  useEffect(() => {
    (async () => {
      setCoches(await getMarcaCocheBase(marca));
    })();
  }, []);

  useEffect(() => {
    if (cocheCurrent !== undefined) {
      navigate(`/catalogo/${marca}/${cocheCurrent}`);
    }
  }, [cocheCurrent]);

  useEffect(() => {
    console.log(cocheCurrent);
  }, []);

  return (
    <div className="CatalogoMarca">
      <h2>Coches {marca}</h2>
      {/* <CarruselPersonalizar data={coches?.data} setCoche={setCocheCurrent} /> */}

      <CartasMarca data={coches?.data} setCoche={setCocheCurrent} />
    </div>
  );
};

export default CatalogoMarca;
