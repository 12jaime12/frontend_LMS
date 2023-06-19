import { Navigate, useNavigate } from "react-router"
import "./ForgotPassword.css"

import React, { useEffect, useState } from 'react'
import { forgotPassword } from "../../service/API_proyect/user.service"
import { useAuth } from "../../contexts/authContext"
import { useForm } from "react-hook-form"

const ForgotPassword = () => {
  const navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [send, setSend] = useState(false)
  const [res, setRes] = useState()
  const [forgotOk, setForgotOk]=useState()

  const formSubmit = async (formData) => {
    setSend(true)
    setRes(await forgotPassword(formData))
    setSend(false)
  }

  useEffect(()=>{
    console.log(res)
  },[res])

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