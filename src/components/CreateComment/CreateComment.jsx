import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import {
  createComentario,
  deleteComent,
  getAllComentarios,
  getByCatalogo,
  getByCoche,
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
  const [newComments, setNewComments] = useState();
  const [arrayComments, setArrayComments] = useState();
  //const [inputValue, setInpuValue] = useState("");
  const navigate = useNavigate();

  const createComment = async (dataComment) => {
    const customData = {
      content: dataComment,
      variable: variable,
      id: id,
    };
    console.log("data comentario------->", customData);
    setRes(await createComentario(customData));
    if (variable === "coche") {
      setNewComments(await getByCoche(id));
      // setInpuValue("");
      // const input = document.querySelector(".inputComentario");
      // input.innerHTML = inputValue;
    } else {
      setNewComments(await getByCatalogo(id));
      // setInpuValue("");
      // const input = document.querySelector(".inputComentario");
      // input.innerHTML = inputValue;
    }
  };

  // const handleChange = (e) => {
  //   setInpuValue(e.target.value);
  // };

  const deleteComentario = async (idComent) => {
    if (variable === "coche") {
      await deleteComent(idComent);
      setNewComments(await getByCoche(id));
    } else {
      await deleteComent(idComent);
      setNewComments(await getByCatalogo(id));
    }
  };
  useEffect(() => {
    console.log("all comments", comments?.data);
    setArrayComments(comments?.data?.reverse());
  }, [comments]);

  useEffect(() => {
    console.log(res);
  }, [res]);

  useEffect(() => {
    const commentsReverse = newComments?.data?.reverse();
    setArrayComments(commentsReverse);
  }, [newComments]);

  useEffect(() => {
    console.log(arrayComments);
  }, [arrayComments]);

  return (
    <>
      <div className="divAllComentarios">
        {arrayComments?.map((comentario) => {
          let nombre = "";
          let apellido = "";
          //console.log(comentario.Creador);
          for (let clave in comentario.Creador) {
            if (clave == "name") {
              nombre = comentario.Creador[clave];
            } else if (clave == "apellido") {
              apellido = comentario.Creador[clave];
            }
          }

          return (
            <section key={comentario._id} className="comentarioInfo">
              <div className="comentariosDiv">
                <h7>
                  <strong>
                    {nombre.toUpperCase()} {apellido.toUpperCase()}
                  </strong>{" "}
                  |{" "}
                  <ReactTimeAgo
                    date={Date.parse(comentario?.createdAt)}
                    locale="es-ES"
                  />{" "}
                  |{" "}
                </h7>
                {nombre === user.user && (
                  <img
                    src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687680460/trash_hc1jlx.svg"
                    alt="delete icon"
                    onClick={() => deleteComentario(comentario._id)}
                  />
                )}
              </div>
              <h5>{comentario?.content}</h5>
            </section>
          );
        })}
      </div>
      <div className="divCreateComentario">
        <input
          type="text"
          ref={refComent}
          className="inputComentario"
          //onChange={(e) => handleChange(e)}
        />

        <Button
          type="text"
          text="Crear comentario"
          variant="contained"
          color=""
          action={
            user == null
              ? () => navigate("/login")
              : () => createComment(refComent.current.value)
          }
        />
      </div>
    </>
  );
};

export default CreateComment;
