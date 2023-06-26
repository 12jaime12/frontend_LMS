import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../contexts/authContext'
import { changePassword } from '../../service/API_proyect/user.service'
import "./ChangePassword.css"
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import useChangePasswordError from '../../hooks/useError/useChangePasswordError'
import { H1C } from "../../components/ui";
import {LayoutFlex, LayoutForm, LayoutInline} from "../../components/Layout"
import Button from "../../components/ui/Button";
import { useNavigate } from 'react-router'


const ChangePassword = () => {
    const {user, allUser} = useAuth()
    const {register, handleSubmit} = useForm()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [changeOk, setChangeOk] = useState(false)
    const navigate=useNavigate()

    const formSubmit = async (formData) => {
        console.log("user",user)
        console.log("all",allUser)
        const {password, newPassword, confirmationPassword} = formData
        console.log(newPassword, confirmationPassword)
        const customData={
            password,
            newPassword
        }
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
                    setRes(await changePassword(customData))
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
        useChangePasswordError(res, setChangeOk)
    },[res])
    changeOk && navigate("/profile")
  return (
    <div className="ChangePass">
    <LayoutInline gap="0.5rem" padding="1rem" flexMedia="column">
    <H1C text="Cambiar contraseña" width="largo"/>
    <LayoutFlex direction="column" gap="0.5rem" padding="2rem">
    <LayoutForm direction="column" gap="1rem" color="#f2f2f2" width="500px" heigth="300px" padding = "1rem">
        <form className='form-register' onSubmit={handleSubmit(formSubmit)}> 
            <div className="password-space">
                <label htmlFor="custom-input" className="custom-placeholder">
                <p>Antigua contraseña:</p>
                <input
                    className="input-change"
                    type="password"
                    id="oldpassword"
                    name="password"
                    autoComplete="false"
                    {...register("password", { required: true })}
                /></label>
                <label htmlFor="custom-input" className="custom-placeholder">
                <p>Nueva contraseña:</p>
                <input
                    className="input-change"
                    type="password"
                    id="newpassword"
                    name="password"
                    autoComplete="false"
                    {...register("newPassword", { required: true })}
                /></label>
                <label htmlFor="custom-input" className="custom-placeholder">
                <p>Confirma contraseña:</p>
                <input
                    className="input-change"
                    type="password"
                    id="confirmpassword"
                    name="password"
                    autoComplete="false"
                    {...register("confirmationPassword", { required: true })}
                /></label>
            </div>
            <LayoutFlex direction="column" gap="0.5rem" color="f2f2f2"padding="1rem">
            <Button type="submit" text="Cambiar" variant="contained" color="white"/>
            </LayoutFlex>
            
        </form>
    </LayoutForm>
    </LayoutFlex>
    </LayoutInline>
 
    </div>
   
  )
}

export default ChangePassword