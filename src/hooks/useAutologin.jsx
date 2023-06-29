import React from 'react'
import { autologinUser } from '../service/API_proyect/user.service'
import { Navigate, useNavigate } from "react-router";
const useAutologin = async(allUser, userlogin) => {
    try {
        console.log("autologin ALLUSER",allUser)
        
        const customData = {
            email:allUser.data.user.email,
            password:allUser.data.user.password,
        }
        console.log("autologin allUser", allUser)
        console.log("entro autologin", customData)
        const setData = await autologinUser(customData)
        console.log("setData autologin", setData)
        if(setData.status==200){
            const newDataCustom ={
                user:setData.data.user.name,
                email:setData.data.user.email,
                check:setData.data.user.check,
                token:setData.data.token,
                rol:setData.data.user.rol,
                id:setData.data.user._id,
                coches:setData.data.user.coche_cliente,
            }
            console.log(newDataCustom)
            const dataString = JSON.stringify(newDataCustom)
            userlogin(dataString)
            return <Navigate to="/dashboard"/>
        }else{
            return <Navigate to="/login"/>
        }
    } catch (error) {
        console.log("error autologin->", error)
    }
}

export default useAutologin