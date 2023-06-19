import React from 'react'
import { useAuth } from '../../contexts/authContext'

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
  }
}

export default useLoginError