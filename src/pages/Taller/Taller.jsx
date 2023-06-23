import React, { useEffect, useState } from "react";
import { getByIdUser, getByRolUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import PrintTalleres from "../../components/PrintTalleres/PrintTalleres";
import PrintAllCoches from "../../components/PrintAllCoches/PrintAllCoches";
import CarruselPersonalizar from "../../components/CarruselPersonalizar/CarruselPersonalizar";




const Taller = () => {
  const [res,setRes] = useState()
  const [resUser, setResUser] = useState()
  const [coche, setCoche] = useState()
  const {user} = useAuth()
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
    <>
      {
        
        resUser!=null&&(
          <div>
            <CarruselPersonalizar data={resUser?.data?.coche_cliente} setCoche={setCoche}/>
          </div>
        )
      }
      <div>
        <PrintTalleres data={res} coche={coche}/>
      </div>
    </>
  )
};

export default Taller;
