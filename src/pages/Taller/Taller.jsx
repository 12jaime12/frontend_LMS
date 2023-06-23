import React, { useEffect, useState } from "react";
import { getByIdUser, getByRolUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import PrintTalleres from "../../components/PrintTalleres/PrintTalleres";
import PrintAllCoches from "../../components/PrintAllCoches/PrintAllCoches";



const Taller = () => {
  const [res,setRes] = useState()
  const [resUser, setResUser] = useState()
  const {user} = useAuth()
  console.log("userID", user.id)
  
  const allTaller = async () =>{
    setRes(await getByRolUser())
  }
  const userId = async () => {
    setResUser(await getByIdUser(user.id))
  }

  useEffect(()=>{
    allTaller()
    userId()
  },[])
  console.log("res",resUser)
  return (
    <>
      <div>
        <PrintAllCoches data={resUser?.data.coche_cliente}/>
      </div>
      <div>
        <PrintTalleres data={res?.data}/>
      </div>
    </>
  )
};

export default Taller;
