import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  deleteUser,
  getByIdUser,
} from "../../service/API_proyect/user.service";
import { useAuth } from "../../contexts/authContext";
import "./Profile.css";
import PrintCochesPerfil from "../../components/PrintInfoCoche/PrintInfoCoche";
import PrintInfoCoche from "../../components/PrintInfoCoche/PrintInfoCoche";
import PrintAllCoches from "../../components/PrintAllCoches/PrintAllCoches";
import deleteCocheUser from "../../util/deleteCocheUser";
import CarruselPersonalizar from "../../components/CarruselPersonalizar/CarruselPersonalizar";
import CarruselPorTres from "../../components/CarruselPorTres/CarruselPorTres";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import ChangeImageProfile from "../../components/ChangeImageProfile/ChangeImageProfile";
import { H2C, PC } from "../../components/ui";
import Swal from "sweetalert2";
import CarruselScroll from "../../components/CarruselScroll/CarruselScroll";

const Profile = () => {
  const { user, logout, setUser } = useAuth();
  const [send, setSend] = useState(false);
  const [res, setRes] = useState();
  const [resDelete, setResDelete] = useState(false);
  const [cochesUser, setCochesUser] = useState(false);
  const [likesUser, setLikesUser] = useState(false);
  const [commentsUser, setCommentsUser] = useState(false);
  const navigate = useNavigate();

  console.log("user perfil", user);
  console.log(user.id);
  if (user == null) {
    navigate("/dashboard");
  }

  const getIdService = async () => {
    setRes(await getByIdUser(user.id));
  };
  const userDelete = async () => {
    Swal.fire({
      title: "¿Seguro que quieres borrar el usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(73, 193, 162)",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser();
        switch (res.status) {
          case 200:
            Swal.fire({
              icon: "success",
              title: "Usuario borrado de la base de datos",
              text: "Nos vemos pronto! 😜 🏎️💨",
              showConfirmButton: false,
              timer: 3500,
            });
            setResDelete(() => true);
            logout();
            break;

          default:
            Swal.fire({
              icon: "error",
              title: "ERROR",
              text: "Please, try again",
              showConfirmButton: false,
              timer: 1500,
            });

            break;
        }
      }
    });
  };
  //setRes(await getByIdUser(user.id))
  const userInfo = res?.data;
  console.log("userinfo", userInfo);
  useEffect(() => {
    getIdService();
  }, []);

  useEffect(() => {
    getIdService();
  }, [resDelete]);

  return (
    <div className="Profile">
      {userInfo != null && (
        <>
          <div className="divImgmasInfo">
            <div className="DivUpdatePerfil">
              <img
                src={userInfo.imagen}
                alt={userInfo.name}
                className="imagePerfil"
              />
              <div className="divBotonesPerfil">
                <Link to="/updateProfile" className="anchorCustom">
                  <Button
                    type="text"
                    text="Modificar PERFIL"
                    variant="contained"
                    color="white"
                    onClick={<UpdateProfile data={userInfo} />}
                  />
                </Link>
                <img
                  src="https://res.cloudinary.com/dx3e6knoz/image/upload/v1687683100/delete-user-icon-png_ebmir2.webp"
                  alt="delete user"
                  className="imageDeleteUser"
                  onClick={() => userDelete()}
                />
              </div>
            </div>
            <div className="divInfoUser">
              <h2>
                {userInfo.name.toUpperCase()} {userInfo.apellido.toUpperCase()}
              </h2>
              <h4>email: {userInfo.email}</h4>
              <h4>rol: {userInfo.rol}</h4>
              <div className="divInfoPersonal">
                <details className="infoPersonal">
                  <summary>INFORMACION PERSONAL:</summary>
                  <p>PAIS: {userInfo.pais}</p>
                  <p>PROVINCIA: {userInfo.provincia}</p>
                  <p>CIUDAD: {userInfo.ciudad}</p>
                  <p>DIRECCION: {userInfo.direccion}</p>
                  <p>DNI: {userInfo.dni}</p>
                  <p></p>
                </details>
              </div>
            </div>
          </div>
          {/* <div className="divUserCoches">
          <h2>COCHES PROPIOS</h2>
          <Button
              text="Añadir coche"
              action={() => navigate("/createCoche")}
              variant="contained"
              color="white"
            />
          
          <CarruselPorTres data={userInfo.coche_cliente}/>

        </div>
        <div className="divUserLikes">
          <h2>LIKES</h2>
          <CarruselPorTres data={userInfo.like_coche}/>

        </div>
        <div className="divUserComments">
          <h2>COMENTARIOS</h2>


        </div> */}
          <div className="divCarruselUser">
            <ul className="ulInfoUser">
              <li
                onClick={() => (
                  setCochesUser(true),
                  setLikesUser(false),
                  setCommentsUser(false)
                )}
              >
                Coches
              </li>
              <li
                onClick={() => (
                  setCochesUser(false),
                  setLikesUser(true),
                  setCommentsUser(false)
                )}
              >
                Likes
              </li>
              <li
                onClick={() => (
                  setCochesUser(false),
                  setLikesUser(false),
                  setCommentsUser(true)
                )}
              >
                Personalizados
              </li>
            </ul>
            {cochesUser && (
              <div className="divCarruselInfo">
                <h2>Coches propios:</h2>
                <Button
                  text="Añadir coche"
                  action={() => navigate("/createCoche")}
                  variant="contained"
                  color="white"
                />

                <CarruselScroll
                  cocheUser={userInfo.coche_cliente}
                  variable={"coche"}
                />
              </div>
            )}
            {likesUser && (
              <div className="divCarruselInfo">
              <h2>Likes:</h2>
                <Button
                  text="Ver galeria"
                  action={() => navigate("/compraryvender")}
                  variant="contained"
                  color="white"
                />

                <CarruselScroll
                  cocheUser={userInfo.like_coche}
                  likes={"likes"}
                />
              </div>
            )}
            {commentsUser && (
              <div className="divCarruselInfo">
                <h2>Coches personalizados: </h2>
                <Button
                  text="Ver galeria"
                  action={() => navigate("/comprayventa")}
                  variant="contained"
                  color="white"
                />

                <CarruselScroll
                  cocheUser={userInfo.coche_tienda}
                  variable={"catalogo"}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
