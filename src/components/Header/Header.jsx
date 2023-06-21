import "./Header.css";
import { useNavigate } from "react-router";

import React from "react";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className="divHeader">
      <div className="imagenHeader">
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
          alt="logo"
          className="logo"
          onClick={()=>navigate("/dashboard")}
        />
        <img 
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687338307/home-2_snquca.svg" 
          alt="home"
          className="imgHeaderHome" 
          onClick={()=>navigate("/perfil")}
          />
      </div>
      <div className="relative">
        <div className="navHeader">
          <a>Catálogo</a>
          <a>Compra y Venta</a>
          <a>Taller</a>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
