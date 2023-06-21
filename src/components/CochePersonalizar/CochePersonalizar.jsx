import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CochePersonalizar.css";
import { getById } from "../../service/API_proyect/catalogo.service";
import { Switch } from "../Switch/Switch";
import CarruselFotos from "../CarruselFotos/CarruselFotos";

const CochePersonalizar = () => {
  const { id } = useParams();
  const [cocheBase, setCocheBase] = useState({ data: {} });
  const [arrayString, setArrayString] = useState("");
  const [array, setArray] = useState([]);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [llantas, setLlantas] = useState();

  useEffect(() => {
    (async () => {
      setCocheBase(await getById(id));
    })();
  }, []);

  useEffect(() => {
    console.log(cocheBase?.data);
    const arraAux = `${cocheBase?.data?.marca}_${cocheBase?.data?.modelo}_${cocheBase?.data?.color}_${cocheBase?.data?.llantas}`;
    console.log(arraAux);
    setArrayString(arraAux);
  }, [cocheBase]);

  useEffect(() => {
    const fotos = Switch(arrayString);
    setArray(fotos);
  }, [arrayString]);

  useEffect(() => {
    console.log(array);
  }, [array]);
  return (
    <div className="personalizarCoche">
      <h2>Coches </h2>
      {array !== undefined && <CarruselFotos data={array} />}
    </div>
  );
};

export default CochePersonalizar;
