import "./Header.css";

import React from "react";

const Header = () => {
  return (
    <header>
      <div className="divHeader">
      <div className="imagenHeader">
        <img
          src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1686737065/logoredondo-removebg-preview_uidph4.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="relative">
        <div className="navHeader">
          <a>Catalogo</a>
          <a>Compra y Venta</a>
          <a>Taller</a>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
