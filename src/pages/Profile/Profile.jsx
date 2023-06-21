import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getByIdUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import "./Profile.css"
import PrintCochesPerfil from "../../components/PrintInfoCoche/PrintInfoCoche";
import PrintInfoCoche from "../../components/PrintInfoCoche/PrintInfoCoche";
import PrintAllCoches from "../../components/PrintAllCoches/PrintAllCoches";
import deleteCocheUser from "../../util/deleteCocheUser";



const Profile = () => {
  const {user, allUser} = useAuth()
  const [send, setSend] = useState(false)
  const [res, setRes] = useState()
  
  console.log("user perfil",user)
  console.log(user.id)

  const getIdService = async()=>{
    setRes(await getByIdUser(user.id))
  }
  //setRes(await getByIdUser(user.id))
  const userInfo = res?.data
  console.log("userinfo", userInfo)
  useEffect(()=>{
    getIdService()
  },[])
  
  return (
    <div>
      {userInfo!=null &&(
        <>
        <div className="divImgmasInfo">
        <img src={userInfo.imagen} alt={userInfo.name} />
        <div className="divInfoUser">
          <h2>{userInfo.name.toUpperCase()} {userInfo.apellido.toUpperCase()}</h2>
          <h4>email: {userInfo.email}</h4>
          <h4>rol: {userInfo.rol}</h4>
          <div>
          
            <details className="infoPersonal">
            <summary>
              INFORMACION PERSONAL:
            </summary>
              <p>PAIS: {userInfo.pais}</p>
              <p>PROVINCIA: {userInfo.provincia}</p>
              <p>CIUDAD: {userInfo.ciudad}</p>
              <p>DIRECCION: {userInfo.direccion}</p>
              <p>DNI: {userInfo.dni}</p>
              <p></p>
            </details>
          </div>
        </div>
        </div>
        <div className="divUserCoches">
          <h2>COCHES PROPIOS</h2>
          <PrintAllCoches data={userInfo.coche_cliente}/>

        </div>
        <div className="divUserLikes">
          <h2>LIKES</h2>


        </div>
        <div className="divUserComments">
          <h2>COMENTARIOS</h2>


        </div>
        </>
      )}


    </div>
  )
};

export default Profile;
