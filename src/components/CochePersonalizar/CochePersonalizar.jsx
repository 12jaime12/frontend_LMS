import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CochePersonalizar.css";
import {
  createCatalogo,
  getById,
} from "../../service/API_proyect/catalogo.service";
import { Switch } from "../Switch/Switch";
import CarruselFotos from "../CarruselFotos/CarruselFotos";
import { useAuth } from "../../contexts/authContext";
import { getByIdCocheBase } from "../../service/API_proyect/cocheBase.service";

const CochePersonalizar = () => {
  const { id } = useParams();
  const [cocheBase, setCocheBase] = useState(null);
  const [arrayString, setArrayString] = useState("");
  const [array, setArray] = useState([]);
  const [positionColor, setPositionColor] = useState(0);
  const [positionLlantas, setPositionLlantas] = useState(0);
  const [motor, setMotor] = useState();
  const [precio, setPrecio] = useState();
  const [precioMotor, setPrecioMotor] = useState(0);
  const [precioLlantas, setPrecioLlantas] = useState(0);
  const [precioColor, setPrecioColor] = useState(0);
  const { user } = useAuth();

  // const enviarDatos = async () => {
  //   const formData = {
  //     marca: cocheBase?.data?.marca,
  //     modelo: cocheBase?.data?.modelo,
  //     color: color,
  //     precio: precio,
  //     llantas: llantas,
  //     motor: motor,
  //     year: cocheBase?.data?.year,
  //     combustible: cocheBase?.data?.combustible,
  //     cliente: user.id,
  //     image: array,
  //     rol: "personalizado",
  //   };
  //   console.log(formData);
  //   //await createCatalogo(formData);
  //   console.log("enviado");
  // };
  useEffect(() => {}, [positionColor]);

  useEffect(() => {}, [positionLlantas]);

  useEffect(() => {
    (async () => {
      setCocheBase(await getByIdCocheBase(id));
    })();
  }, []);

  useEffect(() => {
    console.log(cocheBase?.data);
  }, [cocheBase]);

  useEffect(() => {
    const arrayAux = cocheBase?.data?.image;

    setArray(arrayAux);
  }, [cocheBase]);

  useEffect(() => {
    //console.log(cocheBase);
    console.log(positionColor);
    //console.log(positionLlantas);

    if (cocheBase) {
      console.log(positionLlantas);
      const arrayAux =
        cocheBase?.data?.llantas[positionLlantas].images[positionColor];
      setArray(() => arrayAux);
    }
  }, [cocheBase, positionColor, positionLlantas]);

  return (
    <div className="personalizarCoche">
      <h2>Coches </h2>
      {array !== undefined && <CarruselFotos data={array} />}
      <div className="divLlantas">
        {cocheBase?.data?.llantas?.map((element, index) => (
          <div key={element?._id} onClick={() => setPositionLlantas(index)}>
            <img src={element?.image} className="imgLlantas" />
          </div>
        ))}
      </div>
      <div className="divColores">
        {cocheBase?.data?.color?.map((element, index) => (
          <div
            key={element?._id}
            style={{ background: element?.codeColor }}
            className="divColors"
            onClick={() => setPositionColor(index)}
          ></div>
        ))}
      </div>
      <button onClick={() => enviarDatos()}>Guardar Coche Personalizado</button>
    </div>
  );
};

export default CochePersonalizar;
