import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAllCochesOcasion } from '../../service/API_proyect/coche.service';
import { useAuth } from '../../contexts/authContext';
import PrintAllCoches from '../../components/PrintAllCoches/PrintAllCoches';

const ComprayventaHome = () => {
  //AQUI ME TENGO QUE TRAER TODOS LOS COCHES Y EL COMPONENTE QUE RECIBE LA data POR PROPS
  const navigate = useNavigate();
  const { user } = useAuth;
  const [res, setRes] = useState();
  const [send, setSend] = useState(false);

  return (
    <div>
      <PrintAllCoches />
    </div>
  );
};

export default ComprayventaHome;
