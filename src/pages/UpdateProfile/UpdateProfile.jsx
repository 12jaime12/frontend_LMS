import React from 'react'
import { H1C, H2C, H3C, PC } from "../../components/ui";
import {
  LayoutFlex,
  LayoutForm,
  LayoutInline,
  LayoutInfo,
} from "../../components/Layout";
import Button from "../../components/ui/Button";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const UpdateProfile = () => {
    console.log("UPDATE PROFILE")
    const {register, handleSubmit} = useForm()
    
    const formSubmit=()=>{}

  return (
    <div className="Profile">
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
              <LayoutInline gap="0.5rem" padding="1rem">
                <label htmlFor="custom-input" className="placeholder-register">
                  Nombre
                </label>
                <input
                  className="input_user"
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="false"
                  {...register("name", { required: true })}
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
                  {...register("apellido", { required: true })}
                />
              </LayoutInline>

              
              
              <LayoutInline gap="0.5rem" padding="1rem">
                <label htmlFor="custom-input" className="placeholder-register">
                  País
                </label>
                <input
                  className="input_user"
                  type="text"
                  id="pais"
                  name="pais"
                  autoComplete="false"
                  {...register("pais", { required: true })}
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
                  {...register("provincia", { required: true })}
                />
              </LayoutInline>
              <LayoutInline gap="0.5rem" padding="1rem">
                <label htmlFor="custom-input" className="placeholder-register">
                  Ciudad
                </label>
                <input
                  className="input_user"
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  autoComplete="false"
                  {...register("ciudad", { required: true })}
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
                  {...register("direccion", { required: true })}
                />
              </LayoutInline>

              <LayoutInline gap="0.5rem" padding="0">
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
                  {...register("movil", { required: true })}
                />

              </LayoutInline>

              <LayoutFlex
                direction="column"
                gap="1rem"
                color="f2f2f2"
                padding="1rem">
                <Button
                  type="submit"
                  text="Actualizar"
                  variant="contained"
                  color="white"
                />
              </LayoutFlex>
            </form>
          </LayoutForm>


            <LayoutInfo content="center" gap="1rem">
              <PC text="¿Quieres cambiar la contraseña?" width="medio" />
              <Link to="/changePassword" className="anchorCustom">
                <Button type="text" text="PASSWORD" variant="contained" color="white"/>
              </Link>
            </LayoutInfo>
          </LayoutForm>
    </div>
  )
}

export default UpdateProfile