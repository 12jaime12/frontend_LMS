import React, { useEffect, useState } from "react";
import { getByRolUser } from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import PrintTalleres from "../../components/PrintTalleres/PrintTalleres";



const Taller = () => {
  const [res,setRes] = useState()

  const allTaller = async () =>{
    setRes(await getByRolUser())
  }

  useEffect(()=>{
    allTaller()
  },[])
  return (
    <div>
      <PrintTalleres data={res?.data}/>
    </div>
  )
};

export default Taller;
