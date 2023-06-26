import React, { useEffect, useState } from "react";
import "./CartasMarca.css";
import { getMarcaCocheBase } from "../../service/API_proyect/cocheBase.service";
import ToggleButtonCatalogo from "../LikeCatalogo/LikeCatalogo";
import CreateComment from "../CreateComment/CreateComment";
const CartasMarca = ({ marca, setCoche }) => {
  const [coches, setCoches] = useState(null);
  const [initRes, setInitRes] = useState(null);

  const getCoches = async () => {
    setInitRes(await getMarcaCocheBase(marca));
  };
  useEffect(() => {
    getCoches();
  }, []);

  useEffect(() => {
    if (initRes?.status == 200) setCoches(initRes.data);
  }, [initRes]);

  useEffect(() => {
    console.log(coches);
  }, [coches]);

  return (
    <div className="fotosMarca">
      {coches?.map((element) => (
        <figure key={element?._id} className="figureCoches">
          <img
            className="fotoCartaSelect"
            src={element?.image[1]}
            alt={element?.name}
            onClick={() => setCoche(element?._id)}
          />
          <h3>
            {element?.marca} {element?.modelo}
          </h3>
          <h3>Desde {element?.precio} €</h3>
          <div className="likesCatalogo">
            <ToggleButtonCatalogo
              car={element}
              setAllElementByPather={setCoches}
            />
            <p>{element?.like?.length}</p>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default CartasMarca;
