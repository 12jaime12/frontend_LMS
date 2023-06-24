import React from 'react'
import { useAuth } from '../../contexts/authContext'
import Swal from "sweetalert2";

const useLoginError = (res, setLoginOk, userlogin) => {
  
  if(res?.status==200){
    console.log("reslogin",res)
    setLoginOk(()=>true)
    const dataCustom = {
        user:res.data.user.name,
        email:res.data.user.email,
        check:res.data.user.check,
        token:res.data.token,
        rol:res.data.user.rol,
        id:res.data.user._id,
        coches: res.data.user.coche_cliente
    }
    const dataString = JSON.stringify(dataCustom)
    userlogin(dataString)
    Swal.fire({
      icon: "success",
      title: "🏎️💨 ¡¡¡ Bienvenido !!! 🏎️💨",
      text: "Disfruta tu experiencia en Legendary MotorSport ",
      showConfirmButton: false,
      timer: 3000,
    })
  }
  
  if(res?.response?.data.includes("usuario no existe")){
    Swal.fire({
      icon: "error",
      title: "❌ Usuario INVALIDO ❌",
      text: "Por favor, revisa tus datos de acceso",
      showConfirmButton: false,
      timer: 4000,
    })
  }

  if(res?.response?.data.includes("Contraseña")){
    Swal.fire({
      icon: "error",
      title: "❌ La contraseña introducida no es correcta ❌",
      text: "Por favor, revisa tus datos de acceso",
      showConfirmButton: false,
      timer: 4000,
    })
  }
}

export default useLoginError