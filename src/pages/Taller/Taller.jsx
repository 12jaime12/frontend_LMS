import React, { useEffect, useState } from 'react';
import {
  getByIdUser,
  getByRolUser,
} from '../../service/API_proyect/user.service';
import { useAuth } from '../../contexts/authContext';
import PrintTalleres from '../../components/PrintTalleres/PrintTalleres';
import PrintAllCoches from '../../components/PrintAllCoches/PrintAllCoches';
import CarruselPersonalizar from '../../components/CarruselPersonalizar/CarruselPersonalizar';
import './Taller.css';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router';

const Taller = () => {
  const [res, setRes] = useState();
  const [resUser, setResUser] = useState();
  const [coche, setCoche] = useState();
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log('userID', user);

  const allTaller = async () => {
    setRes(await getByRolUser());
  };
  const userId = async () => {
    setResUser(await getByIdUser(user.id));
    setCoche(resUser?.coche_cliente);
  };
  console.log('taller', resUser);

  useEffect(() => {
    (async () => {
      setResUser(await getByIdUser(user.id));
    })();
    setCoche(resUser?.coche_cliente);
    console.log('rRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRResuser', resUser);
    console.log('cocheeeeeeeeeeee', coche);
  }, []);
  useEffect(() => {
    (async () => {
      setRes(await getByRolUser());
    })();
  }, []);

  useEffect(() => {
    console.log('cocheeeeeeeeeeeeeeeeee', coche);
  }, [coche]);
  console.log('res', resUser);
  return (
    <div className="Taller">
      {resUser?.data?.coche_cliente.length > 0 ? (
        <div className="divCarruselCocheCliente">
          <CarruselPersonalizar
            data={resUser?.data?.coche_cliente}
            setCoche={setCoche}
          />
        </div>
      ) : (
        <div className="divSuperiorTaller">
          <h3>
            No tienes ningún coche registrado en la web. Si quieres contratar
            servicios de taller deberás dar de alta algún coche
          </h3>
          <Button
            type="text"
            text="Crear coche"
            variant="contained"
            color=""
            action={() => navigate('/createCoche')}
          />
        </div>
      )}
      <div>
        <PrintTalleres data={res} coche={coche} />
      </div>
    </div>
  );
};

export default Taller;
