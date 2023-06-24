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

    if(res?.response?.data?.includes("combustible")){
        Swal.fire({
            icon: "error",
            title: `❌ Combustible invalido ❌`,
            text: "Prueba a introducir uno de los siguientes -> 'gasolina, diesel, electrico, hibrido'",
            showConfirmButton: true,
            
        })
      }
    }


export default useCreateCoche