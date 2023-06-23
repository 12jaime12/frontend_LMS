import React from 'react'
import Swal from 'sweetalert2'

const useCreateCoche = (res, setResOk) => {
    if(res?.status==200){
        Swal.fire({
            icon: "success",
            title: `El coche ${res.data.marca} ${res.data.modelo} ha sido registrado correctamente`,
            showConfirmButton: true,
            
        })
        setResOk(()=>true)
      }
}

export default useCreateCoche