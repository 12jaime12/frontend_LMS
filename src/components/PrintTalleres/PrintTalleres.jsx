import React, { useEffect, useState } from 'react'
import "./PrintTalleres.css"
import { useAuth } from '../../contexts/authContext'
import PrintAllCoches from '../PrintAllCoches/PrintAllCoches'
import { createServiceTaller } from '../../service/API_proyect/coche.service'


const PrintTalleres = ({data, coche}) => {
    const {user, allUser} = useAuth()
    let idCoche=data?.data[0]._id
    console.log(idCoche)

    const crearServicio = async (tallerId) => {
        (coche==undefined) ? idCoche : idCoche=coche
        idTaller=tallerId

        await createServiceTaller(idCoche, idTaller)

    }

  return (
    <>
    <div className="divCochesUser">
        {
            
        }
    </div>
    <div className="divAllTalleres">
        {
            data?.data.map((elem)=>{
                return (
                <section key={elem._id} className="sectionTaller">
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
                        <div className="divLocation">
                            <div id="map"></div>
                            
                            <h3>{elem.ciudad}</h3>
                            <p>{elem.direccion}</p>
                            <button className="botonTaller">AÑADIR AL TALLER</button>
                        </div>
                        <div className="divBotonTaller">
                           
                        </div>
                    </div>
                </section>
                
                )

            })
        }

    </div>
    </>

    
  )
}

export default PrintTalleres