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
  const [resDelete, setResDelete] = useState();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event?.target?.value);
  };

  const createComment = async (dataComment) => {
    const customData = {
      content: dataComment,
      variable: variable,
      id: id,
    };
    console.log("data comentario------->", customData);
    await createComentario(customData);

    Swal.fire({
      icon: "success",
      title: "Comentario Añadido",
      text: "Disfruta de Legendary Motor Sport! 😜 🏎️💨",
      showConfirmButton: false,
      timer: 1500,
    });

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
  useEffect(() => {
    console.log(res);
  }, [res]);

  const deleteComentario = async (idComent) => {
    Swal.fire({
      title: "¿Seguro que quieres borrar el comentario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(73, 193, 162)",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (variable === "coche") {
          await deleteComent(idComent);
          setNewComments(await getByCoche(id));
        } else {
          await deleteComent(idComent);
          setNewComments(await getByCatalogo(id));
        }

        Swal.fire({
          icon: "success",
          title: "Comentario borrado🏎️💨",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
      {arrayComments?.length === 0 ? (
        <h3 className="sinComents">Sé el primero en comentar🏎️💨</h3>
      ) : (
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
                  {nombre === user?.user && (
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
      )}
      <div className="divCreateComentario">
        <input
          type="text"
          ref={refComent}
          className="inputComentario"
          value={inputValue}
          onChange={handleChange}
          placeholder="Añade tu comentario"
        />

        <Button
          type="text"
          text="Crear comentario"
          variant="contained"
          color=""
          action={
            user == null
              ? () => navigate("/login")
              : () => {
                  createComment(refComent.current.value);
                  handleClick();
                }
          }
        />
      </div>
    </>
  );
};

export default CreateComment;
