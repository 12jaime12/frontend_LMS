import { useForm } from "react-hook-form";
import "./Login.css";

import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import { loginUser } from "../../service/API_proyect/user.service";
import { Link } from "react-router-dom";

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
    //userlogin(res)
  }, [res]);

  if (loginOk) {
    if (res?.data?.user?.check == true) {
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/checkCode" />;
    }
  }
  return (
    <>
      <div className="generalContainer">
        <div className="loginContainer">
          <h1>Acceso</h1>
          <p>Bienvenid@ a Legendary Motorsport</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="">
              <input
                className=""
                type="email"
                id="name"
                name="name"
                autoComplete="false"
                {...register("email", { required: true })}
              />
              <label htmlFor="custom-input" className="">
                Email
              </label>
            </div>
            <div className="">
              <input
                className="input-login"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                Contraseña
              </label>
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
        <div className="">
          <p className="">
            ¿Aún no estás registrado?
            <Link to="/register"> Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
