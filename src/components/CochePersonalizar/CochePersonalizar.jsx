import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./CochePersonalizar.css";
import { getById } from "../../service/API_proyect/catalogo.service";
import { Switch } from "../Switch/Switch";
import CarruselFotos from "../CarruselFotos/CarruselFotos";
import { useAuth } from "../../contexts/authContext";

const CochePersonalizar = () => {
  const { id } = useParams();
  const [cocheBase, setCocheBase] = useState({ data: {} });
  const [arrayString, setArrayString] = useState("");
  const [array, setArray] = useState([]);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [llantas, setLlantas] = useState();
  const [motor, setMotor] = useState();
  const [precio, setPrecio] = useState();
  const [precioMotor, setPrecioMotor] = useState(0);
  const [precioLlantas, setPrecioLlantas] = useState(0);
  const [precioColor, setPrecioColor] = useState(0);
  const { user } = useAuth();

  const enviarDatos = () => {
    const formData = {
      marca: cocheBase?.data?.marca,
      modelo: cocheBase?.data?.modelo,
      color: color,
      precio: precio,
      llantas: llantas,
      motor: motor,
      year: cocheBase?.data?.year,
      combustible: cocheBase?.data?.combustible,
      cliente: user.id,
      image: array,
    };
    console.log(formData);
  };
  useEffect(() => {
    (async () => {
      setCocheBase(await getById(id));
    })();
  }, []);

  useEffect(() => {
    console.log(cocheBase?.data);
    setColor(cocheBase?.data?.color);
    setModelo(cocheBase?.data?.modelo);
    setMarca(cocheBase?.data?.marca);
    setLlantas(cocheBase?.data?.llantas);
    setPrecio(cocheBase?.data?.precio);
    const arraAux = `${cocheBase?.data?.marca}_${cocheBase?.data?.modelo}_${cocheBase?.data?.color}_${cocheBase?.data?.llantas}`;
    console.log(arraAux);
    setArrayString(arraAux);
  }, [cocheBase]);

  useEffect(() => {
    const fotos = Switch(arrayString);
    console.log(fotos);
    setArray(fotos);
  }, [arrayString]);

  useEffect(() => {
    console.log(array);
  }, [array]);

  useEffect(() => {
    console.log(color);
  }, [color]);

  useEffect(() => {
    console.log(precio);
  }, [precio]);
  useEffect(() => {
    setPrecio(
      cocheBase?.data?.precio + precioMotor + precioColor + precioLlantas
    );
  }, [precioMotor, precioColor, precioLlantas]);

  useEffect(() => {
    //console.log(marca, modelo, color, llantas);
    const arraAux2 = `${marca}_${modelo}_${color}_${llantas}`;
    console.log(arraAux2);
    setArrayString(arraAux2);
  }, [modelo, marca, color, llantas]);
  return (
    <div className="personalizarCoche">
      <h2>Coches </h2>
      {array !== undefined && <CarruselFotos data={array} />}
      <h3>Precio: {precio} €</h3>
      <div>
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687422016/download_rvnxwv.png"
          alt="color negro"
          onClick={() => setColor("negro")}
          className="colorSelector"
        />
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687422025/download_m0oygb.jpg"
          alt="color blanco"
          onClick={() => {
            setColor("blanco");
            setPrecioColor(1000);
          }}
          className="colorSelector"
        />
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687422040/download_iosvc3.jpg"
          alt="color gris"
          onClick={() => {
            setColor("gris");
            setPrecioColor(3000);
          }}
          className="colorSelector"
        />
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687422008/azul-color_itvunv.png"
          alt="color azul"
          onClick={() => {
            setColor("azul");
            setPrecioColor(5000);
          }}
          className="colorSelector"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687423570/llantas1_zchfoi.png"
          alt="llanta tipo 1"
          onClick={() => {
            setLlantas("1");
            setPrecioLlantas(5000);
          }}
          className="llantasSelector"
        />
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687425160/llantas2bmw_oyl58q.png"
          alt="llanta tipo 2"
          onClick={() => {
            setLlantas("2");
            setPrecioLlantas(10000);
          }}
          className="llantasSelector"
        />
      </div>

      {cocheBase?.data?.combustible === "electrico" ? (
        <div className="divMotores">
          <figure
            className="motorSelector"
            onClick={() => {
              setMotor("1");
              setPrecioMotor(1000);
            }}
          >
            <p>motor: electrico 100W</p>
          </figure>
          <figure
            className="motorSelector"
            onClick={() => {
              setMotor("2");
              setPrecioMotor(10000);
            }}
          >
            <p>motor: electrico 1000W</p>
          </figure>
        </div>
      ) : (
        <div className="divMotores">
          <figure
            className="motorSelector"
            onClick={() => {
              setMotor("1");
              setPrecio(precio + 5000);
            }}
          >
            <p>motor: gasolina 230cv</p>
          </figure>
          <figure
            className="motorSelector"
            onClick={() => {
              setMotor("2");
              setPrecio(precio + 3000);
            }}
          >
            <p>motor: diesel 210cv</p>
          </figure>
        </div>
      )}
      <button onClick={() => enviarDatos()}>Guardar Coche Personalizado</button>
    </div>
  );
};

export default CochePersonalizar;
