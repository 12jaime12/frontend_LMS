import "./Header.css";
import { useNavigate } from "react-router";
import React from "react";
import { NavLink } from "react-router-dom";
import { H1C, H2C, PC } from "../ui";
import { LayoutHeader, LayoutInfo, LayoutInline } from "../Layout";
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
         <LayoutInfo content="center" gap="2rem">
          <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
          </LayoutInfo>

          <LayoutInfo content="flex-end" gap="1rem">
          <span className="material-symbols-outlined" 
          onClick={logout}>
          logout
          </span>
          <span className="material-symbols-outlined" 
          onClick={()=>navigate("/profile")}>
          person
          </span>
          </LayoutInfo>

      </LayoutHeader>
    </header>
  );
};

export default Header;
