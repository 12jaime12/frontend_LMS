import { Navigate, useNavigate } from "react-router"
import "./ForgotPassword.css"
import React, { useEffect, useState } from 'react'
import { forgotPassword } from "../../service/API_proyect/user.service"
import { useAuth } from "../../contexts/authContext"
import { useForm } from "react-hook-form"
import Button from "../../components/ui/Button";
import { H1C } from "../../components/ui";
import {LayoutFlex, LayoutForm} from "../../components/Layout"

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
    <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
    <H1C text="Cambio de contraseña" width="extralargo"/>
    <LayoutForm direction="column" gap="1rem"  width="500px" heigth="300px" padding = "1rem">
    <p className="bottom-text">
            <small>Escribe el email donde quieres recibir el cambio de contraseña.</small>
          </p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="email-space">
          <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
            <input
              className="input-forgot"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
          </div>
          <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
          <Button type="submit" text="Cambiar contraseña" variant="contained" color="white"/>
          </LayoutFlex>
        </form>
        </LayoutForm>
      
    
    </LayoutFlex>
    
    </>
  )
}

export default ForgotPassword