import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import {
  createComentario,
  getAllComentarios,
} from "../../service/API_proyect/comentario.service";
import "./CreateComment.css";
import Button from "../ui/Button";
import Swal from "sweetalert2";
import ReactTimeAgo from "react-time-ago";

const CreateComment = ({ variable, id, comments }) => {
  const [res, setRes] = useState();
  const [send, setSend] = useState(false);
  const { user } = useAuth();
  const refComent = useRef();
  const comentario = refComent?.current?.value;

  const createComment = async (dataComment) => {
    const customData = {
      content: dataComment,
      variable: variable,
      id: id,
    };
    console.log("data comentario------->", customData);
    setRes(await createComentario(customData));
  };

  useEffect(() => {
    console.log("all comments", comments);
  }, [comments]);

  useEffect(() => {
    console.log(res);
  }, [res]);
  return (
    <>
      <div className="divCreateComentario">
        <input type="text" ref={refComent} className="inputComentario" />

        <Button
          type="text"
          text="Crear comentario"
          variant="contained"
          color=""
          action={() => createComment(refComent.current.value)}
        />
      </div>
      <div className="divAllComentarios">
        {comments?.data?.map((comentario) => {
          let nombre = "";
          let apellido = "";
          console.log(comentario.Creador);
          for (let clave in comentario.Creador) {
            if (clave == "name") {
              nombre = comentario.Creador[clave];
            } else if (clave == "apellido") {
              apellido = comentario.Creador[clave];
            }
          }
          console.log("nombre", nombre);
          console.log("apellido", apellido);
          return (
            <section key={comentario._id} className="comentarioInfo">
              <h4>
                <strong>
                  {nombre.toUpperCase()} {apellido.toUpperCase()}
                </strong>{" "}
                |{" "}
                <ReactTimeAgo
                  date={Date.parse(comentario?.createdAt)}
                  locale="es-ES"
                />
              </h4>
              <h5>{comentario?.content}</h5>
              <p></p>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default CreateComment;
