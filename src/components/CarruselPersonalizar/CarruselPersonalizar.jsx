import React, { useEffect, useState } from "react";
import "./CarruselPersonalizar.css";
const CarruselPersonalizar = ({ data, setCoche }) => {
  const [position, setPosition] = useState(0);
  const large = data.length;

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
  return (
    <div className="carrusel">
      <img
        className="flecha"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508366/left_vgwaum.png"
        alt="left"
        onClick={() => resta()}
      />
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
