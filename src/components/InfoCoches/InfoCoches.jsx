import React, { useEffect, useState } from "react";
import "./InfoCoche.css";
import { useNavigate, useParams } from "react-router";
import { getByIdCocheBase } from "../../service/API_proyect/cocheBase.service";
import CarruselFotos from "../CarruselFotos/CarruselFotos";
const InfoCoches = () => {
  const { id, marca } = useParams();
  const [cocheBase, setCocheBase] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      setCocheBase(await getByIdCocheBase(id));
    })();
  }, []);

  useEffect(() => {
    console.log(cocheBase?.data);
  }, [cocheBase]);

  return (
    <div className="infoCoche">
      <img
        src={cocheBase?.data?.info?.image[0]}
        alt={cocheBase?.data?.modelo}
        className="imagenReal"
      />

      <h2>{cocheBase?.data?.info?.titulo}</h2>
      <p>{cocheBase?.data?.info?.informacion}</p>
      {cocheBase !== undefined && (
        <CarruselFotos data={cocheBase?.data?.image} />
      )}

      <button onClick={() => navigate(`/catalogo/${marca}/personalizar/${id}`)}>
        Personalizalo
      </button>
    </div>
  );
};

export default InfoCoches;
