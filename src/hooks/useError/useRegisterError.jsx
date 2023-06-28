import React from 'react'
import Swal from "sweetalert2";

const useRegisterError = (res, setRegisterOk) => {
    //RES 200 -> REGISTRO CORRECTO
    if(res?.status==200){
        console.log("RESSS", res?.data?.user)
        localStorage.setItem("data", JSON.stringify(res))
        setRegisterOk(()=>true)
        Swal.fire({
            icon: "success",
            title: "✅ Registrado correctamente 🏎️💨",
            text: "📧 Comprueba el código que hemos enviado a tu email 📧",
            showConfirmButton: false,
            timer: 3000,
        })
    }
    //RES 409 -> USUARIO REGISTRADO
    if(res?.response?.status==409){
        Swal.fire({
            icon: "error",
            title: "El usuario ya existe",
            text: "Por favor introduce otros datos",
            showConfirmButton: false,
            timer: 3000,
        })
    }
    //RES 404 y 500 -> EMAIL, DNI O MOVIL YA ESTAN EN LA BASE DE DATOS REGISTRADOS O NO HA ESCRITO BIEN LA CONTRASEÑA
    if(res?.response?.status==404){
        Swal.fire({
            icon: "error",
            title: "Invalid DNI",
            text: "Ya existe una cuenta registrada con ese DNI",
            showConfirmButton: false,
            timer: 3000,
        })
    }

    if(res?.response?.data.includes("duplicate key error collection: LegendaryMotorsport.users index: email_1 dup key: { email:")){
        Swal.fire({
            icon: "error",
            title: "Invalid email",
            text: "Ese email ya tiene una cuenta registrada",
            showConfirmButton: false,
            timer: 3000,
          });
    }
    if(res?.response?.data.includes("duplicate key error collection: LegendaryMotorsport.users index: movil_1 dup key: { movil:")){
        Swal.fire({
            icon: "error",
            title: "Invalid movil",
            text: "Ese movil ya tiene una cuenta registrada",
            showConfirmButton: false,
            timer: 3000,
          });
    }
    if(res?.response?.data.includes("dup key: {dni")){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ese DNI ya tiene una cuenta registrada",
            showConfirmButton: false,
            timer: 3000,
          });
    }
    if (res?.response?.data?.includes("validation failed: password"))
    Swal.fire({
      icon: "error",
      title: "Invalid password",
      text: "La contraseña debe tener minimo 8 caracteres -> 1 numero, 1 mayuscula, 1 minuscula y 1 caracter especial",
      showConfirmButton: true,
    });
}

export default useRegisterError