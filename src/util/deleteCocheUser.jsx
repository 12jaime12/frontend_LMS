import React from 'react'
import { deleteCocheServicio } from '../service/API_proyect/coche.service'
import Swal from 'sweetalert2'

const deleteCocheUser = async (id, setRes) => {
    console.log("entro delete")
    
    console.log("cocheBorrado")
    Swal.fire({
        title: "¿Seguro que quieres eliminar el coche?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "YES",
    }).then(async (result) => {
        if (result.isConfirmed) {
        const res = await deleteCocheServicio(id)
        switch (res.status) {
            case 200:
            Swal.fire({
                icon: "success",
                title: "Coche borrado",
                text: "",
                showConfirmButton: false,
                timer: 1500,
            });
            setRes(()=>true)
            break;

            default:
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "Please, try again",
                showConfirmButton: false,
                timer: 1500,
            });

            break;
        }
        }
        })
}

export default deleteCocheUser