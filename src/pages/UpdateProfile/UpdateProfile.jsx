import React, { useEffect, useRef, useState } from 'react'
import { H1C, H2C, H3C, PC } from "../../components/ui";
import {
  LayoutFlex,
  LayoutForm,
  LayoutInline,
  LayoutInfo,
} from "../../components/Layout";
import Button from "../../components/ui/Button";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { getByIdUser, updateUser } from '../../service/API_proyect/user.service';
import ChangeImageProfile from '../../components/ChangeImageProfile/ChangeImageProfile';
import "./UpdateProfile.css"

const UpdateProfile = ({data}) => {
    console.log("UPDATE PROFILE")
    const {register, handleSubmit} = useForm()
    const [res,setRes] = useState()
    const [send, setSend] = useState(false)
    const navigate= useNavigate()
    const [infoUser, setInfoUser] = useState({})
    const {user} = useAuth()
    const inputImage = useRef()

    const getUser = async () => {
      setInfoUser(await getByIdUser(user.id))
    }
    console.log("info",infoUser)

    const formSubmit = async (formData) =>{
      const dataCustom = {
        name:(formData.name ? formData.name : infoUser.data.name),
        apellido:(formData.apellido ? formData.apellido : infoUser.data.apellido),
        pais:(formData.pais ? formData.pais : infoUser.data.pais),
        provincia:(formData.provincia ? formData.provincia : infoUser.data.provincia),
        ciudad:(formData.ciudad ? formData.ciudad : infoUser.data.ciudad),
        direccion:(formData.direccion ? formData.direccion : infoUser.data.direccion),
        movil:(formData.movil ? formData.movil : infoUser.data.movil),
      }
      console.log("datacustom", dataCustom)
      setSend(true)
      setRes(await updateUser(dataCustom))
      setSend(false)
    }
    
    useEffect(()=>{
      getUser()
    },[])

    useEffect(()=>{console.log("res", res)},[res])
  return (
    <>
    
      
      <div className="Profile2">
          <H1C text="Introduce SÓLO los datos que quieras cambiar" width="extralargo"/>
          <LayoutForm
            direction="column"
            gap="0.5rem"
            color="#white"
            width="700px"
            heigth="300px"
            padding="0">
              
            <LayoutForm
              direction="column"
              gap="0.5rem"
              color="#f2f2f2"
              width="700px"
              heigth="300px"
              padding="0">
              <form onSubmit={handleSubmit(formSubmit)}>
              <div className="divUpdateImagen">
                <img src={infoUser?.data?.imagen} alt={infoUser?.data?.imagen}/>
                <label>
                  <input type="file" name="imagePerfil" id="imagePerfil" ref="inputImage" {...register ("imagen")}/>
                </label>
              </div>
                <LayoutInline gap="0.5rem" padding="1rem" placeItems="normal">
                  <label htmlFor="custom-input" className="placeholder-register">
                    Nombre
                  </label>
                  <input
                    className="input_user"
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="false"
                    {...register("name", )}
                  />
  
                  <label htmlFor="custom-input" className="placeholder-register">
                    Apellido
                  </label>
                  <input
                    className="input_user"
                    type="text"
                    id="apellido"
                    name="apellido"
                    autoComplete="false"
                    {...register("apellido",)}
                  />
                </LayoutInline>
  
                
                
                <LayoutInline gap="0.5rem" padding="1rem" placeItems="normal">
                  <label htmlFor="custom-input" className="placeholder-register">
                    País
                  </label>
                  <input
                    className="input_user"
                    type="text"
                    id="pais"
                    name="pais"
                    autoComplete="false"
                    {...register("pais", )}
                  />
  
                  <label htmlFor="custom-input" className="placeholder-register">
                    Provincia
                  </label>
                  <input
                    className="input_user"
                    type="text"
                    id="provincia"
                    name="provincia"
                    autoComplete="false"
                    {...register("provincia", )}
                  />
                </LayoutInline>
                <LayoutInline gap="0.5rem" padding="1rem" placeItems="normal">
                  <label htmlFor="custom-input" className="placeholder-register">
                    Ciudad
                  </label>
                  <input
                    className="input_user"
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    autoComplete="false"
                    {...register("ciudad", )}
                  />
  
                  <label htmlFor="custom-input" className="placeholder-register">
                    Dirección
                  </label>
                  <input
                    className="input_user"
                    type="text"
                    id="direccion"
                    name="direccion"
                    autoComplete="false"
                    {...register("direccion", )}
                  />
                </LayoutInline>
  
                <LayoutInline gap="0.5rem" padding="1rem" placeItems="normal">
                  <label htmlFor="custom-input" className="placeholder-register">
                    Teléfono
                  </label>
                  <input
                    className="input_user"
                    type="tel"
                    pattern="[0-9]{9}"
                    maxLength="9"
                    minLength="9"
                    id="telefono"
                    name="telefono"
                    autoComplete="false"
                    {...register("movil", )}
                  />
                  <label htmlFor="custom-input" className="placeholder-register">
                  Email
                </label>
                <input
                  className="input_user"
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="false"
                  {...register("email")}
                />
                </LayoutInline>
  
                <LayoutFlex 
                  direction="column"
                  gap="1rem"
                  color="f2f2f2"
                  padding="2.5rem">
                  <Button
                    type="submit"
                    text="Actualizar"
                    variant="contained"
                    color="white"
                  />
                </LayoutFlex>
              </form>
            </LayoutForm>
  
  
              <div className='cambioContraseña'>
                <PC text="¿Quieres cambiar la contraseña?" width="medio" />
                <Link to="/changePassword" className="anchorCustom">
                  <Button type="text" text="Cambiar" variant="contained" color="white"/>
                </Link>
              </div>
            </LayoutForm>
      </div>
    </>
  )
}

export default UpdateProfile