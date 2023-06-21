import React from "react";
import "./Catalogo.css";
import { NavLink } from "react-router-dom";
const Catalogo = () => {
  return (
    <div className="catalogo">
      <h1>Catalogo</h1>
      <div className="marcas">
        <ul>
          <li>
            <img
              src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687275029/HD-wallpaper-bmw-new-logo-bmw-bmw-2020-bmw-cars-bmw-logo-car-new-logo_wgrr3k.jpg"
              alt="logoBMW"
            />
          </li>
          <li>
            <NavLink>
              <img
                src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687337086/depositphotos_641587260-stock-illustration-honda-logo-brand-symbol-white_jl7xg0.webp"
                alt="logoHonda"
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalogo;
