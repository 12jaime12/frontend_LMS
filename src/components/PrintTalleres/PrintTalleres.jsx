import React, { useEffect, useState } from 'react'
import "./PrintTalleres.css"


const PrintTalleres = ({data}) => {
    console.log("print",data)
    


  return (
    <div className="divAllTalleres">
        {
            data?.map((elem)=>{
                return (
                <section key={elem._id}>
                    <div>
                        <div className="divImgTaller">
                            <h2>{elem.name} - {elem.apellido}</h2>
                            <img src={elem.imagen} alt={elem.name} />
                        </div>
                        <div>
                            <p>ID: {elem._id}</p>
                            <p>TLFN: {elem.movil}</p>
                            <p>EMAIL: {elem.email}</p>
                            <p>LOCALIZACION: {elem.pais} - {elem.provincia}</p>
                            
                        </div>
                    </div>
                    <div>
                        <div id="map"></div>
                        
                        <h3>{elem.ciudad}</h3>
                        <p>{elem.direccion}</p>
                    </div>
                </section>
                
                )

            })
        }

    </div>
  )
}

export default PrintTalleres