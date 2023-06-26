import React, { useEffect, useState } from "react";
import "./CarruselPersonalizar.css";
import { getByIdUser } from "../../service/API_proyect/user.service";

const CarruselPersonalizar = ({ data, setCoche }) => {
  const [position, setPosition] = useState(0);
  //const [tallerName, setTallerName] = useState()

  const large = data.length;

/*   const buscaTaller = async (idTaller) => {
    console.log(idTaller)
    const taller = await getByIdUser(idTaller)
    console.log(taller)
   
  } */

  const suma = () => {
    console.log("suma");
    console.log(position);
    if (position < large - 1) {
      console.log("entro");
      setPosition(position + 1);
      setCoche(data[position + 1]?._id);
    }
  };

  const resta = () => {
    console.log("resta");
    console.log(position);
    if (position > 0) {
      console.log("entro");
      setPosition(position - 1);
      setCoche(data[position - 1]?._id);
    }
  };

/*   useEffect(()=>{
  
    (async()=>{const respuesta = await getByIdUser(data[position].taller)
    setTallerName(respuesta?.data?.apellido)
    })()
    
  },[position]) */

  console.log("dataaaaaaaaaaa", data)
  return (
    <div className="carrusel">
      <img
        className="flecha"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508366/left_vgwaum.png"
        alt="left"
        onClick={() => resta()}
      />
      {(data[position].estado!="taller") 
      ? (
      
      <figure className="carta" id={data[position]?._id}>
        <img
          className="fotoCarta"
          src={data[position]?.image[1]}
          alt={data[position]?.name}
        />
        <h3>
          {data[position]?.marca} {data[position]?.modelo}
        </h3>
        <h3>Desde {data[position]?.precio} €</h3>
      </figure>
      )
      :(
        <div className="cocheEnTaller">
      <h2>❌ EL COCHE YA SE ENCUENTRA EN EL TALLER ❌</h2>
        <figure className="cartaEnTaller" id={data[position]?._id}>
        <img
          className="fotoCarta"
          src={data[position]?.image[1]}
          alt={data[position]?.name}
        />
        <h3>
          {data[position]?.marca} {data[position]?.modelo}
        </h3>
        <h3>Actualmente en taller</h3>
      </figure>
      </div>
      )
      }
      <img
        className="flecha"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508364/right_hnqa08.png"
        alt="right"
        onClick={() => suma()}
      />
    </div>
  );
};

export default CarruselPersonalizar;
