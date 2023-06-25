import React, { useEffect, useState } from "react";
import { getByIdUser, getByRolUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import PrintTalleres from "../../components/PrintTalleres/PrintTalleres";
import PrintAllCoches from "../../components/PrintAllCoches/PrintAllCoches";
import CarruselPersonalizar from "../../components/CarruselPersonalizar/CarruselPersonalizar";
import "./Taller.css"
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router";



const Taller = () => {
  const [res,setRes] = useState()
  const [resUser, setResUser] = useState()
  const [coche, setCoche] = useState()
  const {user} = useAuth()
  const navigate=useNavigate()
  console.log("userID", user.id)
  
  const allTaller = async () =>{
    setRes(await getByRolUser())
  }
  const userId = async () => {
    setResUser(await getByIdUser(user.id))
    setCoche(resUser?.coche_cliente)
  }

  
  useEffect(()=>{
    allTaller()
    userId()
    console.log("cocheeeeeeeeeeee",coche)
  },[])

  useEffect(()=>{
    console.log(coche)
  },[coche])
  console.log("res",resUser)
  return (
    <div className="Taller">
  
      {
        (resUser!=null && coche!=undefined)
        ?(
          <div>
            <CarruselPersonalizar data={resUser?.data?.coche_cliente} setCoche={setCoche}/>
          </div>
        )
        :(<div className="divSuperiorTaller">
          <h3>No tienes ningún coche registrado en la web. Si quieres contratar servicios de taller deberás dar de alta algún coche</h3>
          <Button type="text" text="Crear coche" variant="contained" color="" action={() => navigate("/createCoche")}/>
        </div>)
      }
      <div>
        <PrintTalleres data={res} coche={coche}/>
      </div>
    </div>
  )
};

export default Taller;
