import { useNavigate } from "react-router";
import "./Home.css";

import React from "react";
import { useAuth } from "../../contexts/authContext";

import { H1C } from "../../components/ui";
import Button from "../../components/ui/Button";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="fondo">
      <div className="homeContainer">
        {user !== null ? (
          <><h2 className="titleHome">Bienvenido {user.user}</h2>
            <Button onClick={() => navigate("/dashboard")} text="Entrar" variant="contained" color="white"/>
          </>
        ) : (
          <>
            <H1C className="titleHome">
              Por favor, regístrese para poder acceder a la página
            </H1C>
            <Button onClick={() => navigate("/login")} text="ir a login" variant="contained" color="white"/>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
