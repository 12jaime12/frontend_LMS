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
  const handleClick = () => {setOpen(!open)}
  const handleClose = () => {setOpen(false)}

  return (
    <header>
    
      <div className="headerIcons">
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
          alt="logo"
          className="logo"
          onClick={()=>{navigate("/dashboard");handleClose()}}
        />
        
         <div className="navHeader">
         {ancho > 1050 ? (
          <>
          <NavLink className="linkheader" to="/catalogo">Catálogo<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y Venta<div className="underline"></div></NavLink>
          <NavLink className="linkheader" to="/taller">Taller<div className="underline"></div></NavLink>
          </>
         ) : (
          <>
              <button className="hamburger">
                <span
                  className="material-symbols-outlined"
                  onClick={handleClick}
                >
                  {" "}
                  menu{" "}
                </span>
              </button>
              {open && (
                <div className={`menuHambuger ${open && "open"}`}>
                  {/* <button onClick={handleClick}>X</button> */}
                  <div className="linksBurguer">
                    <span>
                      <NavLink onClick={handleClose} className="spanBurger" to="/catalogo">
                        Catálogo<div className="underline"></div>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink onClick={handleClose} className="spanBurger" to="/compraryvender">
                        Compra y Venta<div className="underline"></div>
                      </NavLink>
                    </span>
                    <span>
                      <NavLink onClick={handleClose} className="spanBurger" to="/taller">
                        Taller<div className="underline"></div>
                      </NavLink>
                    </span>
                  </div>
                </div>
              )}
            </> 
         )
         }
          </div>

          <LayoutInfo content="center" gap="1rem" >
          <button className="logout">
          <span className="material-symbols-outlined" onClick={() => {logout();handleClose()}}>logout</span>
          </button>
          <button className="person">
          <span className="material-symbols-outlined" onClick={()=>{navigate("/profile");handleClose()}}>person</span>
          </button>

          </LayoutInfo>

      </div>
    </header>
  );
};

export default Header;
