import React, { useEffect, useRef, useState } from "react";
import "./PrintAllCoches.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router";
import deleteCocheUser from "../../util/deleteCocheUser";
import Button from "../ui/Button";
import { addLike } from "../../service/API_proyect/user.service";
import ToggleButton from "../Like/Like";
import { getAllCochesOcasion, getByMarca } from "../../service/API_proyect/coche.service";

const PrintAllCoches = () => {
  const refInput = useRef()
  const [coches, setCoches] = useState();
  //const [cocheCarga, setCocheCarga] = useState();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [res, setRes] = useState(false);
  const [userLike, setUserLike] = useState();
  const [render, setRender] = useState(false);
  const [filtrarCoche, setFiltrarCoche] = useState()
  const [initRes, setInitRes] = useState(null);
  const [send, setSend] = useState(false);
  const arrayMarcas=[]
  const getCochesOcasion = async () => {
    console.log("user coches ocasion", user);
    setSend(true);
    setInitRes(await getAllCochesOcasion());
    setSend(false);
  };

  const cocheByMarca = async (event) => {
    setCoches(await getByMarca(event))
  }
 /*  const cochesCarga = coches;
  //console.log(cochesCarga);

 const buscarMarca = (e) => {
   console.log(e.target.value);
   const arrayAux = [];
   setFiltrarCoche(coches)
   console.log("cochesCarga",cochesCarga)

   cochesCarga.forEach((element) => {
     if (element.marca.includes(e.target.value)) {
       arrayAux.push(element);
     }
   });
   console.log("arrayAux", arrayAux)
   if(e.target.value!=""){
    setCoches(arrayAux);
   }else{
    setCoches(cochesCarga)
   }
   console.log("coches en funcion", coches)
 };
 */
 useEffect(()=>{
  console.log("ffffffffff",filtrarCoche)
 },[filtrarCoche])

  useEffect(() => {
    getCochesOcasion();
  }, []);

  // useEffect(() => {
  //   setCocheCarga(coches);
  // }, []);

  useEffect(() => {
    if (initRes?.status == 200) setCoches(initRes.data);
  }, [initRes]);

  // useEffect(() => {
  //   console.log(cocheCarga);
  // }, [cocheCarga]);
console.log("ressssssssss", initRes)
  useEffect(() => {
    getCochesOcasion();
    
  }, [res]);

  return (
    <div>
      <div>
        {/* <input type="text" onChange={(e) => buscarMarca(e)}></input> */}
        {/* <input type="text" ref={refInput}></input>
        <button >Buscar</button> */}
        {
          initRes?.data?.forEach((elem)=>{
            arrayMarcas.push(elem.marca)
            console.log(arrayMarcas)
          })}
        {
          arrayMarcas.forEach((element)=>{
            console.log("element marca", element)
          })
        }

        
      </div>
      <div className="divAllCoches">
        {coches?.map((elem) => (
          <div key={elem._id}>
            <figure
              className="figureCoche"
              onClick={() => navigate(`/compraryvender/coche/${elem._id}`)}
            >
              <div className="divFigureCoche">
                <img src={elem.image[0]} alt={elem.modelo} />
                <div className="divCocheInfo">
                  <p>
                    {elem.marca} {elem.modelo}
                  </p>
                  <p>
                    Precio: <strong>{elem.precio} €</strong>
                  </p>
                </div>
              </div>
            </figure>

            <div className="divIconos">
              <div className="divLikesCoches">
              <img src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687677683/message-circle-2-filled_sy9woy.svg" alt="icono comentarios"
                onClick={() =>
                  user == null
                    ? navigate("/login")
                    : navigate(`/compraryvender/coche/${elem._id}`)
                }
              />
              <p>{elem.comentario.length}</p></div>  
              <div className="divLikesCoches">
                <ToggleButton car={elem} setAllElementByPather={setCoches} />
                <p>{elem.like.length}</p>
              </div>
              {user?.coches?.includes(elem._id) && (
                <img src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687680460/trash_hc1jlx.svg" alt="delete icon" onClick={() => deleteCocheUser(elem._id, setRes)}/>
                
              )}


            </div>
            {/* <Button)
      type="button"
        text="Borrar"
        action={deleteCocheUser(elem._id, setRes)}
        variant="contained"
        color="white"
      /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintAllCoches;
