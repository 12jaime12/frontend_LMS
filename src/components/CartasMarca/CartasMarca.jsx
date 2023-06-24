import React, { useEffect } from "react";
import "./CartasMarca.css";
const CartasMarca = ({ data, setCoche }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="fotosMarca">
      {data?.map((element) => (
        <figure
          key={element?._id}
          onClick={() => setCoche(element?._id)}
          className="figureCoches"
        >
          <img
            className="fotoCartaSelect"
            src={element?.image[1]}
            alt={element?.name}
          />
          <h3>
            {element?.marca} {element?.modelo}
          </h3>
          <h3>Desde {element?.precio} €</h3>
        </figure>
      ))}
    </div>
  );
};

export default CartasMarca;
