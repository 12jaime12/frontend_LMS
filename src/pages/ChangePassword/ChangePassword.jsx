import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/authContext'
import { changePassword } from '../../service/API_proyect/user.service'

import Swal from "sweetalert2/dist/sweetalert2.all.js";
import useChangePasswordError from '../../hooks/useError/useChangePasswordError'


const ChangePassword = () => {
    const {user, allUser} = useAuth()
    const {register, handleSubmit} = useForm()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [changeOk, setChangeOk] = useState(false)


    const formSubmit = async (formData) => {
        console.log("user",user)
        console.log("all",allUser)
        const {password, newPassword, confirmationPassword} = formData
        console.log(newPassword, confirmationPassword)
        if(newPassword==confirmationPassword){
            Swal.fire({
                title: "¿Estas seguro de que quieres cambiar la contraseña?",
                icon:"warning",
                showCancelButton:true,
                confirmButtonColor: "rgb(73, 193, 162)",
                cancelButtonColor: "#d33",
                confirmButtonText: "YES",
            }).then(async(result)=>{
                if(result.isConfirmed){
                    setSend(true)
                    setRes(await changePassword(password, newPassword))
                    setSend(false)
                }
            })
        }else{
            Swal.fire({
                icon: "error",
                title: "La nueva contraseña no coinciden",
                showConfirmButton: false,
                timer: 3500,
            })
        }
    }

    useEffect(()=>{
        console.log(res)
    },[res])
    
  return (
    <div className="divFormulario">
        <button onClick={()=> console.log(user)}>hola</button>
        <h3>CHANGE PASSWORD</h3>
        <form className='form-register' onSubmit={handleSubmit(formSubmit)}> 
            <div className="inputContainer">
                <label className='input-container'><p>Old password:</p>
                <input
                    className="input_user"
                    type="password"
                    id="oldpassword"
                    name="password"
                    autoComplete="false"
                    {...register("password", { required: true })}
                /></label>
                <label className='input-container'><p>New password:</p>
                <input
                    className="input_user"
                    type="password"
                    id="newpassword"
                    name="password"
                    autoComplete="false"
                    {...register("newPassword", { required: true })}
                /></label>
                <label className='input-container'><p>Confirm password:</p>
                <input
                    className="input_user"
                    type="password"
                    id="confirmpassword"
                    name="password"
                    autoComplete="false"
                    {...register("confirmationPassword", { required: true })}
                /></label>
            </div>
            <button className="button" id="button-changePass" type="submit" disabled={send} style={{background: "#49c1a388"}}>CHANGE</button>
        </form>
    </div>
  )
}

export default ChangePassword