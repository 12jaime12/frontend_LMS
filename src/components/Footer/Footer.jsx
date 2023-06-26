import { NavLink } from "react-router-dom";
import "./Footer.css";
import React from "react";
import {LayoutFlex, LayoutInline, LayoutFooter } from "../../components/Layout"
import { H3C } from '../ui/H3.element'

const Footer = () => {
  return (
    <footer>
      
    <LayoutFooter>
     <div className="linksFooter">
          <H3C className="h3footer" text="Enlaces de interés" color="white" width="largo"/>
          <NavLink className="linkfooter" to="/catalogo">Catálogo</NavLink>
          <NavLink className="linkfooter" to="/compraryvender">Compra y venta</NavLink>
          <NavLink className="linkfooter" to="/taller">Taller</NavLink>
      </div>
        <img 
        className="fotoLogo"
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687248341/logoprincipal_rsq0kx_cpp7tp.jpg"
          alt="logoLMS"
        />
      <div className="redes">
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
     
      </LayoutFooter>
    </footer>
  );
};

export default Footer;
