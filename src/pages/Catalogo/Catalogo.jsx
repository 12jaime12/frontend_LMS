import React from 'react';
import './Catalogo.css';
import { NavLink, Outlet } from 'react-router-dom';
const Catalogo = () => {
  return (
    <div className="Catalog">
      <Outlet />
    </div>
  );
};

export default Catalogo;
