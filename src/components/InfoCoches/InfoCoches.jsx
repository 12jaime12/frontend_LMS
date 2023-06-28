import React, { useEffect, useState } from "react";
import "./InfoCoche.css";
import { useNavigate, useParams } from "react-router";
import { getByIdCocheBase } from "../../service/API_proyect/cocheBase.service";
import CarruselFotos from "../CarruselFotos/CarruselFotos";
import CreateComment from "../CreateComment/CreateComment";
import {
  getAllComentarios,
  getByCatalogo,
  getByCoche,
} from "../../service/API_proyect/comentario.service";
import Button from "../ui/Button";
import { useAuth } from "../../contexts/authContext";
const InfoCoches = () => {
  const { id, marca } = useParams();
  const [cocheBase, setCocheBase] = useState();
  const [comments, setComments] = useState();
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    (async () => {
      setCocheBase(await getByIdCocheBase(id));
      setComments(await getByCatalogo(id));
    })();
  }, []);

  useEffect(() => {
    console.log(cocheBase?.data);
  }, [cocheBase]);
  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return (
    <div className="infoCoche">
      <img
        src={cocheBase?.data?.info?.image[0]}
        alt={cocheBase?.data?.modelo}
        className="imagenReal"
      />

      <h2 className="">{cocheBase?.data?.info?.titulo}</h2>
      <p>{cocheBase?.data?.info?.informacion}</p>
      <div className="divComentarios">
        <CreateComment
          variable={"catalogo"}
          id={cocheBase?.data?._id}
          comments={comments}
        />
      </div>
      {cocheBase !== undefined && (
        <CarruselFotos data={cocheBase?.data?.image} />
      )}

      <Button
        text="Personalizalo"
        action={
          user
            ? () => navigate(`/catalogo/${marca}/personalizar/${id}`)
            : () => navigate("/login")
        }
        variant="contained"
        color="white"
      />
    </div>
  );
};

export default InfoCoches;
