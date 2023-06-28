import React, { useEffect, useState } from "react";
import "./CarruselScroll.css";
import Button from "../ui/Button";
import { updateCocheServicio } from "../../service/API_proyect/coche.service";
import { deleteUser, getByIdUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router";
import deleteCocheUser from "../../util/deleteCocheUser";

const CarruselScroll = ({ cocheUser, likes, variable }) => {
  const [estadoCoche, setEstadoCoche] = useState(false);
  const [coches, setCoches] = useState();
  const [res, setRes] = useState(false)
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log("cochessssss", cocheUser);

  const changeEstado = async (id, estado, precio) => {
    const customData = {
      estado: estado == "none" ? "venta" : "none",
      precio: precio,
    };
    console.log("estado del coche", customData);
    await updateCocheServicio(id, customData);
    setEstadoCoche(true);
    const auxiliar = await getByIdUser(user.id);
    console.log("auxiliar", auxiliar);
    setCoches(auxiliar?.data.coche_cliente);
  };
  useEffect(() => {
    setCoches(cocheUser);
    console.log("cocheUser", coches);
  }, [cocheUser]);

  useEffect(() => {
    console.log("estadoCoche", coches);
  }, [estadoCoche]);
  return (
    <div className="divCarruselScroll">
      {coches?.length != 0 ? (
        coches?.map((elem) => {
          console.log("coche", elem);
          return (
            <figure key={elem._id} className="carruselScrollFigure">
              <img
                className="carruselScrollImage"
                src={elem.image[0]}
                alt={elem.modelo}
                onClick={() => navigate(`/profile/${variable}/${elem._id}`)}
              />
              <div>
              <h2 className="carruselScrollH2">
                {elem.marca} {elem.modelo}
              </h2>

              {!likes &&
                (elem.estado == "venta" ? (
                  <>
                    <p>Estado: En venta</p>
                    <p
                      className="estadoVenta"
                      onClick={() =>
                        changeEstado(elem._id, elem.estado, elem.precio)
                      }
                    >
                      QUITAR DE LA VENTA
                    </p>
                  </>
                ) : elem.estado == "none" ? (
                  <>
                    <p>Estado: Sin actividad</p>
                    <p
                      className="estadoEnVenta"
                      onClick={() =>
                        changeEstado(elem._id, elem.estado, elem.precio)
                      }
                    >
                      PONER A LA VENTA
                    </p>
                  </>
                ) : (
                  elem.estado == "taller" && (
                    <>
                      <p>Estado: En el taller</p>
                      <p className="estadoEnTaller">EN EL TALLER</p>
                    </>
                  )
                ))}
                
                <img
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687680460/trash_hc1jlx.svg"
                  alt="delete icon"
                  onClick={() => deleteCocheUser(elem._id, setRes)}
                />
              
                </div>
            </figure>
          );
        })
      ) : (
        <>
          <h2>
            TODAVÍA NO TIENES NINGÚN COCHE REGISTRADO. Consulta el
            boton de arriba
          </h2>
        </>
      )}
    </div>
  );
};

export default CarruselScroll;
