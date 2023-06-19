import { useForm } from "react-hook-form";
import "./Login.css";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import { loginUser } from "../../service/API_proyect/user.service";
import { Link } from "react-router-dom";
import useLoginError from "../../hooks/useError/useLoginError";

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
      <div className="generalContainer">
        <div className="loginContainer">
          <h1>Inicia sesión</h1>
          <p>Bienvenid@ a Legendary Motorsport</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="email-space">
            <label htmlFor="custom-input" className="custom-placeholder">
                Email
              </label>
              <input
                className=""
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

            <div className="">
              <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
              >
                Acceso
              </button>
            </div>
            <p className="pLogin">
              <small>
                ¿No recuerdas tu contraseña?
                <Link to="/forgotpassword" className="anchorCustom">
                  {" "}
                  Cambio de contraseña
                </Link>
              </small>
            </p>
          </form>
        </div>
        </div>
        <div className="">
          <p className="parrafoLogin">
            ¿Aún no estás registrado?
            <Link to="/register"> Regístrate aquí</Link>
          </p>
        </div>
      
    </>
  );
};

export default Login;
