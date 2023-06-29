import React, { useEffect, useState } from 'react';
import './PrintInfoCoche.css';
import Button from '../ui/Button';
import { H3C } from '../ui/H3.element';
import { PC } from '../ui/P.element';
import { LayoutFlex } from '../../components/Layout';
import { useNavigate, useParams } from 'react-router';
import { useAuth } from '../../contexts/authContext';
import CreateComment from '../CreateComment/CreateComment';
import Swal from 'sweetalert2';
import {
  getAllComentarios,
  getByCoche,
} from '../../service/API_proyect/comentario.service';
import CarruselFotos from '../CarruselFotos/CarruselFotos';

const PrintInfoCoche = ({ data }) => {
  const { id } = useParams();
  const [comment, setComment] = useState(false);
  const [res, setRes] = useState();
  const [send, setSend] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [comments, setComments] = useState({});
  const addUserComentario = async () => {};

  const getAllComments = async () => {
    setComments(await getByCoche(id));
  };

  const info = data?.data;
  console.log(info);
  console.log(info?.image);

  useEffect(() => {
    getAllComments();
    console.log('all comments', comments);
  }, []);

  return (
    <div className="printInfo">
      <div className="PrintCoche">
        {info !== undefined && <CarruselFotos data={info?.image} />}
        <div className="InfoPrintCoche">
          <PC text={`Marca: ${info?.marca}`} width="medio" />
          <PC text={`Modelo: ${info?.modelo}`} width="extralargo" />
          <PC text={`Año: ${info?.year}`} width="medio" />
          <PC text={`Combustible: ${info?.combustible}`} width="extralargo" />
          <PC text={`Precio: ${info?.precio} €`} width="medio" />
          <PC text={`Informacion: ${info?.content}`} width="extralargo" />
        </div>
      </div>

      <div className="divComentarios">
        <CreateComment variable={'coche'} id={info?._id} comments={comments} />
      </div>
    </div>
  );
};

export default PrintInfoCoche;
