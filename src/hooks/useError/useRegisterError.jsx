import React from 'react'

const useRegisterError = (res, setRegisterOk) => {
    if(res?.status==200){
        console.log("RESSS", res?.data?.user)
        localStorage.setItem("data", JSON.stringify(res?.data?.user))
        setRegisterOk(()=>true)
    }
}

export default useRegisterError