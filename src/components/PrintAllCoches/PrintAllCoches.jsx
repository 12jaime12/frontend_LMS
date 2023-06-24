import React, { useEffect, useState } from "react";
import "./PrintAllCoches.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router";
import deleteCocheUser from "../../util/deleteCocheUser";
import Button from "../ui/Button";
import { addLike } from "../../service/API_proyect/user.service";
import ToggleButton from "../Like/Like";
import { getAllCochesOcasion } from "../../service/API_proyect/coche.service";

const PrintAllCoches = () => {
  const [coches, setCoches] = useState();
  //const [cocheCarga, setCocheCarga] = useState();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [res, setRes] = useState(false);
  const [userLike, setUserLike] = useState();
  const [render, setRender] = useState(false);

  const [initRes, setInitRes] = useState(null);
  const [send, setSend] = useState(false);

  const getCochesOcasion = async () => {
    console.log("user coches ocasion", user);
    setSend(true);
    setInitRes(await getAllCochesOcasion());
    setSend(false);
  };
  // const cochesCarga = coches;
  // console.log(cochesCarga);

  // const buscarMarca = (e) => {
  //   console.log(e.target.value);
  //   const arrayAux = [];
  //   cocheCarga.forEach((element) => {
  //     if (element.marca.includes(e.target.value)) {
  //       arrayAux.push(element);
  //     }
  //   });
  //   setCoches(arrayAux);
  // };

  useEffect(() => {
    getCochesOcasion();
  }, []);

  // useEffect(() => {
  //   setCocheCarga(coches);
  // }, []);

  useEffect(() => {
    if (initRes?.status == 200) setCoches(initRes.data);
  }, [initRes]);

  // useEffect(() => {
  //   console.log(cocheCarga);
  // }, [cocheCarga]);

  useEffect(() => {
    getCochesOcasion();
  }, [res]);

  return (
    <div>
      <div>
        <input type="text" onChange={(e) => buscarMarca(e)}></input>
      </div>
      <div className="divAllCoches">
        {coches?.map((elem) => (
          <div key={elem._id}>
            <figure
              className="figureCoche"
              onClick={() => navigate(`/compraryvender/coche/${elem._id}`)}
            >
              <div className="divFigureCoche">
                <img src={elem.image[0]} alt={elem.modelo} />
                <div className="divCocheInfo">
                  <p>
                    {elem.marca} {elem.modelo}
                  </p>
                  <p>
                    Precio: <strong>{elem.precio} €</strong>
                  </p>
                </div>
              </div>
            </figure>
            <button
              onClick={() =>
                user == null
                  ? navigate("/login")
                  : navigate(`/compraryvender/coche/${elem._id}`)
              }
            >
              Comentar
            </button>
            <div>
              <ToggleButton car={elem} setAllElementByPather={setCoches} />
            </div>
            {user?.coches?.includes(elem._id) && (
              <button onClick={() => deleteCocheUser(elem._id, setRes)}>
                Borrar
              </button>
            )}
            {/* <Button)
      type="button"
        text="Borrar"
        action={deleteCocheUser(elem._id, setRes)}
        variant="contained"
        color="white"
      /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintAllCoches;
