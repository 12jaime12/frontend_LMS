import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import "./Register.css"

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { registerUser } from "../../service/API_proyect/user.service";
import { Link } from "react-router-dom";
import useRegisterError from "../../hooks/useError/useRegisterError";
import { H2C } from "../../components/ui";
import { LayoutFlex, LayoutForm, LayoutInline } from "../../components/Layout";
import Button from "../../components/ui/Button";


const Register = () => {
  const { bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [registerOk, setRegisterOk] = useState(false);
  const [send, setSend] = useState(false);
  const {allUser} = useAuth()

  const formSubmit = async (formData) => {
    const inputfile = 0; //document.getElementById("file-upload").files;
    let customFormData;

    if (inputfile.length !== 0) {
      customFormData = { ...formData, image: inputfile[0] };
      setSend(true);
      console.log(customFormData);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      customFormData = { ...formData };
      setSend(true);
      console.log(customFormData);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useRegisterError(res, setRegisterOk);
    bridgeData("ALLUSER");
    console.log("allUser register",allUser) //AQUI SE SETEAN BIEN LOS DATOS DENTRO DE ALLUSER
  }, [res]);

  if (registerOk) {
    return <Navigate to="/checkCode" />;
  }

  return (
    <>
    <LayoutInline  gap="0.5rem" padding="1rem">
    <LayoutFlex direction="column" gap="0.5rem" padding="1rem">
    <H2C text="Regístrate para accceder a todas las ventajas" width="largo"/>
    </LayoutFlex>
    <LayoutForm direction="column" gap="0.5rem"  width="500px" heigth="300px" padding = "1rem">
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="FormularioRegister">
          <LayoutInline gap="0.5rem" padding="1rem">
            <label htmlFor="custom-input" className="custom-placeholder">
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
            <label htmlFor="custom-input" className="custom-placeholder">
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
          <label htmlFor="custom-input" className="custom-placeholder">
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
              autoComplete="telefono"
              {...register("movil", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              DNI
            </label>
            <input
              className="input_user"
              type="dni"
              id="dni"
              name="dni"
              autoComplete="false"
              {...register("dni", { required: true })}
            />
            </LayoutInline>
            <LayoutInline gap="0.5rem" padding="1rem">
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Contraseña
            </label>
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
          </LayoutInline>
          <LayoutInline gap="0.5rem" padding="1rem">
            <label htmlFor="custom-input" className="custom-placeholder">
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
            <label htmlFor="custom-input" className="custom-placeholder">
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
            <label htmlFor="custom-input" className="custom-placeholder">
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
            <label htmlFor="custom-input" className="custom-placeholder">
              Dirección
            </label>
            <input
              className="input_user"
              type="ciudad"
              id="direccion"
              name="direccion"
              autoComplete="false"
              {...register("direccion", { required: true })}
            />
            </LayoutInline>
            <LayoutInline gap="0.5rem" padding="1rem">
          <div className="sexo"> 
            <input
              type="radio"
              name="sexo"
              id="masculino"
              value="hombre"
              {...register("genero", { required: true })}
            />
            <label htmlFor="masculino" className="label-radio masculino">
              Masculino
            </label>
            <input
              type="radio"
              name="sexo"
              id="femenino"
              value="mujer"
              {...register("genero", { required: true })}
            />
            <label htmlFor="femenino" className="label-radio femenino">
              Femenino
            </label>
          </div>
          </LayoutInline>
          </div>
          <LayoutFlex direction="column" gap="0.5rem" color="f2f2f2"padding="1rem">
          <Button type="submit" text="Registrar" variant="contained" color="white"/>
          
          <p className="FormularioRegister">
            <small>
              Haciendo click en el botón de Registrar, estás de acuerdo con{" "}
              <Link className="anchorCustom">Términos y Condiciones</Link> y{" "}
              <Link className="anchorCustom">Política de Privacidad</Link>.
            </small>
          </p>
        </LayoutFlex>
        </form>
    
        <p className="parrafoLogin">
          ¿Ya tienes cuenta? <Link to="/login">Accede a tu cuenta aquí.</Link>
        </p>
      </LayoutForm>
      </LayoutInline>
    </>
  );
};
export default Register;
