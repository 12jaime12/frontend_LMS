import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import "./Register.css";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { registerUser } from "../../service/API_proyect/user.service";
import { Link } from "react-router-dom";
import useRegisterError from "../../hooks/useError/useRegisterError";
import { H1C, H2C, H3C, PC } from "../../components/ui";
import {
  LayoutFlex,
  LayoutForm,
  LayoutInline,
  LayoutInfo,
} from "../../components/Layout";
import Button from "../../components/ui/Button";

const Register = () => {
  const { bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [registerOk, setRegisterOk] = useState(false);
  const [send, setSend] = useState(false);
  const { allUser } = useAuth();

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
    console.log("allUser register", allUser); //AQUI SE SETEAN BIEN LOS DATOS DENTRO DE ALLUSER
  }, [res]);

  if (registerOk) {
    return <Navigate to="/checkCode" />;
  }

  return (
    <>
      <LayoutInline gap="0.5rem" padding="1rem">
        <LayoutForm
          direction="column"
          gap="2rem"
          color="white"
          width="700px"
          heigth="300px"
          padding="2rem">
          <H1C text="Registro:" width="extralargo" />
          <H3C
            text="¿Por qué necesitamos esta información?"
            width="extralargo"
          />
          <PC
            text="Esta información es necesaria para crear tu cuenta y te permitirá accceder a todas las ventajas."
            width="extralargo"></PC>
        </LayoutForm>
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

                <label htmlFor="custom-input" className="placeholder-register">
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
                <label htmlFor="custom-input" className="placeholder-register">
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

                <label htmlFor="custom-input" className="placeholder-register">
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

              <LayoutInline gap="0.5rem" padding="1rem">
                <div className="sexo-masculino">
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
                </div>
                <div className="sexo-femenino">
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

              <LayoutFlex
                direction="column"
                gap="1rem"
                color="f2f2f2"
                padding="1rem">
                <Button
                  type="submit"
                  text="Registrar"
                  variant="contained"
                  color="white"
                />
              </LayoutFlex>
            </form>
          </LayoutForm>

          <LayoutForm direction="column" gap="0" color="white" padding="0">
            <LayoutInfo content="center">
              <PC
                text="Haciendo click en Registrar, aceptas:"
                width="largo2"
                size="small"
              />
              <LayoutInfo content="center" gap="0.5rem">
                <Link className="anchorCustomSmall">
                  Términos y Condiciones
                </Link>
                <Link className="anchorCustomSmall">
                  Política de Privacidad
                </Link>
              </LayoutInfo>
            </LayoutInfo>

            <LayoutInfo content="center" gap="1rem">
              <PC text="¿Ya tienes cuenta?" width="medio" />
              <Link to="/login" className="anchorCustom">
                Accede a tu cuenta aquí.
              </Link>
            </LayoutInfo>
          </LayoutForm>
        </LayoutForm>
      </LayoutInline>
    </>
  );
};
export default Register;
