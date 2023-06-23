import React from 'react'
import Swal from 'sweetalert2'
import { getByIdUser } from '../service/API_proyect/user.service'
import { getCocheById } from '../service/API_proyect/coche.service'

const useTallerService = async (res,coche,taller) => {

    
  if(res?.status==200){
    Swal.fire({
        icon: "success",
        title: res.request.responseText,
        showConfirmButton: true,
        
    })
  }
  if(res?.request?.status==404 && res?.request?.response.includes("incluye")){
    Swal.fire({
        icon: "error",
        title: res.request.response,
        showConfirmButton: true,
        
    })
  }
}

export default useTallerService