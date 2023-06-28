import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import {
  LayoutFlex,
  LayoutForm,
  LayoutInline,
  LayoutPosition,
} from "../../components/Layout";
import { H1C, PC } from "../../components/ui";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import { createCocheServicio } from "../../service/API_proyect/coche.service";
import "./CreateCoche.css";
import useCreateCoche from "../../hooks/useError/useCreateCoche";

const CreateCoche = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [send, setSend] = useState(false);
  const [res, setRes] = useState();
  const [resOk, setResOk] = useState(false);
  const [created, setCreatedOk] = useState(false);
  const { register, handleSubmit } = useForm();
  const inputFrontal = useRef();
  const inputIzquierdo = useRef();
  const inputDerecho = useRef();
  const inputTrasero = useRef();
  const [image, setImage] = useState([]);

  const formData2 = new FormData();

  const formSubmit = async (formData) => {
    console.log(inputFrontal?.current?.files);

    const customFormData = {
      option_1: inputFrontal?.current?.files[0],
      option_2: inputDerecho?.current?.files[0],
      option_3: inputTrasero?.current?.files[0],
      option_4: inputDerecho?.current?.files[0],
      ...formData,
    };
    setSend(true);
    setRes(await createCocheServicio(customFormData));
    setSend(false);
  };

  // const formSubmit=async(formData)=>{
  //   console.log(inputFrontal?.current?.files)
  //   console.log(inputIzquierdo)
  //   console.log(inputDerecho)
  //   console.log(inputTrasero)

  const handleImage = (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    console.log(fileName);
    setImage([...image, fileName]);
    console.log(e.target.files);
  };

  useEffect(() => {
    res != null && console.log("create car", res);
    useCreateCoche(res, setResOk);
  }, [res]);

  useEffect(() => {
    console.log("image", image);
    console.log("dataCustom", formData2);
  }, [formData2]);

  resOk && navigate("/profile");

  return (
    <>
    <div className="Compra-venta-crearCoche">
      <nav className="ulNavCompraventa">
        <Button
          type="text"
          text="Tienda"
          variant="contained"
          color="white"
          action={() => navigate("/compraryvender")}
        />
      </nav>
    </div>
    <div className="CreateCar">
      <LayoutInline padding="1rem" gap="0.5rem" flexMedia="column">
        <LayoutForm
          direction="column"
          gap="3rem"
          color="white"
          width="700px"
          heigth="300px"
          padding="2rem"
        >
          <H1C text="Datos del vehículo" width="extralargo" />
          <PC
            text="Añade los datos de tu vehículo y las mejores fotos para iniciar la venta."
            width="largo"
          ></PC>
        </LayoutForm>
        <LayoutForm
          direction="column"
          gap="3rem"
          color="#f2f2f2"
          width="700px"
          heigth="300px"
          padding="2rem"
        >
          <form
            onSubmit={handleSubmit(formSubmit)}
            encType="multipart/form-data"
          >
            <LayoutInline padding="1rem" gap="3rem">
              <LayoutFlex
                direction="column"
                gap="0.5rem"
                padding="0"
                placeItems="normal"
              >
                <label htmlFor="custom-input" className="placeholder-create">
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
                <label htmlFor="custom-input" className="placeholder-create">
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
                <label htmlFor="custom-input" className="placeholder-create">
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
                <label htmlFor="custom-input" className="placeholder-create">
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
                <label htmlFor="custom-input" className="placeholder-create">
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
                <label htmlFor="custom-input" className="placeholder-create">
                  Información del vehículo
                </label>
                <input
                  className="input_user"
                  type="text"
                  id="infoCar"
                  name="infoCar"
                  autoComplete="false"
                  {...register("content", { required: true })}
                />
              </LayoutFlex>

              <LayoutFlex direction="column" gap="0.5rem" padding="0rem">
                <label htmlFor="custom-input" className="custom-placeholder">
                  Imágenes
                </label>

                <label className="archivo" htmlFor="inputFrontal">
                  Frontal:{" "}
                  <section className="input-custom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-input"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {image.length < 1 ? "Seleccionar archivo" : image[0]}
                    </span>
                    <input
                      className="inputfile inputfile-2"
                      type="file"
                      id="inputFrontal"
                      name="imageCar"
                      autoComplete="false"
                      ref={inputFrontal}
                      onChange={(e) => handleImage(e)}
                    />
                  </section>
                </label>

                {/* <input 
                type="file" 
                name="file-2" 
                id="file-2" 
                className="inputfile inputfile-2" 
                data-multiple-caption="{count} archivos seleccionados" 
                multiple 
                ref={inputFrontal}
                onChange={(e)=>handleImage(e)}
                required="true"
                autoComplete="false"
                />
                <label htmlFor="file-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                <span class="iborrainputfile">{image.length<1 ? "Seleccionar archivo" : image[0]}</span>
                </label> */}

                <label className="archivo" htmlFor="inputDerecho">
                  Lateral derecho:{" "}
                  <section className="input-custom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-input"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {image.length < 2 ? "Seleccionar archivo" : image[1]}
                    </span>
                    <input
                      className="inputfile inputfile-2"
                      type="file"
                      id="inputDerecho"
                      name="imageCar"
                      autoComplete="false"
                      ref={inputDerecho}
                      onChange={(e) => handleImage(e)}
                    />
                  </section>
                </label>

                {/* <input 
                type="file" 
                name="file-2" 
                id="file-2" 
                className="inputfile inputfile-2" 
                data-multiple-caption="{count} archivos seleccionados" 
                multiple 
                ref={inputDerecho}
                onChange={(e)=>handleImage(e)}
                autoComplete="false"
                
                />
                <label htmlFor="file-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                <span class="iborrainputfile">{image.length<2 ? "Seleccionar archivo" : image[1]}</span>
                </label> */}

                <label className="archivo" htmlFor="inputTrasero">
                  Trasera:{" "}
                  <section className="input-custom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-input"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {image.length < 3 ? "Seleccionar archivo" : image[2]}
                    </span>
                    <input
                      className="inputfile inputfile-2"
                      type="file"
                      id="inputTrasero"
                      name="imageCar"
                      autoComplete="false"
                      ref={inputTrasero}
                      onChange={(e) => handleImage(e)}
                    />
                  </section>
                </label>

                {/* <input 
                type="file" 
                name="file-2" 
                id="file-2" 
                className="inputfile inputfile-2" 
                data-multiple-caption="{count} archivos seleccionados" 
                multiple 
                ref={inputTrasero}
                onChange={(e)=>handleImage(e)}
                autoComplete="false"
                />
                <label htmlFor="file-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                <span class="iborrainputfile">{image.length<3 ? "Seleccionar archivo" : image[2]}</span>
                </label> */}

                <label className="archivo" htmlFor="inputIzquierdo">
                  Lateral izquierdo:{" "}
                  <section className="input-custom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-input"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                    >
                      <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                    </svg>
                    <span className="iborrainputfile">
                      {image.length < 4 ? "Seleccionar archivo" : image[3]}
                    </span>
                    <input
                      className="inputfile inputfile-2"
                      type="file"
                      id="inputIzquierdo"
                      name="imageCar"
                      autoComplete="false"
                      input={inputIzquierdo}
                      onChange={(e) => handleImage(e)}
                    />
                  </section>
                </label>

                {/* <input 
                type="file" 
                name="file-2" 
                id="file-2" 
                className="inputfile inputfile-2" 
                data-multiple-caption="{count} archivos seleccionados" 
                multiple 
                ref={inputIzquierdo}
                onChange={(e)=>handleImage(e)}
                autoComplete="false"
                />
                <label htmlFor="file-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="iborrainputfile" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
                <span class="iborrainputfile">{image.length<4 ? "Seleccionar archivo" : image[3]}</span>
                </label> */}
              </LayoutFlex>
            </LayoutInline>
            <LayoutFlex
              direction="column"
              gap="0.5rem"
              color="f2f2f2"
              padding="1rem"
            >
              <Button
                type="submit"
                text="Crear Coche"
                variant="contained"
                color="white"
              />
            </LayoutFlex>
          </form>
        </LayoutForm>
      </LayoutInline>
    </div>
    </>
  );
};

export default CreateCoche;
