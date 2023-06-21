import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import { getAllCochesOcasion } from "../../service/API_proyect/coche.service";
import Button from "../../components/ui/Button";
import "./Compraventa.css"
const CompraVenta = () => {
  //AQUI CREO LA ESTRUCTURA DE LA PAGINA DE COMPRAVENTA -> 2 BOTONES CON comprar y vender Y UN OUTLET CON EL CONTENIDO(todos los coches)
  //form comprar, form vender...etc
  const navigate=useNavigate()
  return (
  <>
  <nav className="ulNavCompraventa">

    <Button type="text" text="COMPRAR" variant="contained" color="white" action={()=>navigate("/compraryvender")}/>

    <Button type="text" text="VENDER" variant="contained" color="" action={() => navigate("/compraryvender/createCoche")}/>

  </nav>
  <Outlet/>
  </>
  )
};

export default CompraVenta;
