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
        rol:res.data.rol,
    }
    const dataString = JSON.stringify(dataCustom)
    userlogin(dataString)
    Swal.fire({
      icon: "success",
      title: "Welcome to Legendary MotorSport",
      text: "Login ok ✅",
      showConfirmButton: false,
      timer: 3000,
    })
  }
}

export default useLoginError