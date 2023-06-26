import "./Header.css";
import { useNavigate } from "react-router";
import React from "react";
import { NavLink } from "react-router-dom";
import { H1C, H2C, PC } from "../ui";
import { LayoutHeader, LayoutInfo } from "../Layout";
import { useAuth } from "../../contexts/authContext";

const Header = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  return (
    <header>
    
      <LayoutHeader >
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
          alt="logo"
          className="logo"
          onClick={()=>navigate("/dashboard")}
        />
         <LayoutInfo gap="3rem">
         <button class="hamburger">
            <span class="material-symbols-outlined"> menu </span>
          </button>
          <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
          </LayoutInfo>

          <LayoutInfo content="center" gap="1rem" >
          <button class="logout">
          <span className="material-symbols-outlined" onClick={logout}>logout</span>
          </button>
          <button class="person">
          <span className="material-symbols-outlined" onClick={()=>navigate("/profile")}>person</span>
          </button>
          {/* <img 
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
          /> */}

          </LayoutInfo>

      </LayoutHeader>
    </header>
  );
};

export default Header;
