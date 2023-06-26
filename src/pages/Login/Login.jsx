import { useForm } from "react-hook-form";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import { loginUser } from "../../service/API_proyect/user.service";
import { Link } from "react-router-dom";
import useLoginError from "../../hooks/useError/useLoginError";
import { H1C, PC } from "../../components/ui";
import { H3C } from "../../components/ui";
import {LayoutFlex, LayoutForm, LayoutInline} from "../../components/Layout"
import Button from "../../components/ui/Button";





const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [send, setSend] = useState(false);
  const [res, setRes] = useState();
  const [loginOk, setLoginOk] = useState();
  const { user, userlogin } = useAuth();

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
  };

  useEffect(() => {
    console.log(res);
    useLoginError(res, setLoginOk, userlogin)
  }, [res]);

  if (loginOk) {
    if (res?.data?.user?.check == true) {
      console.log("user",user)
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/checkCode" />;
    }
  }
  return (
    <>
    <div className="Login">
    <LayoutInline gap="3rem" padding="1rem">
      <LayoutFlex direction="column" gap="0.5rem" padding="1rem" >
      <H1C text="Inicia sesión" width="largo"/>
          <LayoutForm direction="column" gap="2rem" color="#f2f2f2" width="500px" heigth="300px" padding = "1rem" margin="0">
          
          <H3C text="Bienvenid@ a Legendary Motorsport" width="extralargo"/>
         
          <form onSubmit={handleSubmit(formSubmit)}>
         
            <div className="email-space">
            <label htmlFor="custom-input" className="custom-placeholder">
                Email
              </label>
              <input
                className="input-login"
                type="email"
                id="name"
                name="name"
                autoComplete="false"
                {...register("email", { required: true })}
              />
              
            </div>
              
            <div className="password-space">
              
              <label htmlFor="custom-input" className="custom-placeholder">
                Contraseña
              </label>
              <input
                className="input-login"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              
              />
              
            </div>
            <LayoutFlex direction="column" gap="2rem" padding="2rem">
           <Button type="submit" text="Iniciar sesión" variant="contained" color="white"/>
           <Link to="/forgotpassword" className="anchorCustomSmall">¿Has olvidado la contraseña?</Link>
            </LayoutFlex>
          </form>
          </LayoutForm>
        </LayoutFlex>

        <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
      <H1C text="¿Aún no tienes cuenta?" width="extralargo"/>
      <LayoutForm direction="column" gap="0.5rem"  width="500px" heigth="300px" padding = "0.5rem">
          <H3C text="Las ventajas de tener una cuenta:" width="extralargo" align="left"/>
          <ul>
          <li className="listaLogin">
          <PC text="Accede a la personalización de nuestros coches de catálogo." align="left" width="extralargo"/>
          </li>
          <li className="listaLogin">
          <PC text="Vende tus vehículos o compra coches a otros particulares." align="left" width="extralargo"/>
          </li>
          <li className="listaLogin">
          <PC text="Revisa tu vehículo en el taller más cercano." align="left" width="extralargo"/>
          </li>
          <li className="listaLogin">
          <PC text="Mantente al día con la información más reciente sobre tus vehículos favoritos e interactúa con otros usuarios." align="left" width="extralargo"/>
          </li>
          </ul>
          <Button
              text="Registrarse"
              action={() => navigate("/register")}
              variant="contained"
              color="white"
            />
          
          
          </LayoutForm>
        
        </LayoutFlex>
        </LayoutInline>
        </div>
    </>
  );
};

export default Login;
