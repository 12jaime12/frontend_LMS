import React from 'react'
import Swal from 'sweetalert2'

const useErrorForgotPassword = (res, setForgotOk) => {
    if(res?.status==200){
        Swal.fire({
            icon: "success",
            title: "Nueva contraseña enviada a tu correo",
            text: "Por favor, revisa el email",
            showConfirmButton: true,
                
        })
    setForgotOk(()=>true)
    }
    if(res?.status==200){
        Swal.fire({
            icon: "error",
            title: "Algo ha salido mal",
            text: "Prueba otra vez",
            timer:2000,
                
        })
    }
}

export default useErrorForgotPassword