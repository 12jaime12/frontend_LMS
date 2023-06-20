import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { checkCode, resendCode } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import useCodeError from "../../hooks/useError/useCodeError";
import useAutologin from "../../hooks/useAutologin";
import Button from "../../components/ui/Button";
import { H1C } from "../../components/ui";
import {LayoutFlex, LayoutForm, LayoutInline} from "../../components/Layout"
import "./CheckCode.css"

const CheckCode = () => {
  const userLocal = localStorage.getItem("data")
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [codeOk, setCodeOk] = useState(false)
    const [deleteUser, setDeleteUser] = useState(false)
    const {allUser,user,userlogin} = useAuth()
    //CREAMOS LA FUNCION QUE RECOGE LA INFORMACION DE LOS INPUTS DEL FORMULARIO Y LLAMAMOS AL SERVICIO DEL BACKEND
    const formSubmit = async (formData) => {
      console.log(formData)
      console.log("alluser", allUser)
      console.log("user",user)
      console.log(formData.confirmationCode)
      //Si no hay ningun usuario guardado en localStorage nos traemos la informacion del user del contexto global (allUser)
      if(userLocal==null){
        const customFormData = ({
          confirmationCode:parseInt(formData.confirmationCode),
          email:allUser.email
        })
        //Seteamos al respuesta con la llamada al servicio, y mediante setSend bloqueamos el botón de enviar
        setSend(true)
        setRes(await checkCode(customFormData))
        setSend(false)
      }else{
        //Si hay un usuario en localStorage esa informacion es de tipo string, asique hay que hacer JSON.parse() para convertirlo
        //en un objeto y asi poder acceder a la clave email
        const parseUser = JSON.parse(userLocal)
        const customFormData=({
          confirmationCode:parseInt(formData.confirmationCode),
          email:parseUser.email
        })
        //Seteamos al respuesta con la llamada al servicio, y mediante setSend bloqueamos el botón de enviar
        setSend(true)
        setRes(await checkCode(customFormData))
        setSend(false)
      }
    }

    const handleResend = async ()=>{
      const userLocal=localStorage.getItem("user")
      if(userLocal==null){
        const customFormData = ({
          email:allUser.email
        })
        setSend(true)
        setRes(await resendCode(customFormData))
        setSend(false)
      }else{
        const parseUser = JSON.parse(userLocal)
        const customFormData=({
          email:parseUser.email
        })
        setSend(true)
        setRes(await resendCode(customFormData))
        setSend(false)
      }
    }

  useEffect(()=>{
    console.log(res)
    useCodeError(res, setCodeOk, setDeleteUser)
    
  },[res])

  if(deleteUser){
    return <Navigate to="/register"/>
  }
  if(codeOk){
    console.log("codeOK", allUser)
    useAutologin(allUser,userlogin) 
    //return <Navigate to="/dashboard"/>
  }
  return (
    <>
    <LayoutInline gap="0.5rem" padding="1rem">
        <H1C text="Verificación de código" width="extralargo"/>
        <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
        <LayoutForm direction="column" gap="1rem"  width="500px" heigth="300px" padding = "1rem">
        <p>Escribe el código que has recibido en tu correo electrónico.</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="codigoregistro-space">
            <label htmlFor="custom-input" className="custom-placeholder">
                Código de registro
                </label>
                <input
                  className="input-checkcode"
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="false"
                  {...register("confirmationCode", { required: false })}
                />
            </div>
            <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
            <Button type="submit" text="Enviar" variant="contained" color="white"/>
            <div className="">
            {/* <Button
              text="Reenvir código"
              action={() => handleResend}
              variant="contained"
              color="white"
            /> */}
              <button
                id="btnResend"
                className="btn"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
                onClick={() => handleResend()}
              >
                Reenviar código
              </button> 
            </div>
            </LayoutFlex>
            <p className="aviso">
              <small>
                Si el código introducido no es correcto, su usuario será
                eliminado de la base de datos y tendrá que registrarse de nuevo.
              </small>
            </p>
          </form>
        </LayoutForm>
        </LayoutFlex>
    </LayoutInline>
    </>
  );
};

export default CheckCode;
