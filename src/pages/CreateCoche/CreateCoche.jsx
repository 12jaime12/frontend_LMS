import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuth } from '../../contexts/authContext'
import { LayoutFlex, LayoutForm, LayoutInline, LayoutPosition } from '../../components/Layout'
import { H1C, PC } from '../../components/ui'
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
    const [image, setImage] = useState([])
    

    const formData2 = new FormData();
      


     const formSubmit=async(formData)=>{
      console.log(inputFrontal?.current?.files)

      const customFormData = {
        option_1: inputFrontal?.current?.files[0],
        option_2: inputDerecho?.current?.files[0],
        option_3: inputTrasero?.current?.files[0],
        option_4: inputDerecho?.current?.files[0],
        ...formData
      }
        setSend(true)
        setRes(await createCocheServicio(customFormData))
        setSend(false)
    }

    const handleImage=(e)=>{
      const file = e.target.files[0]
      const fileName = file.name
      console.log(fileName)
      setImage([...image, fileName])
      console.log(e.target.files)

    }

useEffect(()=>{
    res!=null && console.log("create car", res)
    
},[res])

useEffect(()=>{
  console.log("image",image)
  console.log("dataCustom", formData2)
},[formData2])

  return (
    <>
<LayoutInline padding="1rem" gap="0.5rem">
    <LayoutForm  direction="column" gap="3rem" color="white" width="700px" heigth="300px" padding = "2rem">
    <H1C text="Datos del vehículo" width="extralargo"/>
    <PC text="Añade los datos de tu vehículo y las mejores fotos para iniciar la venta." width="largo"></PC>
    </LayoutForm>
    <LayoutForm  direction="column" gap="3rem" color="#f2f2f2" width="700px" heigth="300px" padding = "2rem">
    
          <form onSubmit={handleSubmit(formSubmit)} encType="multipart/form-data">
            
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
              onChange={(e)=>handleImage(e)}
            />
            </label>
            <label className='archivo'>Lateral derecho: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              ref={inputDerecho}
              onChange={(e)=>handleImage(e)}
            /></label>
            <label className='archivo'>Trasera: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              ref={inputTrasero}
              onChange={(e)=>handleImage(e)}
            /></label>
            <label className='archivo'>Lateral izquierdo: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              input={inputIzquierdo}
              onChange={(e)=>handleImage(e)}
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