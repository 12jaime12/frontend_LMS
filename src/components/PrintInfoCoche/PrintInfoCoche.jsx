import React, { useEffect, useState } from 'react'
import "./PrintInfoCoche.css"
import Button from '../ui/Button'
import { H3C } from '../ui/H3.element'
import { PC } from '../ui/P.element'
import { LayoutFlex} from "../../components/Layout";
import { useNavigate } from 'react-router'
import { useAuth } from '../../contexts/authContext'
useEffect
const PrintInfoCoche = ({data}) => {
  const [comment, setComment] = useState(false)
  const [res,setRes] = useState()
  const [send, setSend] = useState(false)
  const {user} = useAuth()
  const navigate=useNavigate()

  const addUserComentario = async () => {


  }


    const info = data?.data
    console.log(info)
    console.log(info?.modelo)


  return (
    <>
    <LayoutFlex direction="column" gap="2rem" padding="2rem">
    <img src={info?.image[0]} alt={info?.modelo}/>
    <LayoutFlex direction="column" gap="0.5rem" padding="0">
    <PC text={`Marca: ${info?.marca}`} width="medio"/>
        <PC text={`Modelo: ${info?.modelo}`} width="extralargo"/>
        <PC text={`Año: ${info?.year}`} width="medio"/>
        <PC text={`Combustible: ${info?.combustible}`} width="extralargo"/>
        <PC text={`Precio: ${info?.precio} €`} width="medio"/>
    </LayoutFlex>
        
       
        <Button text="Comentarios" variant="contained" color="white" onClick={()=>activarPopup()}/>
        </LayoutFlex>
    
    </>
    
  )
}

export default PrintInfoCoche