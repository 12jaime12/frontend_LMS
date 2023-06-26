import React, { useEffect, useState } from 'react'
import "./CarruselScroll.css"
import Button from '../ui/Button'
import { updateCocheServicio } from '../../service/API_proyect/coche.service'
import { getByIdUser } from '../../service/API_proyect/user.service'
import { useAuth } from '../../contexts/authContext'

const CarruselScroll = ({cocheUser}) => {
    const [estadoCoche, setEstadoCoche] = useState(false)
    const [coches, setCoches] = useState()
    const {user} = useAuth()
    console.log("cochessssss", cocheUser)

    const changeEstado = async (id, estado, precio) => {
        console.log(id)
        
        const customData={
            estado: estado=="none" ? "venta" : "none",
            precio: precio
        }

        console.log("estado del coche", customData)

        await updateCocheServicio(id, customData)
        setEstadoCoche(true)
        
        const auxiliar = (await getByIdUser(user.id));
        setCoches(auxiliar?.data)
      
    }
    useEffect(()=>{
        setCoches(cocheUser)
    },[cocheUser])

    
    useEffect(()=>{
        console.log(cocheUser)
    },[estadoCoche])
    return (
        <div className="divCarruselScroll">
            
            {
                (coches?.length>0) 
                ? (
                    coches?.map((elem)=>{
                        console.log(elem)
                        return(
                            <figure key={elem._id} className="carruselScrollFigure">
                            <img className="carruselScrollImage" src={elem.image[0]} alt={elem.modelo}/>
                            <h2 className="carruselScrollH2">{elem.marca} {elem.modelo}</h2>
                            <p onClick={()=> changeEstado(elem._id, elem.estado, elem.precio)}>{elem.estado=="vender" ? "EN VENTA" : "VENDER"} | estado: {elem.estado}</p>
                            </figure>
                        )
                    })
                ) 
                : (
                    <>
                    
                    <h2>TODAVÍA NO TIENES NINGÚN COCHE REGISTRADO. Puedes crear uno desde el boton de arriba</h2>
                    </>
                )
            }
            
            
        </div>
      )
}

export default CarruselScroll