import React, { useEffect, useRef, useState } from "react";
import "./PrintAllCoches.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router";
import deleteCocheUser from "../../util/deleteCocheUser";
import Button from "../ui/Button";
import { addLike } from "../../service/API_proyect/user.service";
import ToggleButton from "../Like/Like";
import {
  getAllCochesOcasion,
  getByMarca,
  getCochesVenta,
} from "../../service/API_proyect/coche.service";

const PrintAllCoches = () => {
  const refInput = useRef();
  const [coches, setCoches] = useState();
  const [cocheCarga, setCocheCarga] = useState();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [res, setRes] = useState(false);
  const [userLike, setUserLike] = useState();
  const [render, setRender] = useState(false);
  const [filtrarCoche, setFiltrarCoche] = useState();
  const [initRes, setInitRes] = useState(null);
  const [send, setSend] = useState(false);
  const arrayMarcas = [];

  const getCochesOcasion = async () => {
    console.log("user coches ocasion", user);
    setSend(true);
    setInitRes(await getCochesVenta());
    setSend(false);
  };

  const buscarMarca = (e) => {
    const filtrados = coches.filter((coche) =>
      coche.marca.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCocheCarga(filtrados);
  };

  const buscarPrecio = (e) => {
    setTimeout(() => {
      const filtrados = coches.filter(
        (coche) => parseInt(coche.precio) < parseInt(e.target.value)
      );
      setCocheCarga(filtrados);
    }, 500);
  };

  useEffect(() => {
    setCocheCarga(coches);
  }, [coches]);

  useEffect(() => {
    console.log("ffffffffff", filtrarCoche);
  }, [filtrarCoche]);

  useEffect(() => {
    getCochesOcasion();
  }, []);

  useEffect(() => {
    if (initRes?.status == 200) setCoches(initRes.data);
  }, [initRes]);

  useEffect(() => {
    getCochesOcasion();
  }, [res]);

  return (
    <div>
      <div className="inputsFiltros">
        <input
          className="marca"
          type="text"
          onChange={(e) => buscarMarca(e)}
          placeholder="marca"
        ></input>
        <input
          className="precio"
          type="text"
          onChange={(e) => buscarPrecio(e)}
          placeholder="maxPrecio"
        ></input>
      </div>

      <div className="divAllCoches">
        {cocheCarga?.map((elem) => (
          <div key={elem._id}>
            <figure
              className="figureCoche"
              onClick={() => navigate(`/compraryvender/coche/${elem._id}`)}
            >
              <div className="divFigureCoche">
                <img src={elem.image[0]} alt={elem.modelo} />
                <div className="divCocheInfo">
                  <p>
                    {elem.marca} {elem.modelo}
                  </p>
                  <p>
                    Precio: <strong>{elem.precio} €</strong>
                  </p>
                </div>
              </div>
            </figure>

            <div className="divIconos">
              <div className="divLikesCoches">
                <img
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687677683/message-circle-2-filled_sy9woy.svg"
                  alt="icono comentarios"
                  onClick={() =>
                    user == null
                      ? navigate("/login")
                      : navigate(`/compraryvender/coche/${elem._id}`)
                  }
                />
                <p>{elem.comentario.length}</p>
              </div>
              <div className="divLikesCoches">
                <ToggleButton car={elem} setAllElementByPather={setCoches} />
                <p>{elem.like.length}</p>
              </div>
              {user?.coches?.includes(elem._id) && (
                <img
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687680460/trash_hc1jlx.svg"
                  alt="delete icon"
                  onClick={() => deleteCocheUser(elem._id, setRes)}
                />
              )}
            </div>
            {/* <Button)
      type="button"
        text="Borrar"
        action={deleteCocheUser(elem._id, setRes)}
        variant="contained"
        color="white"
      /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintAllCoches;
