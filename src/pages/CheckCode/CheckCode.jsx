import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { checkCode, resendCode } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import useCodeError from "../../hooks/useError/useCodeError";

const CheckCode = () => {
  const userLocal = localStorage.getItem("data")
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [codeOk, setCodeOk] = useState(false)
    const [deleteUser, setDeleteUser] = useState(false)
    const {allUser,user} = useAuth()
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
    return <Navigate to="/login"/>
  }
  return (
    <>
      <div className="">
        <div className="">
          <h1>Verificación de código</h1>
          <p>Escribe el código que has recibido a tu correo electrónico</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="">
            <label htmlFor="custom-input" className="">
                Código de registro
                <input
                  className=""
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="false"
                  {...register("confirmationCode", { required: false })}
                />
              </label>
            </div>
            <div className="">
              <button
                id="btnCheck"
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
              >
                ENVIAR
              </button>
            </div>
            <div className="">
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
            <p className="bottom-text">
              <small>
                Si el código introducido no es correcto, su usuario será
                eliminado de la base de datos y tendrá que registrarse de nuevo.{" "}
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckCode;
