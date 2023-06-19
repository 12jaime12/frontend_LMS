import "./ForgotPassword.css"

import React from 'react'

const ForgotPassword = () => {
  return (
    <>
    <div className="fondo">
    <div className="form-wrap">
        <h1>Cambio de contraseña</h1>
  
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Cambiar contraseña
            </button>
          </div>

          <p className="bottom-text">
            <small>Escribe el email donde quieres recibir el cambio de contraseña.</small>
          </p>
        </form>
      </div>
    </div>
    </>
  )
}

export default ForgotPassword