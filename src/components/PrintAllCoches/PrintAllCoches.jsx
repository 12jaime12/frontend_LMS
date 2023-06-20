import React from 'react'
import "./PrintAllCoches.css"
const PrintAllCoches = ({data}) => {
    console.log(data)
  return (
        <div className="divAllCoches">{data?.data?.map((elem)=>(
            <figure key={elem._id} className="figureCoche">
              <div className="divFigureCoche">
              <img src={elem.image[0]} alt={elem.modelo}/>
              <div className="divCocheInfo">
                <p>{elem.marca} {elem.modelo}</p>
                <p>Precio: <strong>{elem.precio} €</strong></p>
              </div>
              </div>
            </figure>
        ))
        
        }</div>
        
    
  )
}

export default PrintAllCoches