import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../contexts/authContext";
import { getAllCochesOcasion } from "../../service/API_proyect/coche.service";
import printCoches from "../../components/printCoches";

const CompraVenta = async () => {
  return (
  <>
  <Outlet/>
  </>
  )
};

export default CompraVenta;
