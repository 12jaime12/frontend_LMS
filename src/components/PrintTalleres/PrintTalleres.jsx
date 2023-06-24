import React, { useEffect, useState } from 'react'
import "./PrintTalleres.css"
import { useAuth } from '../../contexts/authContext'
import PrintAllCoches from '../PrintAllCoches/PrintAllCoches'
import { createServiceTaller } from '../../service/API_proyect/coche.service'
import useTallerService from '../../hooks/useTallerService'
import CarruselPersonalizar from '../CarruselPersonalizar/CarruselPersonalizar'


const PrintTalleres = ({data, coche}) => {
    const {user} = useAuth()
    const [res,setRes] = useState()
    let idTaller
    let idCoche=user.coches[0]

    const crearServicio = async (tallerId) => {
        
        const dataId = {
            idCoche: (coche===undefined) ? idCoche=idCoche : idCoche=coche,
            idTaller: tallerId
        }

        console.log("data coche y taller", dataId)
        setRes(await createServiceTaller(dataId))
        
    }

    useEffect(()=>{
        console.log("ENTRO PRINT TALLERES USER ---------------",user)
    },[])
   useEffect(()=>{
    console.log("----------------------RESSSSS",res)
    useTallerService(res)
   },[res]) 

   return (
    <>
    <div className="divCochesUser">

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
                            <button className="botonTaller" onClick={()=>crearServicio(elem._id)}>AÑADIR AL TALLER</button>
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