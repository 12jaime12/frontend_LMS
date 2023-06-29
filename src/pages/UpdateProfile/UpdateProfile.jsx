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
import Swal from 'sweetalert2';

const UpdateProfile = ({data}) => {
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

    
    const formSubmit = async (formData) =>{
      console.log(formData)
      if(formData.apellido==""&&formData.ciudad==""&&formData.direccion==""&&formData.email==""&&formData.movil==""&&formData.name==""&&formData.pais==""&&formData.provincia==""){
        Swal.fire({
          title: "No has introducido ninguna modificación en el perfil",
          background: "#171717",
          color: "#c61c14",
          showConfirmButton: false,
          timer: 3000,
        })
      }else{
        Swal.fire({
          title: "¿Seguro que quieres modificar tus datos?",
          icon: "question",
          iconColor:"#249e05",
          background: "#F2F2F2",
          color: "#249e05",
          showCancelButton: true,
          confirmButtonColor: "rgb(73, 193, 162)",
          cancelButtonColor: "#d33",
          confirmButtonText: "YES",
      }).then(async (result) => {
          if (result.isConfirmed) {
          
          const dataForm = {
            name:(formData.name ? formData.name : infoUser.data.name),
            apellido:(formData.apellido ? formData.apellido : infoUser.data.apellido),
            pais:(formData.pais ? formData.pais : infoUser.data.pais),
            provincia:(formData.provincia ? formData.provincia : infoUser.data.provincia),
            ciudad:(formData.ciudad ? formData.ciudad : infoUser.data.ciudad),
            direccion:(formData.direccion ? formData.direccion : infoUser.data.direccion),
            movil:(formData.movil ? formData.movil : infoUser.data.movil),
          }
          const dataCustom = {
            imagen: inputImage.current.files[0],
            ...dataForm,
          }
    
          console.log("datacustom", dataCustom)
          
          const update=await updateUser(dataCustom)
          
          switch (update.status) {
              case 200:
              Swal.fire({
                icon: "success",
                iconColor:"#249e05",
                background: "#F2F2F2",
                color: "#249e05",
                  title: "👍✅ Perfil actualizado ✅👍",
                  text: "",
                  showConfirmButton: false,
                  timer: 2000,
                  
              });
              setRes(()=>true)
              break;
  
              default:
              Swal.fire({
                  icon: "error",
                  title: "❌ ERROR ❌",
                  text: "Please, try again",
                  showConfirmButton: false,
                  timer: 1500,
                  background: "#171717",
                  color: "#c61c14",
              });
  
              break;
          }
          }
          })
      }
      
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
            padding="2rem">
              
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
                {/* <label>
                  <input 
                  type="file" 
                  name="imagePerfil" 
                  id="imagePerfil" 
                  ref={inputImage}
                  />
                </label> */}
                <div className="container-input">
                <input 
                type="file" 
                name="file-2" 
                id="file-2" 
                className="inputfile inputfile-2" 
                ref={inputImage}
                
                />
                <label htmlFor="file-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                <span className="iborrainputfile">Seleccionar archivo</span>
                </label>
              </div>
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
                  padding="2rem"
                  paddingBottom="2.5rem">
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