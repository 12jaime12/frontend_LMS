import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuth } from '../../contexts/authContext'
import { LayoutFlex, LayoutForm, LayoutInline, LayoutPosition } from '../../components/Layout'
import { H1C } from '../../components/ui'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { createCocheServicio } from '../../service/API_proyect/coche.service'
import "./CreateCoche.css"
const CreateCoche = () => {
    const {user} = useAuth()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [created, setCreatedOk] = useState(false)
    const { register, handleSubmit } = useForm();
    const inputFrontal = useRef()
    const inputIzquierdo = useRef()
    const inputDerecho = useRef()
    const inputTrasero = useRef()
    
    
    const formSubmit=async(formData)=>{
      console.log("ref", inputFrontal)
      const arrayImagenes = [inputFrontal?.current?.value, inputDerecho?.current?.value, inputTrasero?.current?.value, inputDerecho?.current?.value]
      const dataCustom={
        ...formData,
        image:arrayImagenes
      }
      console.log("dataCustom", dataCustom)
        setSend(true)
        setRes(await createCocheServicio(dataCustom))
        setSend(false)
    }

useEffect(()=>{
    res!=null && console.log("create car", res)
    
},[res])
  return (
    <>
<LayoutInline padding="1rem" gap="0.5rem">
    <H1C text="Datos del vehículo" width="extralargo"/>
   
    <LayoutForm  direction="column" gap="0.5rem"  width="500px" heigth="300px" padding = "1rem">
    
          <form onSubmit={handleSubmit(formSubmit)}>
            
          <LayoutInline padding="1rem" gap="3rem">
            <LayoutFlex direction="column" gap="0.5rem" padding="0">
            <label htmlFor="custom-input" className="custom-placeholder">
              Marca
            </label>
            <input
              className="input_user"
              type="text"
              id="marcaCar"
              name="marcaCar"
              autoComplete="false"
              {...register("marca", { required: true })}
            />
             <label htmlFor="custom-input" className="custom-placeholder">
              Modelo
            </label>
            <input
              className="input_user"
              type="text"
              id="modeloCar"
              name="modeloCar"
              autoComplete="false"
              {...register("modelo", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Año
            </label>
            <input
              className="input_user"
              type="number"
              id="yearCar"
              name="yearCar"
              autoComplete="false"
              {...register("year", { required: true })}
            />
             <label htmlFor="custom-input" className="custom-placeholder">
              Combustible
            </label>
            <input
              className="input_user"
              type="text"
              id="combustibleCar"
              name="combustibleCar"
              autoComplete="false"
              {...register("combustible", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Precio
            </label>
            <input
              className="input_user"
              type="number"
              id="precioCar"
              name="precioCar"
              autoComplete="false"
              {...register("precio", { required: true })}
            />
            </LayoutFlex>


             <LayoutFlex direction="column" gap="0.5rem" padding="0rem">
             <label htmlFor="custom-input" className="custom-placeholder">
              Imágenes
            </label>
            
            <label className='archivo'>Frontal: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              ref={inputFrontal}
            />
            </label>
            <label className='archivo'>Lateral derecho: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              ref={inputDerecho}
              
            /></label>
            <label className='archivo'>Trasera: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              ref={inputTrasero}
              
            /></label>
            <label className='archivo'>Lateral izquierdo: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              input={inputIzquierdo}
              
            /></label>
             </LayoutFlex>
            
        </LayoutInline>
        <LayoutFlex direction="column" gap="0.5rem" color="f2f2f2" padding="1rem">
          <Button type="submit" text="Crear Coche" variant="contained" color="white"/>
        </LayoutFlex>
        </form>
      </LayoutForm>

      </LayoutInline>
    </>
   
  )
}

export default CreateCoche