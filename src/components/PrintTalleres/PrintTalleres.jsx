import React, { useEffect, useState } from 'react'
import "./PrintTalleres.css"
import { useAuth } from '../../contexts/authContext'
import PrintAllCoches from '../PrintAllCoches/PrintAllCoches'
import { createServiceTaller } from '../../service/API_proyect/coche.service'
import useTallerService from '../../hooks/useTallerService'
import CarruselPersonalizar from '../CarruselPersonalizar/CarruselPersonalizar'
import Locations from '../../data/locations'

const PrintTalleres = ({data, coche}) => {
    const {user} = useAuth()
    const [res,setRes] = useState()
    const [location, setLocation]=useState({})
    let idTaller
    let idCoche=user.coches[0]
    console.log("datataller", data)
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
                            <p>LOCALIZACIÓN: {elem.pais} - {elem.provincia}</p>
                            
                        </div>
                    </div>
                    <div>
                        <div className="divLocation">
                            <Locations provincia={elem.provincia} setLocation={setLocation}/>
                            {/* {(location != null) && (
                                <iframe
                                src={location.src}
                                width="200"
                                height="200"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                              ></iframe>
                            )} */}
                            
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50057.87547852751!2d-0.47252415!3d38.3578408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6235da3b9dab4b%3A0x1d7da872ac0b81e3!2sAlicante%20(Alacant)%2C%20Alicante!5e0!3m2!1ses!2ses!4v1687863294429!5m2!1ses!2ses" width="400" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                            <h3>{elem.ciudad}</h3>
                            <p>{elem.direccion}</p>
                            
                            
                        </div>
                        <div className="divBotonTaller">
{
                                user.coches.length>0 && <button className="botonTaller" onClick={()=>crearServicio(elem._id)}>Añadir al taller</button>
                            }
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