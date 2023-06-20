import { useNavigate } from "react-router";
import "./Home.css";

import React from "react";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/ui/Button";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fondo">
      <div className="homeContainer">
        {user !== null ? (
          <><h2 className="titleHome">Bienvenido {user.user}</h2>
          <Button onClick={()=> navigate("/dashboard")} type="submit" text="Acceder" variant="contained" color="white"/></>
        ) : (
          <>
            <h1 className="titleHome">
              Por favor, regístrese para poder acceder a la página
            </h1>
            <button className="btn" onClick={() => navigate("/login")}>
              IR A LOGIN
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
