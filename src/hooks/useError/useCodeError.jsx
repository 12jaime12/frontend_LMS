import React from 'react'
import Swal from "sweetalert2";

const useCodeError = (res, setCodeOk, setDeleteUser) => {
    //RES 200 Y ACTUALIZADO -> 
      if(res?.data?.testCheck === true){
        Swal.fire({
            icon: "success",
          title: "✅ Codigo correcto ✅ Cuenta verificada",
          text: "Disfruta de tu experiencia en Legendary MotorSport",
          showConfirmButton: false,
          timer: 3000,
        })
        setCodeOk(()=>true)
      }

      if (res?.data?.delete?.includes("usuario borrado")) {
        setDeleteUser(() => true);
        Swal.fire({
          icon: "error",
          title: "❌ Codigo incorrecto ❌ Registrate de nuevo ",
          text: "Por motivos de seguridad el usuario ha sido borrado.",
          showConfirmButton: true,
        });
      }

      if (res?.response?.status == 404){
            Swal.fire({
            icon: "error",
            title: "❌ Algo ha ido mal ❌",
            text: "El usuario no ha sido borrado. Introduce el codigo de nuevo",
            showConfirmButton: true,
            });
        }
}

export default useCodeError