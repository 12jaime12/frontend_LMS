import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./CochePersonalizar.css";
import {
  createCatalogo,
  getById,
} from "../../service/API_proyect/catalogo.service";
import { Switch } from "../Switch/Switch";
import CarruselFotos from "../CarruselFotos/CarruselFotos";
import { useAuth } from "../../contexts/authContext";
import { getByIdCocheBase } from "../../service/API_proyect/cocheBase.service";
import Button from "../ui/Button";

const CochePersonalizar = () => {
  const { id } = useParams();
  const [cocheBase, setCocheBase] = useState(null);
  const [arrayString, setArrayString] = useState("");
  const [array, setArray] = useState([]);
  const [positionColor, setPositionColor] = useState(0);
  const [positionLlantas, setPositionLlantas] = useState(0);
  const [positionMotor, setPositionMotor] = useState(0);
  const [precio, setPrecio] = useState();
  const [precioMotor, setPrecioMotor] = useState(0);
  const [precioLlantas, setPrecioLlantas] = useState(0);
  const [precioColor, setPrecioColor] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  const enviarDatos = async () => {
    const formData = {
      cocheBase: id,
      color: cocheBase?.data?.color[positionColor]._id,
      precio: precio,
      llantas: cocheBase?.data?.llantas[positionLlantas]._id,
      motor: cocheBase?.data?.motor[positionMotor]._id,
      cliente: user.id,
      image: array,
    };
    console.log(formData);
    await createCatalogo(formData);
    //console.log("enviado");
  };

  useEffect(() => {
    const precioFinal =
      cocheBase?.data?.precio + precioColor + precioLlantas + precioMotor;
    console.log(precioFinal);
    setPrecio(precioFinal);
  }, [precioColor, precioLlantas, precioMotor]);

  useEffect(() => {
    console.log(positionMotor);
  }, [positionMotor]);

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
    setPrecio(cocheBase?.data?.precio);
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
      <h4>Precio {precio} €</h4>
      <h3>Llantas</h3>
      <div className="divLlantas">
        {cocheBase?.data?.llantas?.map((element, index) => (
          <div
            key={element?._id}
            onClick={() => {
              setPositionLlantas(index);
              setPrecioLlantas(cocheBase?.data?.llantas[index]?.precio);
            }}
          >
            <img src={element?.image} className="imgLlantas" />
          </div>
        ))}
      </div>
      <h3>Color</h3>
      <div className="divColores">
        {cocheBase?.data?.color?.map((element, index) => (
          <div
            key={element?._id}
            style={{ background: element?.codeColor }}
            className="divColors"
            onClick={() => {
              setPositionColor(index);
              setPrecioColor(cocheBase?.data?.color[index]?.precio);
            }}
          ></div>
        ))}
      </div>
      <h3>Motor</h3>
      <div className="divMotores">
        {cocheBase?.data?.motor?.map((element, index) => (
          <div
            key={element?._id}
            onClick={() => {
              setPositionMotor(index);
              setPrecioMotor(cocheBase?.data?.motor[index]?.precio);
            }}
            className="motor"
          >
            <p>{element?.name}</p>
          </div>
        ))}
      </div>
      <Button
        text="Guardar Coche Personalizado"
        action={() => enviarDatos()}
        variant="contained"
        color="white"
      />
    </div>
  );
};

export default CochePersonalizar;
