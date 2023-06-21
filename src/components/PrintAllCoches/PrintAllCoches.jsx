import React from 'react'
import "./PrintAllCoches.css"
import { useAuth } from '../../contexts/authContext'
import { useNavigate } from 'react-router'

const PrintAllCoches = ({data}) => {
  const navigate=useNavigate()
  const {user} = useAuth()
  const handleInfo = (data) =>{
    const dataCustom = data.marca
    console.log(dataCustom)
    console.log(user)
  }
  const addUserLike = async () => {


  }

  const addUserComentario = async () => {


  }
  
    console.log(data)
  return (
        <div className="divAllCoches">{data?.data?.map((elem)=>(
            <figure  key={elem._id} className="figureCoche" onClick={()=>navigate(`/compraryvender/coche/${elem._id}`)}>
              <div className="divFigureCoche">
              <img src={elem.image[0]} alt={elem.modelo}/>
              <div className="divCocheInfo">
                <p>{elem.marca} {elem.modelo}</p>
                <p>Precio: <strong>{elem.precio} €</strong></p>
              </div>
              </div>
              <button>Like</button>
              <button>Add</button>
            </figure>
        ))
        
        }</div>
        
    
  )
}

export default PrintAllCoches