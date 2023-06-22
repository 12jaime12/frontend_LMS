import { NavLink } from "react-router-dom";
import "./Footer.css";
import React from "react";
import { PC } from "../ui/P.element";
import {LayoutFlex, LayoutForm, LayoutInline, LayoutInfo} from "../../components/Layout"
import { H3C } from '../ui/H3.element'

const Footer = () => {
  return (
    <footer>
    <LayoutInfo content="space-between" color="#242424">
     <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
          <H3C text="Enlaces de interés" color="white" width="largo"/>
          <NavLink className="linkheader" to="/catalogo">Catálogo</NavLink>
          <NavLink className="linkheader" to="/compraryvender">Compra y venta</NavLink>
          <NavLink className="linkheader" to="/taller">Taller</NavLink>
      </LayoutFlex>
      <div className="fotoLogo">
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687248341/logoprincipal_rsq0kx_cpp7tp.jpg"
          alt="logoLMS"
        />
      </div>
      <LayoutInline gap="0" padding="1rem">
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
      </LayoutInline>
      </LayoutInfo>
    </footer>
  );
};

export default Footer;
