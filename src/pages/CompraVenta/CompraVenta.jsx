import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authContext';
import { getAllCochesOcasion } from '../../service/API_proyect/coche.service';
import Button from '../../components/ui/Button';
import './Compraventa.css';
import FiltrarMarca from '../../components/FiltrarMarca/FiltrarMarca';

const CompraVenta = () => {
  //AQUI CREO LA ESTRUCTURA DE LA PAGINA DE COMPRAVENTA -> 2 BOTONES CON comprar y vender Y UN OUTLET CON EL CONTENIDO(todos los coches)
  //form comprar, form vender...etc
  const navigate = useNavigate();
  const { user } = useAuth();
  const [click, setClick] = useState(false);

  return (
    <div className="Compra-venta">
      <nav className="ulNavCompraventa">
        {user != null && (
          <Button
            type="text"
            text="Crear coche"
            variant="contained"
            color=""
            action={() => navigate('/createCoche')}
          />
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default CompraVenta;
