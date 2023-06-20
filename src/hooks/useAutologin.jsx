import React from 'react'
import { autologinUser } from '../service/API_proyect/user.service'
import { Navigate, useNavigate } from "react-router";
const useAutologin = async(allUser, userlogin) => {
    try {
        const {password, email} = allUser
        const customData = {
            email,
            password,
        }
        console.log("autologin allUser", allUser)
        console.log("entro autologin", customData)
        const setData = await autologinUser(customData)
        if(setData.status==200){
            const newDataCustom ={
                token: setData.data.token,
                user: setData.data.user.name,
                email: setData.data.user.email,
                image: setData.data.user.image,
                check: setData.data.user.check,
                events: setData.data.user.events,
                reviews: setData.data.user.events,
                id: setData.data.user.id,
            }
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