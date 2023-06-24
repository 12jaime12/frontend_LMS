import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getByIdUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import "./Profile.css"
import PrintCochesPerfil from "../../components/PrintInfoCoche/PrintInfoCoche";
import PrintInfoCoche from "../../components/PrintInfoCoche/PrintInfoCoche";
import PrintAllCoches from "../../components/PrintAllCoches/PrintAllCoches";
import deleteCocheUser from "../../util/deleteCocheUser";
import CarruselPersonalizar from "../../components/CarruselPersonalizar/CarruselPersonalizar";
import CarruselPorTres from "../../components/CarruselPorTres/CarruselPorTres";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";



const Profile = () => {
  const {user, allUser} = useAuth()
  const [send, setSend] = useState(false)
  const [res, setRes] = useState()
  const navigate=useNavigate()
  
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
    <div className="Profile">
      {userInfo!=null &&(
        <>
        <div className="divImgmasInfo">
          <div className="DivUpdatePerfil">
            <img src={userInfo.imagen} alt={userInfo.name} />
            <Link to="/updateProfile" className="anchorCustom">
                <Button type="text" text="Modificar PERFIL" variant="contained" color="white" onClick={<UpdateProfile data={userInfo}/>}/>
              </Link>
           
          </div>
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
          <button onClick={() => navigate("/createCoche")}>Añadir coche</button>
          {/* <PrintAllCoches data={userInfo.coche_cliente}/> */}
          <CarruselPorTres data={userInfo.coche_cliente}/>

        </div>
        <div className="divUserLikes">
          <h2>LIKES</h2>
          <CarruselPorTres data={userInfo.like_coche}/>

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
