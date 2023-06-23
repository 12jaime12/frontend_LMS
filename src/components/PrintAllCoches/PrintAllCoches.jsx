import React, { useEffect, useState } from 'react'
import "./PrintAllCoches.css"
import { useAuth } from '../../contexts/authContext'
import { useNavigate } from 'react-router'
import deleteCocheUser from '../../util/deleteCocheUser'
import Button from '../ui/Button'

const PrintAllCoches = ({data}) => {
  console.log("compraventa data",data)
  const navigate=useNavigate()
  const {user} = useAuth()
  const [res, setRes]=useState(false)
  
  const handleInfo = (data) =>{
    const dataCustom = data.marca
    console.log(dataCustom)
    console.log(user)
  }
  const addUserLike = async () => {


  }

  const addUserComentario = async () => {


  }

  useEffect(()=>{
    console.log("cocheborradouseeffect")
  },[res])
  
    console.log(data)
  return (
        <div className="divAllCoches">
          
          {data?.map((elem)=>(
            <div key={elem._id}>
            <figure className="figureCoche" onClick={()=>navigate(`/compraryvender/coche/${elem._id}`)}>
              <div className="divFigureCoche">
              <img src={elem.image[0]} alt={elem.modelo}/>
              <div className="divCocheInfo">
                <p>{elem.marca} {elem.modelo}</p>
                <p>Precio: <strong>{elem.precio} €</strong></p>
              </div>
              </div>
            </figure>
            <button>Like</button>
            <button onClick={()=>deleteCocheUser(elem._id, setRes)}>Borrar</button>
            {/* <Button
            type="button"
              text="Borrar"
              action={deleteCocheUser(elem._id, setRes)}
              variant="contained"
              color="white"
            /> */}
            </div>
        ))
        
        }
        </div>
        
    
  )
}

export default PrintAllCoches