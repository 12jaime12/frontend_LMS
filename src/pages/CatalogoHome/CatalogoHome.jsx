import React from "react";
import "./CatalogoHome.css";
import { NavLink, useNavigate } from "react-router-dom";
const CatalogoHome = () => {
  const navigate = useNavigate();
  return (
    <div className="catalogo">
      <h1>Catálogo</h1>
      <div className="marcas">
        <nav>
          <img
            src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687275029/HD-wallpaper-bmw-new-logo-bmw-bmw-2020-bmw-cars-bmw-logo-car-new-logo_wgrr3k.jpg"
            alt="logoBMW"
            onClick={() => navigate(`/catalogo/Bmw`)}
          />

          <img
            src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687858064/honda2_caq1ge.png"
            alt="logoHonda"
            onClick={() => navigate(`/catalogo/honda`)}
            className="logoHonda"
          />
        </nav>
      </div>
    </div>
  );
};

export default CatalogoHome;
