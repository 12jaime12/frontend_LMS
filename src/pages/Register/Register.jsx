import "./Register.css"

import React, {useEffect, useState} from "react"

const Register = () => {
    return (
        <>
        <div className="form-wrap">
          <h2>Regístrate para acceder a todas las ventajas.</h2>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
              <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("name", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                usuario
              </label>
            </div>
  
            <div className="password_container form-group">
              <input
                className="input_user"
                type="password"
                id="password"
                name="password"
                autoComplete="false"
                {...register("password", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                contraseña
              </label>
            </div>

            <div className="dni_container form-group">
              <input
                className="input_user"
                type="dni"
                id="dni"
                name="dni"
                autoComplete="false"
                {...register("dni", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                dni
              </label>
            </div>
            <div className="telefono_container form-group">
              <input
                className="input_user"
                type="telefono"
                id="telefono"
                name="telefono"
                autoComplete="telefono"
                {...register("telefono", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                telefono
              </label>
              <div className="ciudad_container form-group">
              <input
                className="input_user"
                type="ciudad"
                id="ciudad"
                name="ciudad"
                autoComplete="false"
                {...register("ciudad", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                ciudad
              </label>
            </div>
            </div>
            <div className="email_container form-group">
              <input
                className="input_user"
                type="email"
                id="email"
                name="email"
                autoComplete="false"
                {...register("email", { required: true })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                email
              </label>
  
              <div className="sexo">
                <input
                  type="radio"
                  name="sexo"
                  id="masculino"
                  value="masculino"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="masculino" className="label-radio masculino">
                  Masculino
                </label>
                <input
                  type="radio"
                  name="sexo"
                  id="femenino"
                  value="femenino"
                  {...register("gender", { required: true })}
                />
                <label htmlFor="femenino" className="label-radio femenino">
                  Femenino
                </label>
              </div>
  
              <UploadFile />
            </div>
  
            <div className="btn_container">
              <button
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
              >
                Registrar
              </button>
            </div>
            <p className="bottom-text">
              <small>
                Haciendo click en el botón de Registrar, estás de acuerdo con{" "}
                <Link className="anchorCustom">Términos y Condiciones</Link> y{" "}
                <Link className="anchorCustom">Política de Privacidad</Link>.
              </small>
            </p>
          </form>
        </div>
        <div className="footerForm">
          <p className="parrafoLogin">
            ¿Ya tienes cuenta? <Link to="/login">Accede a tu cuenta aquí.</Link>
          </p>
        </div>
      </>
    )
}