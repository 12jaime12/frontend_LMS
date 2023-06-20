import React from 'react'
import "./PrintInfoCoche.css"
const PrintInfoCoche = ({data}) => {
    
    const info = data?.data
    console.log(info)
    console.log(info?.modelo)
  return (
    <>
    <div className="divCocheId">
    <img src={info?.image[0]} alt={info?.modelo}/>
        <div className="divInfoCoche">
            
            <h2>{info?.marca}</h2>
            <h2>{info?.modelo}</h2>
            <h2>{info?.year}</h2>
            <h2>{info?.combustible}</h2>
            <h2>{info?.precio}€</h2>
        </div>
        <button>COMENTARIOS</button>
    </div>
    </>
    
  )
}

export default PrintInfoCoche