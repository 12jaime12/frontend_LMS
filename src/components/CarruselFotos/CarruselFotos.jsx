import React, { useEffect, useState } from 'react';
import './CarruselFotos.css';
const CarruselFotos = ({ data }) => {
  const [position, setPosition] = useState(0);
  //const large = data.length;

  const suma = () => {
    console.log('suma');
    console.log(position);
    if (position < 4 - 1) {
      console.log('entro');
      setPosition(position + 1);
    }
  };

  const resta = () => {
    console.log('resta');
    console.log(position);
    if (position > 0) {
      console.log('entro');
      setPosition(position - 1);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="carrusel">
      <img
        className="flechaFotos"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508366/left_vgwaum.png"
        alt="left"
        onClick={() => resta()}
      />
      <figure className="cartaFotos">
        <img className="fotoCarta" src={data[position]} alt={data[position]} />
      </figure>
      <img
        className="flechaFotos"
        src="https://res.cloudinary.com/dtyjzv2xg/image/upload/v1686508364/right_hnqa08.png"
        alt="right"
        onClick={() => suma()}
      />
    </div>
  );
};

export default CarruselFotos;
