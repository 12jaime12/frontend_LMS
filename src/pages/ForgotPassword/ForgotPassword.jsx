import { Navigate, useNavigate } from "react-router"
import "./ForgotPassword.css"
import React, { useEffect, useState } from 'react'
import { forgotPassword } from "../../service/API_proyect/user.service"
import { useAuth } from "../../contexts/authContext"
import { useForm } from "react-hook-form"
import Button from "../../components/ui/Button";
import { H1C, PC } from "../../components/ui";
import {LayoutFlex, LayoutForm, LayoutInline} from "../../components/Layout"
import useErrorForgotPassword from "../../hooks/useError/useErrorForgotPassword"


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
    useErrorForgotPassword(res, setForgotOk)
    console.log(res)
  },[res])

  if(forgotOk){
    navigate("/login")
  }
  return (
    <div className="ForgotPassword">
    <LayoutInline gap="0.5rem" padding="1rem" flexMedia="column">
    <LayoutForm  direction="column" gap="1rem" color="white" width="700px" heigth="300px" padding = "1rem">
    <H1C text="Cambio de contraseña" width="extralargo"/>
    <PC text="Escribe el email donde quieres recibir el cambio de contraseña." width="extralargo"/>
    </LayoutForm>
    <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
    <LayoutForm direction="column" gap="1rem" color="#f2f2f2" width="500px" heigth="300px" padding = "1rem">
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
          <Button type="submit" text="Cambiar" variant="contained" color="white"/>
          </LayoutFlex>
        </form>
        </LayoutForm>
      
    
    </LayoutFlex>
    </LayoutInline>
    </div>
  )
}

export default ForgotPassword