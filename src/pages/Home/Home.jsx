import { useNavigate } from "react-router";
import "./Home.css";

import React from "react";
import { useAuth } from "../../contexts/authContext";

import { H1C, H2C, PC } from "../../components/ui";

import Button from "../../components/ui/Button";
import { LayoutHome, LayoutInline } from "../../components/Layout";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    
      <div className="homeContainer">
        
        {user !== null ? (
          <>
          <LayoutHome width="100vw" min-heigth="100vh" padding ="50vh" margin="0">
            <h2 className="titleHome">Bienvenido {user.user}</h2>
            <Button
              text="Entrar"
              action={() => navigate("/dashboard")}
              variant="contained"
              color="white"
            />
            </LayoutHome>
          </>
        ) : (
          <>

          <LayoutInline direction="row" gap="0" color="white" padding = "10vh" margin="0">
            <H1C text="Por favor, regístrese para poder acceder a la página" width="largo"></H1C>
            <Button
              text="Inicia sesión"
              action={() => navigate("/login")}
              variant="contained"
              color="white"
            />
            </LayoutInline>
          </>
        )}
        
      </div>
      
    </>
  );
};

export default Home;
