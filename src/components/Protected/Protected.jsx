import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Navigate } from 'react-router'

//PROTECTED-> Protegemos las rutas para que el usuario tenga que estar logeado, y en caso de que lo este tambien debe estar checkeado
const Protected = () => {
    const {user} = useAuth()

    if(user==null | user.check == false){
        localStorage.removeItem("user")
        return <Navigate to="/login"/>
    }
}

//PROTECTED GENERAL-> Protegemos las rutas para que el usuario tenga que estar logeado, sino lo llevamos a la pagina del login
const ProtectedGeneral = () => {
    const {user} = useAuth()

    if(user == null){
        return <Navigate to="/login"/>
    }
}

//PROTECTED CHECK-> Protegemos las rutas para que el usuario este checkeado. Si lo esta devolvemos el children (que sería la ruta protegida)
//                  y si no lo esta lo llevamos a la pagina de "checkCode" para que ponga el codigo de confirmacion
const ProtectedCheck = () => {
    const {user, allUser} = useAuth()

    if(user?.check==true || allUser?.data?.user?.check == true){
        return children
    }else{
        return <Navigate to="checkCode"/>
    }
}



const ProtectedCheckChildren = () => {
    const {user, allUser}=useAuth()
    if (allUser?.data?.user?.check==true||user.check==true){
        return <Navigate to="/dashboard"/>
    }else{
        return children
    }
}

export default {Protected, ProtectedCheck, ProtectedGeneral, ProtectedCheckChildren}