import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import "./Register.css";

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { registerUser } from "../../service/API_proyect/user.service";
import { Link } from "react-router-dom";
import useRegisterError from "../../hooks/useError/useRegisterError";
import { H1C } from "../../components/ui/h1.element";


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
    <div className="generalContainerRegister">
    <div className="form-wrap">
    <H1C text="Regístrate para accceder a todas las ventajas"width="largo"/>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="nombreCompleto">
          <div className="user_container form-group">
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
          </div>

          <div className="user_container form-group">
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
          </div>
          </div>

          <div className="telefono_container form-group">
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
          </div>

          <div className="dni_container form-group">
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
          </div>

          <div className="email_container form-group">
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
          </div>
          <div className="ubicacion">
          <div className="pais_container form-group">
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
          </div>

          <div className="provincia_container form-group">
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
          </div>

          <div className="ciudad_container form-group">
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
          </div>

          <div className="ciudad_container form-group">
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
          </div>
          </div>

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

          <div className="password_container form-group">
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
          </div>

          {/* <div>
            <UploadFile />
          </div> */}

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#001d86" : "#001d86b1" }}
            >
              Registrar
            </button>
          </div>
          <p className="bottom-text">
            <small>
              Haciendo click en el botón de Registrar, estás de acuerdo con{" "}
              <Link className="anchorCustom">Términos y Condiciones</Link> y{" "}
              <Link className="anchorCustom">Política de Privacidad</Link>.
            </small>
          </p>
        </form>
      </div>
      </div>
      <div className="footerForm">
        <p className="parrafoLogin">
          ¿Ya tienes cuenta? <Link to="/login">Accede a tu cuenta aquí.</Link>
        </p>
      </div>
      
    </>
  );
};
export default Register;
