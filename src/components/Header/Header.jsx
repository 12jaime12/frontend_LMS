import "./Header.css";
import { useNavigate } from "react-router";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


const Header = () => {
  const {logout} = useAuth()
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
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687456756/logout_pjonak.svg" 
          alt="home"
          className="imgHeaderLogout" 
          onClick={logout}
          />
        <img 
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687338307/home-2_snquca.svg" 
          alt="home"
          className="imgHeaderHome" 
          onClick={()=>navigate("/profile")}
          />
      </div>
      <div className="relative">
        <div className="navHeader">
          <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
