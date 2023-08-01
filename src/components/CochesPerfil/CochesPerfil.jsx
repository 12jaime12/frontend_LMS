import { useNavigate, useParams } from 'react-router';
import './CochesPerfil.css';

import React, { useState } from 'react';
import { useEffect } from 'react';
import { getCocheById } from '../../service/API_proyect/coche.service';
import { getById } from '../../service/API_proyect/catalogo.service';
import CarruselFotos from '../CarruselFotos/CarruselFotos';
import Button from '../ui/Button';

const CochesPerfil = () => {
  const { id, variable } = useParams();
  const [coche, setCoche] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (variable === 'coche') {
        setCoche(await getCocheById(id));
        console.log('coche entro');
      } else {
        setCoche(await getById(id));
        console.log('catalogo entro');
      }
    })();
  }, []);

  useEffect(() => {
    console.log(coche?.data);
  }, [coche]);

  return (
    <div className="perfilCoches">
      {variable == 'coche' ? (
        <div className="cochesPerfil">
          {coche !== undefined && <CarruselFotos data={coche?.data?.image} />}
          <h3>
            {coche?.data?.marca} {coche?.data?.modelo}
          </h3>
          <p>Combustible: {coche?.data?.combustible}</p>
          <p>Año: {coche?.data?.year}</p>
          <p>Precio: {coche?.data?.precio} €</p>
          <Button
            text="Volver al Perfil"
            action={() => navigate('/profile')}
            variant="contained"
            color="white"
          />
        </div>
      ) : (
        <div className="cochesPerfil">
          {coche !== undefined && <CarruselFotos data={coche?.data?.image} />}
          <h3>
            {coche?.data?.cocheBase?.marca.toUpperCase()}{' '}
            {coche?.data?.cocheBase?.modelo.toUpperCase()}
          </h3>
          <div
            style={{ background: coche?.data?.color?.codeColor }}
            className="divColors"
          ></div>
          <p>Color: {coche?.data?.color?.name}</p>
          <p>Motor: {coche?.data?.motor?.name}</p>
          <p>Precio: {coche?.data?.precio} €</p>

          <Button
            text="Volver al Perfil"
            action={() => navigate('/profile')}
            variant="contained"
            color="white"
          />
        </div>
      )}
    </div>
  );
};

export default CochesPerfil;
