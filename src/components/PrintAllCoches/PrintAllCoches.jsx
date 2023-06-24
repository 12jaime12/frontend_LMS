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
  const [coches, setCoches] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const [res, setRes] = useState(false);
  const [userLike, setUserLike] = useState();

  const [initRes, setInitRes] = useState(null);
  const [send, setSend] = useState(false);

  const getCochesOcasion = async () => {
    console.log("user coches ocasion", user);
    setSend(true);
    setInitRes(await getAllCochesOcasion());
    setSend(false);
  };

  useEffect(() => {
    getCochesOcasion();
  }, []);

  useEffect(() => {
    if (initRes?.status == 200) setCoches(initRes.data);
  }, [initRes]);

  useEffect(() => {
    console.log(coches);
  }, [coches]);

  useEffect(() => {
    getCochesOcasion()
  }, [res]);

  return (
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
  );
};

export default PrintAllCoches;
