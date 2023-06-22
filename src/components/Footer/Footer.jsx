import { NavLink } from "react-router-dom";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="div-listaInteres">
        <ul className="listaInteres">
          <li>
            <strong>
              <p>Enlaces de interés</p>
            </strong>
          </li>
          <li>
          <NavLink className="linkheader" to="/catalogo/honda">Catálogo de Honda</NavLink>
          </li>
          <li>
          <NavLink className="linkheader" to="/catalogo/Bmw">Catálogo de BMW</NavLink>
          </li>
          <li>
          <NavLink className="linkheader" to="/compraryvender">Compra y venta de vehiculos</NavLink>
          </li>
          <li>
          <NavLink className="linkheader" to="/taller">Taller</NavLink>
          </li>
        </ul>
      </div>
      <div className="fotoLogo">
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687248341/logoprincipal_rsq0kx_cpp7tp.jpg"
          alt="logoLMS"
        />
      </div>
      <div className="iconos">
        <img
          className="iconoRedSocial"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687249121/instagram_vgzuji.png"
          alt="logoInstagram"
        />
        <img
          className="iconoRedSocial"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687249134/gorjeo_dkc2qk.png"
          alt="logoTwitter"
        />
        <img
          className="iconoRedSocial"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687249119/facebook_hbh0pz.png"
          alt="logoFacebook"
        />
      </div>
    </footer>
  );
};

export default Footer;
