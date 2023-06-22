import "./Header.css";
import { useNavigate } from "react-router";
import React from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import { H1C, H2C, PC } from "../ui";
import { LayoutHeader } from "../Layout";
=======
import { useAuth } from "../../contexts/authContext";
>>>>>>> ea34fa09e7608e1a453d1ff9853c790d791f5828


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
      <LayoutHeader width="100%" heigth="100%"  padding = "0" margin="0">
      {/* <div className="relative">
        <div className="navHeader"> */}
          <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
        {/* </div>
      </div> */}
      </LayoutHeader>
      </div>
      
    </header>
  );
};

export default Header;
