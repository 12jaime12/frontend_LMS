import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuth } from '../../contexts/authContext'
import { LayoutFlex, LayoutForm, LayoutInline, LayoutPosition } from '../../components/Layout'
import { H2C } from '../../components/ui'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'
import { createCocheServicio } from '../../service/API_proyect/coche.service'

const CreateCoche = () => {
    const {user} = useAuth()
    const [send, setSend] = useState(false)
    const [res, setRes] = useState()
    const [created, setCreatedOk] = useState(false)
    const { register, handleSubmit } = useForm();
    const formSubmit=async(formData)=>{
        setSend(true)
        setRes(await createCocheServicio(formData))
        setSend(false)
    }

useEffect(()=>{
    res!=null && console.log("create car", res)
},[res])
  return (
    <div>

    <LayoutFlex direction="column" gap="0.5rem" padding="1rem">
    <H2C text="DATOS DEL VEHICULO" width="extralargo"/>
    </LayoutFlex>
    <LayoutForm  direction="column" gap="0.5rem"  width="500px" heigth="300px" padding = "1rem">
          <form onSubmit={handleSubmit(formSubmit)}>
            
          
            <LayoutFlex direction="column" gap="0.5rem" padding="0">
            <label htmlFor="custom-input" className="custom-placeholder">
              MARCA
            </label>
            <input
              className="input_user"
              type="text"
              id="marcaCar"
              name="marcaCar"
              autoComplete="false"
              {...register("marca", { required: true })}
            />
            </LayoutFlex>
             <LayoutFlex direction="column" gap="0.5rem" padding="0">
             <label htmlFor="custom-input" className="custom-placeholder">
              MODELO
            </label>
            <input
              className="input_user"
              type="text"
              id="modeloCar"
              name="modeloCar"
              autoComplete="false"
              {...register("modelo", { required: true })}
            />
             </LayoutFlex>




            <LayoutFlex direction="column" gap="0.5rem" padding="0rem">
            <label htmlFor="custom-input" className="custom-placeholder">
              AÑO
            </label>
            <input
              className="input_user"
              type="number"
              
              id="yearCar"
              name="yearCar"
              autoComplete="false"
              {...register("year", { required: true })}
            />
            </LayoutFlex>
             <LayoutFlex direction="column" gap="0.5rem" padding="0rem">
             <label htmlFor="custom-input" className="custom-placeholder">
              COMBUSTIBLE
            </label>
            <input
              className="input_user"
              type="text"
              id="combustibleCar"
              name="combustibleCar"
              autoComplete="false"
              {...register("combustible", { required: true })}
            />
             </LayoutFlex>
            
            <LayoutFlex direction="column" gap="0.5rem" padding="0rem">
            <label htmlFor="custom-input" className="custom-placeholder">
              PRECIO
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
              IMAGENES
            </label>
            <label>frontal: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              {...register("image", )}
            /></label>
            <label>lateral derecho: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              {...register("image", )}
            /></label>
            <label>culo: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              {...register("image", )}
            /></label>
            <label>lateral izquierdo: <input
              className="input_user"
              type="file"
              id="imageCar"
              name="imageCar"
              autoComplete="false"
              {...register("image",)}
            /></label>
             </LayoutFlex>
            
            
          
          
          
          <LayoutFlex direction="column" gap="0.5rem" color="f2f2f2"padding="1rem">
          <Button type="submit" text="Crear Coche" variant="contained" color="white"/>
        </LayoutFlex>
        </form>
      </LayoutForm>




    </div>
  )
}

export default CreateCoche