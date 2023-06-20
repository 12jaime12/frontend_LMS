import { API } from "./service.config";

//--------------------CREATE CAR----------------------
//--------------------DELETE CAR----------------------
//--------------------GET ALL-------------------------
export const getAllCochesOcasion = async () => {
  return API.get("/coche")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
//--------------------GET BY MODELO-------------------
//--------------------GET BY LIKES--------------------
//--------------------GET BY MARCA--------------------
//--------------------ADD INTERESADO------------------
//--------------------ADD LIKE------------------------
//--------------------ADD TALLER----------------------
