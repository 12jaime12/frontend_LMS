import "./Header.css";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { H1C, H2C, PC } from "../ui";
import { LayoutInfo } from "../Layout";
import { useAuth } from "../../contexts/authContext";
import useWidth from "../../hooks/useWidth";

const Header = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const { ancho } = useWidth();
  const handleClick = () => {setOpen(!open); console.log("entro")}

  return (
    <header>
    
      <div className="headerIcons">
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
          alt="logo"
          className="logo"
          onClick={()=>navigate("/dashboard")}
        />
        
         <div className="navHeader">
         {ancho > 1200 ? (
          <>
          <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
          </>
         ) : (
          <button className="hamburger">
            <span className="material-symbols-outlined" onClick={handleClick}> menu </span>
            {open && (
              <div className="menuHambuger">
            <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
            </div>
            )}
          </button>
         )
         }
          </div>

          <LayoutInfo content="center" gap="1rem" >
          <button className="logout">
          <span className="material-symbols-outlined" onClick={logout}>logout</span>
          </button>
          <button className="person">
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

      </div>
    </header>
  );
};

export default Header;
