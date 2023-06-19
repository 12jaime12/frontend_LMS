import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
const CheckCode = () => {
  const userLocal = localStorage.getItem("user");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [send, setSend] = useState(false);
  const [res, setRes] = useState();
  const [codeOk, setCodeOk] = useState();
  //falta traer el contexto

  const formSubmit = async (formData) => {
    if (userLocal == null) {
      const customFormData = {
        confirmationCode: "",
        email: "",
      };
      setSend(true);
      //-----------------------setRes(await SERVICIO)
      setSend(false);
    } else {
      const parseUser = JSON.parse(userLocal);
      const customFormData = {
        confirmationCode: parseInt(formData.confirmationCode),
        email: parseUser.email,
      };
    }
  };

  return (
    <>
      <div className="fondo">
        <div className="form-wrap">
          <h1>Verificación de código</h1>
          <p>Escribe el código que has recibido a tu correo electrónico</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
              <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                {...register("code", { required: false })}
              />
              <label htmlFor="custom-input" className="custom-placeholder">
                Código de registro
              </label>
            </div>

            <div className="btn_container">
              <button
                id="btnCheck"
                className="btn"
                type="submit"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
              >
                Código de verificación
              </button>
            </div>
            <div className="btn_container">
              <button
                id="btnResend"
                className="btn"
                disabled={send}
                style={{ background: send ? "#001d86" : "#001d86b1" }}
                onClick={() => handleReSend()}
              >
                Reenviar código
              </button>
            </div>

            <p className="bottom-text">
              <small>
                Si el código introducido no es correcto, su usuario será
                eliminado de la base de datos y tendrá que registrarse de nuevo.{" "}
              </small>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckCode;
