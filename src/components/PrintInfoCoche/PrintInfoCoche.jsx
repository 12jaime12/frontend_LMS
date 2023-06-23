import React from 'react'
import "./PrintInfoCoche.css"
import Button from '../ui/Button'
import { H3C } from '../ui/H3.element'
import { PC } from '../ui/P.element'
import { LayoutFlex} from "../../components/Layout";

const PrintInfoCoche = ({data}) => {
    const activarPopup = ()=>{
      const divCambiar=document.querySelector(".divPopUp")
      console.log(divCambiar)
    }

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
    <div className="divPopUp">
      <textarea></textarea>
      <button>SEND</button>
    </div>
    </>
    
  )
}

export default PrintInfoCoche