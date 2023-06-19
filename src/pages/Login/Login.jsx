import "./Login.css";

import React from "react";

const Login = () => {
  return (
    <>
      <div className="form-container">
        <h1>Acceso</h1>
        <p>Bienvenidos a Legendary Motorsport</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="email-container form-group">
            <input
              className="input-login"
              type="email"
              id="name"
              name="name"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
          </div>
          <div className="password-container form-group">
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

          <div className="btn-container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Acceso
            </button>
          </div>
          <p className="buttom-text">
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
      <div className="footer-form">
        <p className="parrafoLogin">
          ¿Aún no estás registrado?
          <Link to="/register"> Regístrate aquí</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
