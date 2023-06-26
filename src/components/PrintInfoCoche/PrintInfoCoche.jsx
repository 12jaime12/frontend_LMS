import React, { useEffect, useState } from "react";
import "./PrintInfoCoche.css";
import Button from "../ui/Button";
import { H3C } from "../ui/H3.element";
import { PC } from "../ui/P.element";
import { LayoutFlex } from "../../components/Layout";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../contexts/authContext";
import CreateComment from "../CreateComment/CreateComment";
import Swal from "sweetalert2";
import {
  getAllComentarios,
  getByCoche,
} from "../../service/API_proyect/comentario.service";

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
  console.log(info?.modelo);

  useEffect(() => {
    getAllComments();
    console.log("all comments", comments);
  }, []);

  return (
    <>
      <LayoutFlex direction="column" gap="2rem" padding="2rem">
        <img
          className="imgPrintCoche"
          src={info?.image[0]}
          alt={info?.modelo}
        />
        <LayoutFlex direction="column" gap="0.5rem" padding="0">
          <PC text={`Marca: ${info?.marca}`} width="medio" />
          <PC text={`Modelo: ${info?.modelo}`} width="extralargo" />
          <PC text={`Año: ${info?.year}`} width="medio" />
          <PC text={`Combustible: ${info?.combustible}`} width="extralargo" />
          <PC text={`Precio: ${info?.precio} €`} width="medio" />
        </LayoutFlex>

        <Button
          type="text"
          text="Crear comentario"
          variant="contained"
          color=""
          action={() =>
            user
              ? setComment(true)
              : Swal.fire({
                  icon: "error",
                  title: "debes estar registrado para poder comentar",
                })
          }
        />
      </LayoutFlex>

      {comment != false && (
        <div className="divComentarios">
          <CreateComment
            variable={"coche"}
            id={info?._id}
            comments={comments}
          />
        </div>
      )}
    </>
  );
};

export default PrintInfoCoche;
