import React from "react";
import "./CatalogoHome.css";
import { NavLink, useNavigate } from "react-router-dom";
const CatalogoHome = () => {
  const navigate = useNavigate();
  return (
    <div className="catalogo">
      <h1>Catalogo</h1>
      <div className="marcas">
        <nav>
          <img
            src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687275029/HD-wallpaper-bmw-new-logo-bmw-bmw-2020-bmw-cars-bmw-logo-car-new-logo_wgrr3k.jpg"
            alt="logoBMW"
            onClick={() => navigate(`/catalogo/Bmw`)}
          />

          <img
            src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687337086/depositphotos_641587260-stock-illustration-honda-logo-brand-symbol-white_jl7xg0.webp"
            alt="logoHonda"
            onClick={() => navigate(`/catalogo/honda`)}
          />
        </nav>
      </div>
    </div>
  );
};

export default CatalogoHome;
