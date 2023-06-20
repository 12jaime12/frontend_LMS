import React from 'react'
import Swal from "sweetalert2";

const useCodeError = (res, setCodeOk, setDeleteUser) => {
    //RES 200 Y ACTUALIZADO -> 
      if(res?.data?.testCheck === true){
        Swal.fire({
            icon: "success",
          title: "Ok correct code ✅",
          showConfirmButton: false,
          timer: 3000,
        })
        setCodeOk(()=>true)
      }
      if (res?.data?.delete?.includes("usuario borrado")) {
        setDeleteUser(() => true);
    
        Swal.fire({
          icon: "error",
          title: "No correct Code ❎.",
          text: "Your user is delete. Register again, please.",
          showConfirmButton: false,
          timer: 2500,
        });
      }
      if (res?.response?.status == 404){
            Swal.fire({
            icon: "error",
            title: "Interval server error ❎.",
            text: "No delete user. Try again, please.",
            showConfirmButton: false,
            timer: 1500,
            });
        }
}

export default useCodeError